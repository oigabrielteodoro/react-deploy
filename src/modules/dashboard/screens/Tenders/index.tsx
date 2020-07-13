import React, { useState, useEffect, useCallback } from 'react';
import { format, parseISO } from 'date-fns';

import { useToast } from '../../../../hooks/toast';

import {
  Table,
  TableItem,
  TenderStatus,
  TenderDetail,
  UseSettings,
  UseSettingsItem,
  Error,
} from './styles';

import Button from '../../../../components/Button';
import AnswerModal from '../../../../components/AnswerModal';

import Header from '../../components/Header';
import Card from '../../components/Card';

import Skeleton from './Skeleton';

import api from '../../../../services/api';

import notfound from '../../../../assets/not-found.svg';

interface ITender {
  id: string;
  name: string;
  email: string;
  message: string;
  layout: boolean;
  pages: string;
  status: 'pending' | 'accept' | 'dismiss';
  created_at: string;
  translattedStatus: string;
  dateFormatted: string;
  visible: boolean;
}

const Tenders: React.FC = () => {
  const { addToast } = useToast();

  const [loading, setLoading] = useState(true);
  const [tenders, setTenders] = useState<ITender[]>([]);

  const [selectedStatus, setSelectedStatus] = useState<
    'pending' | 'accept' | 'dismiss'
  >('pending');

  useEffect(() => {
    async function loadTenders(): Promise<void> {
      const response = await api.get<ITender[]>('tenders/status', {
        params: {
          status: selectedStatus,
        },
      });

      const data = response.data.map(tender => {
        const translattedStatus =
          tender.status === 'pending'
            ? 'Pendente'
            : tender.status === 'accept'
            ? 'Aceito'
            : 'Recusado';

        return {
          ...tender,
          translattedStatus,
          hourFormatted: format(
            parseISO(tender.created_at),
            'dd/MM/yyyy HH:mm',
          ),
          visible: false,
        };
      });

      setTenders(data);
      setLoading(false);
    }

    loadTenders();
  }, [selectedStatus]);

  const handleSelectStatus = useCallback(
    (value: 'pending' | 'accept' | 'dismiss') => {
      setSelectedStatus(value);
      setLoading(true);
    },
    [setSelectedStatus],
  );

  const handleToggleVisibleTenderDetail = useCallback(
    (id: string) => {
      const tendersUpdatted = tenders.map(findTender =>
        findTender.id === id
          ? {
              ...findTender,
              visible: !findTender.visible,
            }
          : findTender,
      );

      setTenders(tendersUpdatted);
    },
    [tenders, setTenders],
  );

  const handleChangeStatus = useCallback(
    async (id: string, status: 'pending' | 'accept' | 'dismiss') => {
      try {
        const response = await api.put<ITender>(`tenders/status/${id}`, {
          status,
        });

        const updatted = response.data;

        Object.assign(updatted, {
          translattedStatus: status === 'accept' ? 'Aceito' : 'Recusado',
          hourFormatted: format(
            parseISO(updatted.created_at),
            'dd/MM/yyyy HH:mm',
          ),
          visible: false,
        });

        setSelectedStatus(status);

        addToast({
          type: status === 'accept' ? 'success' : 'info',
          title: `Proposta ${status === 'accept' ? 'Aceita' : 'Recusada'}`,
          description:
            status === 'accept'
              ? 'Parabéns! Agora entre em contato com o cliente.'
              : 'Você recusou uma proposta, quem sabe da próxima.',
        });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao aceitar proposta',
          description:
            'Ocorreu um erro ao aceitar a proposta, tente novamente.',
        });
      }
    },
    [addToast],
  );

  return (
    <>
      <Header title="Propostas" />

      <Card>
        <header>
          <h3>Últimas propostas</h3>

          <UseSettings>
            <UseSettingsItem
              selected={selectedStatus === 'pending'}
              onClick={() => handleSelectStatus('pending')}
            >
              Pendente
            </UseSettingsItem>
            <UseSettingsItem
              selected={selectedStatus === 'accept'}
              onClick={() => handleSelectStatus('accept')}
            >
              Aceito
            </UseSettingsItem>
            <UseSettingsItem
              selected={selectedStatus === 'dismiss'}
              onClick={() => handleSelectStatus('dismiss')}
            >
              Recusado
            </UseSettingsItem>
          </UseSettings>
        </header>
        {loading ? (
          <Skeleton />
        ) : (
          <>
            {tenders.length > 0 ? (
              <Table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Já possui layout?</th>
                    <th>Nº de Páginas</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tenders.map(tender => (
                    <>
                      <TableItem
                        key={tender.id}
                        onClick={() =>
                          handleToggleVisibleTenderDetail(tender.id)
                        }
                      >
                        <td>{tender.name}</td>
                        <td>{tender.email}</td>
                        <td>{tender.layout ? 'Sim' : 'Não'}</td>
                        <td>
                          {tender.pages === '+' ? 'Mais de 7' : tender.pages}
                        </td>
                        <td>
                          <TenderStatus status={tender.status}>
                            <span>{tender.translattedStatus}</span>
                          </TenderStatus>
                        </td>
                      </TableItem>

                      <AnswerModal
                        visible={tender.visible}
                        onCancel={() =>
                          handleToggleVisibleTenderDetail(tender.id)
                        }
                      >
                        <h4>Detalhes da proposta</h4>

                        <TenderDetail>
                          <div>
                            <strong>Criado por: </strong>
                            <span>{tender.name}</span>
                          </div>
                          <div>
                            <strong>E-mail para contato: </strong>
                            <span>{tender.email}</span>
                          </div>
                          <div>
                            <strong>Já possui o layout? </strong>
                            <span>{tender.layout ? 'Sim' : 'Não'}</span>
                          </div>
                          <div>
                            <strong>Número de páginas: </strong>
                            <span>
                              {tender.pages === '+'
                                ? 'Mais de 7 páginas'
                                : `${tender.pages} página(s)`}
                            </span>
                          </div>
                          <div>
                            <strong>Mensagem sobre o projeto: </strong>

                            <textarea>{tender.message}</textarea>
                          </div>
                          <div>
                            <strong>Status: </strong>
                            <span>{tender.translattedStatus}</span>
                          </div>
                          {tender.status === 'pending' && (
                            <footer>
                              <Button
                                type="button"
                                onClick={() =>
                                  handleChangeStatus(tender.id, 'accept')
                                }
                              >
                                ACEITAR
                              </Button>
                              <Button
                                type="button"
                                onClick={() =>
                                  handleChangeStatus(tender.id, 'dismiss')
                                }
                              >
                                RECUSAR
                              </Button>
                            </footer>
                          )}
                        </TenderDetail>

                        <footer>
                          <p>{tender.id}</p>
                        </footer>
                      </AnswerModal>
                    </>
                  ))}
                </tbody>
              </Table>
            ) : (
              <Error>
                <img src={notfound} alt="Not Found" />
                <strong>Não encontramos nada...</strong>
                <span>
                  Não encontramos nenhuma proposta de acordo com os filtros
                  aplicados.
                </span>
              </Error>
            )}
          </>
        )}
      </Card>
    </>
  );
};

export default Tenders;
