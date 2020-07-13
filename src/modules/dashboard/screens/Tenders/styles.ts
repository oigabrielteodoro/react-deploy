import styled from 'styled-components';
import { lighten, darken, shade } from 'polished';

interface ITenderStatus {
  status: 'pending' | 'accept' | 'dismiss';
}

interface IUseSettingsItemProps {
  selected: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  position: relative;

  > img {
    position: absolute;
    top: -50px;
    z-index: -1;
    width: 100%;
  }
`;

export const Container = styled.div`
  flex: 1;
  padding: 50px 15px 50px 125px;

  max-width: 1510px;

  > div {
    margin-top: 50px;
  }
`;

export const UseSettings = styled.ul`
  display: flex;
  align-items: center;
`;

export const UseSettingsItem = styled.li<IUseSettingsItemProps>`
  background: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.background};
  color: ${({ selected, theme }) => (selected ? '#f4ede8' : theme.colors.text)};
  padding: 5px 10px;
  border-radius: 4px;
  transition: opacity 0.2s;
  cursor: pointer;

  font-size: 12px;

  & + li {
    margin-left: 10px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const Table = styled.table`
  width: 100%;
  text-align: left;

  border-collapse: separate;
  border-spacing: 0px 10px;
  border-style: hidden;

  display: table;

  th {
    font-weight: 500;

    &:first-child {
      padding-left: 20px;
    }

    &:last-child {
      padding-right: 20px;
      text-align: right;
    }
  }
`;

export const TableItem = styled.tr`
  background: ${({ theme }) => theme.colors.background};
  transition: background 0.2s;

  cursor: pointer;

  td {
    padding: 20px 0;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.muted};
    transition: color 0.2s;

    &:first-child {
      padding-left: 20px;
      border-radius: 8px 0 0 8px;
    }

    &:last-child {
      padding-right: 20px;
      border-radius: 0 8px 8px 0;
      text-align: right;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const TenderStatus = styled.div<ITenderStatus>`
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  height: 30px;

  padding: 20px 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ status, theme }) =>
    status === 'pending'
      ? theme.colors.primary
      : status === 'accept'
      ? darken(0.23, theme.colors.success)
      : theme.colors.error};
  background: ${({ status, theme }) =>
    status === 'pending'
      ? lighten(0.23, theme.colors.primary)
      : status === 'accept'
      ? lighten(0.23, theme.colors.success)
      : lighten(0.23, theme.colors.error)};
`;

export const TenderDetail = styled.pre`
  background: rgba(0, 0, 0, 0.2);
  margin-top: 25px;
  padding: 20px;
  border-radius: 4px;

  div {
    display: flex;
    flex-direction: column;

    + div {
      margin-top: 20px;
    }

    > strong {
      font-size: 16px;
      font-weight: 500;
    }

    > span {
      font-size: 14px;
      color: #87868b;
    }

    textarea {
      border: 0;
      background: transparent;
      font-size: 14px;
      color: #87868b;
      resize: vertical;
      max-height: 300px;
    }
  }

  footer {
    display: flex;
    align-items: center;

    button + button {
      margin-left: 15px;
      background: ${({ theme }) => theme.colors.error};

      &:hover {
        background: ${({ theme }) => shade(0.2, theme.colors.error)};
      }
    }
  }
`;

export const Error = styled.div`
  flex: 1;
  margin: 30px 0;

  display: grid;
  place-items: center;

  strong {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 18px;
    margin-top: 15px;
  }

  span {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    max-width: 400px;
    text-align: center;
  }
`;
