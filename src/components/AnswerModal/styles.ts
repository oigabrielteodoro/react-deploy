import styled, { css } from 'styled-components';

interface IOverlayProps {
  visible: boolean;
}

export const Overlay = styled.div<IOverlayProps>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 20px;
  background: #00000090;
  color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease-in 0.2s;
  cursor: pointer;
  z-index: 9999;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      visibility: visible;
      transition: 0.3s;

      > div {
        opacity: 1;
        transform: translateY(0);
        transition: 0.3s ease-out 0.2s;
      }
    `};
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  padding: 40px 25px;
  background: #202024;
  box-shadow: 0 5px 30px #00000090;
  opacity: 0;
  border-radius: 5px;
  transform: translateY(20px);
  transition: 0.2s ease-in;
  overflow-y: auto;
  text-align: left;
  cursor: default;
  overflow: hidden;

  h4 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  > a {
    display: block;
    margin-top: 44px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #7159c1;
    transition: color 0.2s;

    &:hover {
      color: #7c62d4;
    }
  }

  > footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-size: 12px;
      text-align: center;
      color: #87868b;
    }
  }

  @media (max-width: 580px) {
    padding: 50px 24px 40px;

    h4 {
      font-size: 20px;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #87868b;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: #28272e;
    color: #fff;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
