import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #7051dc;
  height: 60px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  color: #f4ede8;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    cursor: no-drop;
  }

  &:hover {
    background: ${shade(0.2, '#7051DC')};
  }
`;
