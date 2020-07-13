import styled from 'styled-components';

interface IActionItemProps {
  color: string;
}

export const Content = styled.main`
  margin-top: 30px;
`;

export const CardGroup = styled.div`
  display: flex;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
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

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.muted};
      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors.text};
      }
    }

    &:first-child {
      padding-left: 20px;
      border-radius: 8px 0 0 8px;
    }

    &:last-child {
      padding-right: 20px;
      border-radius: 0 8px 8px 0;
      text-align: right;
    }
  }
`;

export const ActionItem = styled.button<IActionItemProps>`
  background: ${({ color }) => color};
  border: 0;
  padding: 5px 10px;
  border-radius: 4px;
  transition: opacity 0.2s;

  & + button {
    margin-left: 5px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
