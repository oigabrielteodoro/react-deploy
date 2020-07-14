import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  max-width: 480px;

  display: flex;
  align-items: center;

  div {
    a {
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
      margin-right: 20px;

      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      /** Mobile */
      @media screen and (min-width: 1200px) {
        & + a {
          max-width: 80px;
        }
      }

      &:hover {
        background: ${shade(0.2, '#7051DC')};
      }
    }

    /** Mobile */
    @media screen and (max-width: 430px) {
      display: flex;
      flex-direction: column;

      a {
        margin-left: 20px;
        width: 330px;
      }
    }

    h1 {
      color: #f4ede8;
    }

    p {
      color: #868693;
      margin: 15px 0 35px;
    }

    > div {
      display: flex;
      align-items: center;
    }
  }

  /** Mini Desktop */
  @media screen and (max-width: 1200px) {
    padding: 0 25px;

    img {
      display: none;
    }
  }

  /** Mobile */
  @media screen and (max-width: 430px) {
    h1,
    p {
      text-align: center;
    }

    h1 {
      font-size: 29px;
    }

    p {
      font-size: 15px;
    }
  }

  /** Desktop */
  @media screen and (min-width: 1200px) {
    img {
      position: absolute;
      top: 0px;
      right: -50px;
      z-index: -1;
    }

    h1 {
      font-size: 36px;
    }

    p {
      font-size: 20px;
    }
  }
`;
