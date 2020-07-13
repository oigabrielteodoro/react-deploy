import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  isRadio: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${({ isRadio, theme }) =>
    isRadio ? 'transparent' : theme.colors.background};
  border-radius: 4px;
  border: 2px solid ${({ isRadio, theme }) =>
    isRadio ? 'transparent' : theme.colors.background};
  color: #A8A8B3;
  display: flex;
  align-items: center;

  ${({ isRadio }) =>
    !isRadio &&
    css`
      padding: 16px;
      width: 100%;
    `}

  & + div {
    margin-top: 30px;
  }

  ${({ isErrored, isRadio }) =>
    isErrored &&
    css`
      border-color: ${isRadio ? 'transparent' : '#c53030'};
    `}

  ${({ isFocused, isRadio }) =>
    isFocused &&
    css`
      color: #7051dc;
      border-color: ${isRadio ? 'transparent' : '#7051dc'};
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #7051dc;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    opacity: ${({ isRadio }) => (isRadio ? 0 : 1)};

    &:disabled {
      cursor: no-drop;
    }

    &::placeholder {
      color: #A8A8B3;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
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
