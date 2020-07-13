import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Element } from 'react-scroll';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi';

import api from '../../../../../../services/api';

import Button from '../../../../../../components/Button';

import { Container, UseProject, Pagination, PaginationItem } from './styles';

interface IFile {
  url: string;
}

interface IProject {
  id: string;
  name: string;
  description: string;
  repository: string;
  demonstration: string;
  thumbnail_url: string;
  files: IFile[];
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [selectedProject, setSelectedProject] = useState<IProject>(
    {} as IProject,
  );

  useEffect(() => {
    async function loadProjects(): Promise<void> {
      const response = await api.get<IProject[]>('projects');

      const data = response.data.map(project => {
        const { files } = project;

        return {
          ...project,
          thumbnail_url: files[0].url,
        };
      });

      if (data.length > 0) {
        setSelectedProject(data[0]);
      }

      setProjects(data);
    }

    loadProjects();
  }, []);

  const handleSelectProject = useCallback(
    (id: string) => {
      const findProject = projects.find(project => project.id === id);

      if (findProject && selectedProject.id !== id) {
        setSelectedProject(findProject);
      }
    },
    [setSelectedProject, selectedProject, projects],
  );

  const nextProjectPosition = useMemo(() => {
    const projectIndex = projects.findIndex(
      project => project.id === selectedProject.id,
    );

    return projects[projectIndex + 1];
  }, [projects, selectedProject]);

  const backProjectPosition = useMemo(() => {
    const projectIndex = projects.findIndex(
      project => project.id === selectedProject.id,
    );

    return projects[projectIndex - 1];
  }, [projects, selectedProject]);

  return (
    <Container>
      <div>
        <h1>meus.projetos</h1>

        {selectedProject && (
          <UseProject style={{ textAlign: 'center' }}>
            <h3>{selectedProject.name}</h3>

            <p>{selectedProject.description}</p>
            <a href={selectedProject.demonstration}>Acessar projeto</a>
          </UseProject>
        )}

        <Pagination>
          <Button
            disabled={!backProjectPosition}
            onClick={() => handleSelectProject(backProjectPosition.id)}
          >
            <FiChevronsLeft size={25} color="#f4ede8" />
          </Button>
          <Button
            disabled={!nextProjectPosition}
            onClick={() => handleSelectProject(nextProjectPosition.id)}
          >
            <FiChevronsRight size={25} color="#f4ede8" />
          </Button>
        </Pagination>
      </div>
      <Element id="projects" name="projects">
        <img src={selectedProject.thumbnail_url} alt="Project" />

        <Pagination>
          {projects.map(project => (
            <PaginationItem
              key={project.id}
              isSelected={selectedProject.id === project.id}
              onClick={() => handleSelectProject(project.id)}
            />
          ))}
        </Pagination>
      </Element>
    </Container>
  );
};

export default Projects;
