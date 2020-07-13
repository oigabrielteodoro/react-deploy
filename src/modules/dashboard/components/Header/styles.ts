import styled from 'styled-components';
import { shade } from 'polished';

interface IUseNotificationsProps {
  hasNotifications: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    button {
      display: flex;
      align-items: center;

      background: transparent;
      border: 0;
    }

    h1 {
      margin-right: 25px;
      color: #f4ede8;
    }

    > span {
      margin-right: 25px;
      font-weight: 500;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const UseSearch = styled.div`
  display: flex;
  align-items: center;

  background: #4b2db2;
  padding: 10px 20px;
  border-radius: 4px;
  margin-right: 25px;

  input {
    background: transparent;
    border: 0;
    margin-left: 15px;
    color: #f4ede8;

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;

export const UseNotifications = styled.div<IUseNotificationsProps>`
  position: relative;
  cursor: pointer;

  > span {
    opacity: ${({ hasNotifications }) => (hasNotifications ? 1 : 0)};

    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #4b2db2;
    position: absolute;

    right: 2px;
    top: 0;
  }
`;

export const NotificationsList = styled.ul`
  position: absolute;
  background: ${({ theme }) => theme.colors.background};
  width: 350px;
  margin-top: 30px;
  padding: 20px 25px;
  left: calc(50% - 175px);
  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid ${({ theme }) => theme.colors.background};
  }
`;

export const NotificationItem = styled.li`
  padding: 10px;
  border-radius: 10px;
  transition: all 0.2s;

  & + li {
    margin-top: 10px;
    border-top: 0.5px solid rgba(0, 0, 0, 0.1);
  }

  &:hover {
    margin-top: 5px;
    background: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    margin-bottom: 10px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: #a8a8b3;
      font-size: 14px;
      margin-bottom: 10px;
    }

    div {
      height: 10px;
      width: 10px;
      background: #4b2db2;
      border-radius: 50%;
    }
  }
`;

export const NotificationEmpty = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.background};
  width: 350px;
  margin-top: 30px;
  padding: 20px 25px;
  left: calc(50% - 175px);
  border-radius: 4px;

  display: grid;
  place-items: center;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid ${({ theme }) => theme.colors.background};
  }

  img {
    width: 75px;
    height: 75px;
  }

  strong {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 16px;
    margin-top: 15px;
  }

  span {
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
    max-width: 400px;
    text-align: center;
  }
`;

export const UseProfile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 10px;
    border: 4px solid #4b2db2;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 20px;

    strong {
      color: #f4ede8;
    }

    > button {
      display: flex;
      align-items: center;

      color: ${({ theme }) => theme.colors.error};
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 10px;
      transition: color 0.2s;

      svg {
        margin-left: 10px;
      }

      &:hover {
        color: ${({ theme }) => shade(0.15, theme.colors.error)};
      }
    }
  }
`;
