import styled from 'styled-components';
import { Element } from 'react-scroll';
import { shade } from 'polished';

export const Container = styled(Element).attrs({
  name: 'profile',
})`
  margin-top: 300px;
  padding-top: 30px;

  display: flex;
  align-items: center;

  > img {
    position: absolute;
    left: 0;
    z-index: -1;
  }

  /** Mobile */
  @media screen and (max-width: 430px) {
    margin-top: 100px !important;

    flex-direction: column;
    justify-content: center;

    > img {
      display: none;
    }
  }
`;

export const UseProfile = styled.div`
  max-width: 420px;

  & + div {
    margin-left: 170px;
  }

  img {
    width: 330px;
    height: 450px;
    border-radius: 8px;
  }

  div {
    display: flex;
    align-items: center;

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

      display: flex;
      align-items: center;
      justify-content: center;

      & + a {
        margin-left: 20px;
      }

      &:hover {
        background: ${shade(0.2, '#7051DC')};
      }
    }

    /** Mobile */
    @media screen and (max-width: 430px) {
      flex-direction: column;

      a + a {
        margin-left: 0 !important;
      }
    }
  }

  h1 {
    font-size: 50px;
    color: #f4ede8;

    &::before {
      content: '<';
      color: #7051dc;
    }

    &::after {
      content: '/>';
      color: #7051dc;
    }
  }

  p {
    color: #a8a8b3;
    font-size: 16px;
    margin-top: 60px;

    a {
      color: #7051dc;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  /** Mobile */
  @media screen and (max-width: 430px) {
    text-align: center;
    margin: 0 !important;

    h1 {
      margin-top: 60px;
      font-size: 36px;
    }

    p {
      font-size: 11px;
    }
  }
`;
