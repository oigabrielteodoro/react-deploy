import React, { useRef, useState, useCallback } from 'react';
import { Element } from 'react-scroll';
import { FiUser, FiMail } from 'react-icons/fi';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import getValidationErrors from '../../../../../../utils/getValidationErrors';

import api from '../../../../../../services/api';

import Button from '../../../../../../components/Button';
import Input from '../../../../../../components/Input';
import TextArea from '../../../../../../components/TextArea';
import Alert from '../../../../../../components/Alert';

import { Container, InputGroup, UseCheckbox, SelectPage } from './styles';

interface ICreateProjectFormData {
  name: string;
  email: string;
  message: string;
  layout: boolean;
  pages: string;
}

const available = ['1', '2', '3', '4', '5', '+'];

const CreateProject: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  const [selectedLayout, setSelectedLayout] = useState<boolean>(false);
  const [selectedPagination, setSelectedPagination] = useState<string>('1');

  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);

  const handleSelectLayout = useCallback(
    (value: boolean) => {
      setSelectedLayout(value);
    },
    [setSelectedLayout],
  );

  const handleSelectPagination = useCallback(
    (value: string) => {
      setSelectedPagination(value);
    },
    [setSelectedPagination],
  );

  const handleSubmit = useCallback(
    async (data: ICreateProjectFormData) => {
      setLoading(true);

      try {
        formRef.current?.setErrors([]);

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          message: Yup.string().required(
            'Digite uma mensagem para descrever o seu projeto',
          ),
          layout: Yup.boolean().required(),
        });

        Object.assign(data, {
          layout: selectedLayout,
          pages: selectedPagination,
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('tenders', data);

        setHasSuccess(true);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        setHasSuccess(false);
        setHasError(true);
      } finally {
        setLoading(false);

        setTimeout(() => {
          setHasSuccess(false);
          setHasError(false);
        }, 3000);
      }
    },
    [selectedPagination, selectedLayout],
  );

  return (
    <Container>
      <Element name="createProject">
        <h1>iniciar.projeto</h1>

        <h3>Vamos tirar sua idéia do papel!</h3>
        <p>
          Conte me um pouco da sua idéia, te retornarei o mais rápido possível.
        </p>
        <span>Você só pode enviar uma proposta por vez!</span>
      </Element>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" icon={FiUser} placeholder="Nome completo" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <div>
          <span>Você já possui o layout?</span>

          <InputGroup>
            <UseCheckbox isChecked={selectedLayout}>
              <strong />
              <Input
                name="layout"
                type="radio"
                readOnly
                checked={selectedLayout}
                onChange={() => handleSelectLayout(true)}
              />
              <span>Sim</span>
            </UseCheckbox>
            <UseCheckbox isChecked={!selectedLayout}>
              <strong />
              <Input
                name="layout"
                type="radio"
                readOnly
                checked={!selectedLayout}
                onChange={() => handleSelectLayout(false)}
              />
              <span>Não</span>
            </UseCheckbox>
          </InputGroup>
        </div>

        <div>
          <span>Número de páginas do projeto</span>

          <ul>
            {available.map(value => (
              <SelectPage
                key={value}
                isChecked={selectedPagination === value}
                onClick={() => handleSelectPagination(value)}
              >
                <span>{value}</span>
                <Input
                  name="pages"
                  type="radio"
                  readOnly
                  checked={selectedPagination === value}
                  value={value}
                />
              </SelectPage>
            ))}
          </ul>
        </div>

        <TextArea name="message" placeholder="Mensagem" required />

        <Alert type="success" isVisible={hasSuccess}>
          Sua proposta de projeto foi enviada, retornarei em breve!
        </Alert>
        <Alert type="error" isVisible={hasError}>
          Ocorreu um erro ao enviar sua proposta, tente novamente.
        </Alert>
        <Button type="submit">{loading ? 'Enviando...' : 'Enviar'}</Button>
      </Form>
    </Container>
  );
};

export default CreateProject;
