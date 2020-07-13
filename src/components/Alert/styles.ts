import styled, { css } from 'styled-components';
import { lighten } from 'polished';

interface IContainerProps {
  type: 'error' | 'success' | 'info';
  isVisible: boolean;
}

const alertTypeVariations = {
  info: css`
    background: ${({ theme }) => lighten(0.1, theme.colors.primary)};
    color: ${({ theme }) => theme.colors.primary};
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div<IContainerProps>`
  width: 100%;
  border-radius: 4px;
  padding: 15px 25px;
  text-align: center;

  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};

  ${({ type }) => alertTypeVariations[type || 'info']};
`;
