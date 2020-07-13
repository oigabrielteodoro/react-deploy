import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiBell, FiLogOut } from 'react-icons/fi';
import { formatDistance, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useAuth } from '../../../../hooks/auth';

import api from '../../../../services/api';

import { useClickOutside } from '../../../../utils/getClickOutside';

import {
  Container,
  UseSearch,
  UseNotifications,
  NotificationsList,
  NotificationItem,
  NotificationEmpty,
  UseProfile,
} from './styles';

import notfound from '../../../../assets/not-found.svg';

interface IHeaderProps {
  title: string;
}

interface INotification {
  id: string;
  content: string;
  created_at: string;
  read: boolean;
  hourFormatted: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  const notificationsRef = useRef<HTMLDivElement>(null);

  const { user, signOut } = useAuth();

  const [isOpenNotifications, setIsOpenNotifications] = useState(false);
  const [notifications, setNotifications] = useState<INotification[]>([]);

  useEffect(() => {
    api.get<INotification[]>('notifications').then(response => {
      const data = response.data
        .filter(notification => !notification.read)
        .map(notification => {
          const hourFormatted = formatDistance(
            parseISO(notification.created_at),
            new Date(),
            {
              locale: ptBR,
            },
          );

          return {
            ...notification,
            hourFormatted,
          };
        });

      setNotifications(data);
    });
  }, []);

  const handleToggleNotifications = useCallback(() => {
    setIsOpenNotifications(!isOpenNotifications);
  }, [isOpenNotifications, setIsOpenNotifications]);

  const handleReadNotification = useCallback(
    async (id: string) => {
      const response = await api.put(`notifications/${id}`);

      const { data } = response;

      const notificationsUpdatted = notifications
        .map(notification => (notification.id === id ? data : notification))
        .filter(notification => !notification.read);

      setNotifications(notificationsUpdatted);
    },
    [setNotifications, notifications],
  );

  useClickOutside(
    notificationsRef,
    () => handleToggleNotifications(),
    isOpenNotifications,
  );

  return (
    <Container>
      <div>
        <h1>{title}</h1>

        <UseSearch>
          <button type="button">
            <FiSearch size={20} color="#A8A8B3" />
          </button>

          <input placeholder="Pesquisar" />
        </UseSearch>

        <UseNotifications
          ref={notificationsRef}
          hasNotifications={notifications.length > 0}
        >
          <button type="button" onClick={handleToggleNotifications}>
            <FiBell size={30} color="#A8A8B3" />
          </button>

          <span />

          {isOpenNotifications && (
            <>
              {notifications.length > 0 ? (
                <NotificationsList>
                  {notifications.map(notification => (
                    <NotificationItem
                      onClick={() => handleReadNotification(notification.id)}
                    >
                      <p>{notification.content}</p>
                      <div>
                        <span>{notification.hourFormatted}</span>

                        {!notification.read && <div />}
                      </div>
                    </NotificationItem>
                  ))}
                </NotificationsList>
              ) : (
                <NotificationEmpty>
                  <img src={notfound} alt="Not Found" />
                  <strong>Não encontramos nada...</strong>
                  <span>
                    Não encontramos nenhuma notificação que não tenha sido
                    marcada como lida.
                  </span>
                </NotificationEmpty>
              )}
            </>
          )}
        </UseNotifications>
      </div>
      <UseProfile>
        <div>
          <strong>{user.name}</strong>
          <button type="button" onClick={signOut}>
            Sair do sistema
            <FiLogOut color="#c53030" size={15} />
          </button>
        </div>

        <Link to="/dashboard/profile">
          <img src={user.avatar_url} alt={user.name} />
        </Link>
      </UseProfile>
    </Container>
  );
};

export default Header;
