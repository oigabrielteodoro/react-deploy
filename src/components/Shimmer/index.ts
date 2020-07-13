import { darken, lighten } from 'polished';
import styled, { keyframes } from 'styled-components';

interface IShimmerEffectProps {
  type?: 'title' | 'image' | 'body';
  width?: number;
  height?: number;
}

const progress = keyframes`
  0% {
      background-position: -200px 0;
  }
  100% {
      background-position: calc(200px + 100%) 0;
  }
`;

const ShimmerEffect = styled.span<IShimmerEffectProps>`
  animation: ${progress} 1.2s ease-in-out infinite;
  height: 13px;
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0),
    ${lighten(1, '#fff')},
    rgba(0, 0, 0, 0)
  );
  background-color: ${darken(0.3, '#fff')};
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 3px;
  display: inline-block;
  line-height: 1;
  width: 100%;
  opacity: 0.1;

  ${({ type }) =>
    type === 'image' &&
    `
      height: 52px;
      width: 52px;
      border-radius: 150px;
      margin-right: 2.4rem;
    `}

  ${({ type }) =>
    type === 'title' &&
    `
      height: 25px;
      width: 86%;
      margin: 20px 0;
      @media (max-width: 768px) {
        width: 50%;
      }
    `}

  ${({ type }) =>
    type === 'body' &&
    `
      margin: 3px 0;
    `}

  ${({ width }) => width && `width: ${width}px;`}
  ${({ height }) => height && `height: ${height}px;`}
`;

export default ShimmerEffect;
