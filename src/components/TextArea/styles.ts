import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #08081A;
  border-radius: 4px;
  border: 2px solid #08081A;
  color: #A8A8B3;
  display: flex;
  padding: 16px;
  width: 100%;
  min-height: 200px;

  & + div {
    margin-top: 30px;
  }

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: #7051dc;
      border-color: #7051dc;
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #7051dc;
    `}

  textarea {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    resize: none;
    font-size: 16px;

    &::placeholder {
      color: #A8A8B3;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
