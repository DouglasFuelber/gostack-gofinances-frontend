import React, { useState } from 'react';

import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';

import { Container, Title, ImportFileContainer, Footer } from './styles';

import alert from '../../assets/alert.svg';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const [uploadError, setUploadError] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  async function handleUpload(): Promise<void> {
    try {
      uploadedFiles.forEach(async file => {
        const data = new FormData();
        data.append('file', file.file);

        await api.post('/transactions/import', data);
      });

      setUploadedFiles([]);
      setUploadSuccess(true);
    } catch (err) {
      setUploadError(true);
      console.log(err.response.error);
    }
  }

  function submitFile(files: File[]): void {
    setUploadError(false);
    setUploadSuccess(false);

    files.forEach(file => {
      const newFile: FileProps = {
        file,
        name: file.name,
        readableSize: file.size.toString(),
      };

      setUploadedFiles([...uploadedFiles, newFile]);
    });
  }

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <p className="success">
            {uploadSuccess && 'Arquivo(s) importado(s) com sucesso'}
          </p>
          <p className="error">
            {uploadError && 'Erro ao importar arquivo(s)'}
          </p>
          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
