import React from 'react';

import { Container, FileInfo } from './styles';

interface IFileProps {
  name: string;
  readableSize: string;
}

interface IFileListProps {
  files: IFileProps[];
}

const FileList: React.FC<IFileListProps> = ({ files }: IFileListProps) => {
  return (
    <Container>
      {files.map(uploadedFile => (
        <li key={uploadedFile.name}>
          <FileInfo>
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>{uploadedFile.readableSize}</span>
            </div>
          </FileInfo>
        </li>
      ))}
    </Container>
  );
};

export default FileList;
