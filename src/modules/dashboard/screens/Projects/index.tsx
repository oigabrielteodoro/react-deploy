import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  FiTag,
  FiAlignCenter,
  FiGithub,
  FiLink,
  FiEdit,
  FiTrash2,
  FiEye,
} from 'react-icons/fi';
import * as Yup from 'yup';

import filesize from 'filesize';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useToast } from '../../../../hooks/toast';

import getValidationErrors from '../../../../utils/getValidationErrors';

import api from '../../../../services/api';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import Header from '../../components/Header';
import Card from '../../components/Card';

import Upload from './Upload';
import FileList from './FileList';
import Skeleton from './Skeleton';

import {
  Content,
  CardGroup,
  InputGroup,
  Table,
  TableItem,
  ActionItem,
} from './styles';

interface IFileProps {
  file: File;
  name: string;
  readableSize: string;
}

interface IProject {
  name: string;
  description: string;
  repository: string;
  demonstration: string;
  likes: number;
  files: IFileProps[];
}

const Projects: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<IFileProps[]>([]);

  useEffect(() => {
    api.get<IProject[]>('projects').then(response => {
      setProjects(response.data);
      setLoading(false);
    });
  }, []);

  const handleSubmit = useCallback(
    async (data: IProject) => {
      setLoading(true);

      try {
        formRef.current?.setErrors([]);

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          description: Yup.string().required('Descrição obrigatória'),
          repository: Yup.string().required('Repositório obrigatório'),
          demonstration: Yup.string().required('Demonstração obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const formData = new FormData();

        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('repository', data.repository);
        formData.append('demonstration', data.demonstration);

        if (uploadedFiles.length > 0) {
          uploadedFiles.map(uploadFile =>
            formData.append('files', uploadFile.file),
          );
        }

        const response = await api.post('projects', formData);

        setProjects([...projects, response.data]);

        addToast({
          type: 'success',
          title: 'Projeto criado com sucesso',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na criação',
          description:
            'Ocorreu um erro ao realizar a criação de um projeto, tente novamente.',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, uploadedFiles, projects, setProjects],
  );

  const handleSubmitFiles = useCallback(
    (files: File[]) => {
      const uploadFiles = files.map((file: File) => {
        const { name } = file;
        const readableSize = filesize(file.size);

        return {
          file,
          name,
          readableSize,
        };
      });

      setUploadedFiles([...uploadedFiles, ...uploadFiles]);
    },
    [setUploadedFiles, uploadedFiles],
  );

  return (
    <>
      <Header title="Projetos" />

      <Content>
        <CardGroup>
          <Card style={{ flex: 'none', width: 900 }}>
            <header>
              <h3>Criar um novo projeto</h3>
            </header>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input name="name" icon={FiTag} placeholder="Nome do projeto" />
              <Input
                name="description"
                icon={FiAlignCenter}
                placeholder="Descrição do projeto"
              />
              <InputGroup>
                <Input
                  name="repository"
                  containerStyle={{ marginRight: 25 }}
                  placeholder="Link do repositório"
                  icon={FiGithub}
                />
                <Input
                  name="demonstration"
                  containerStyle={{ marginTop: 0 }}
                  placeholder="Link da demonstração"
                  icon={FiLink}
                />
              </InputGroup>

              <Button type="submit">Enviar projeto</Button>
            </Form>
          </Card>
          <Card style={{ flex: 'none', width: 445 }}>
            <header>
              <h3>Upload de imagens</h3>
            </header>

            <Upload onUpload={handleSubmitFiles} />
            {!!uploadedFiles.length && <FileList files={uploadedFiles} />}
          </Card>
        </CardGroup>
        <Card style={{ marginTop: 25 }}>
          <header>
            <h3>Listagem de projetos</h3>
          </header>
          {loading ? (
            <Skeleton />
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Github</th>
                  <th>Demonstração</th>
                  <th>Curtidas</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {projects.map(project => (
                  <TableItem>
                    <td>{project.name}</td>
                    <td>
                      <a href={project.repository}>{project.repository}</a>
                    </td>
                    <td>
                      <a href={project.demonstration}>
                        {project.demonstration}
                      </a>
                    </td>
                    <td>{project.likes}</td>
                    <td>
                      <ActionItem type="button" color="#7051dc">
                        <FiEdit size={15} color="#fff" />
                      </ActionItem>

                      <ActionItem type="button" color="#c53030">
                        <FiTrash2 size={15} color="#fff" />
                      </ActionItem>
                      <ActionItem type="button" color="#25C7DD">
                        <FiEye size={15} color="#fff" />
                      </ActionItem>
                    </td>
                  </TableItem>
                ))}
              </tbody>
            </Table>
          )}
        </Card>
      </Content>
    </>
  );
};

export default Projects;
