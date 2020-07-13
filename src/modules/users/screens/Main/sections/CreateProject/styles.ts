import styled, { css } from 'styled-components';

interface IUseCheckboxProps {
  isChecked: boolean;
}

interface ISelectPageProps {
  isChecked: boolean;
}

export const Container = styled.section`
  display: flex;

  > div {
    margin-right: 90px;
    padding-top: 30px;

    h1 {
      font-size: 50px;
      color: #f4ede8;
      margin-bottom: 50px;

      &::before {
        content: '<';
        color: #7051dc;
      }

      &::after {
        content: '/>';
        color: #7051dc;
      }
    }

    h3 {
      font-size: 33px;
      color: #f4ede8;
      max-width: 260px;
      margin-bottom: 25px;
    }

    p {
      color: #a8a8b3;
      font-size: 16px;
      max-width: 400px;
      margin-bottom: 25px;
    }

    span {
      background: #cbc5ea;
      padding: 10px 15px;
      border-radius: 4px;
      color: #7051dc;
    }
  }

  form {
    flex: 1;
    background: #1c1c2e;
    border-radius: 10px;
    padding: 90px;

    > div {
      margin-bottom: 30px;

      ul {
        display: flex;
        align-items: center;
        margin-top: 20px;
      }
    }
  }

  /** Mobile */
  @media screen and (max-width: 430px) {
    flex-direction: column;
    align-items: center;
    padding: 0 25px;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 !important;

      h1 {
        font-size: 36px;
      }

      h3 {
        font-size: 24px;
      }

      p {
        text-align: center;
        margin-bottom: 30px;
        font-size: 13px;
      }
    }

    form {
      padding: 25px !important;
      width: 100%;

      /** Mobile */
      @media screen and (max-width: 430px) {
        margin-top: 15px;
      }
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const UseCheckbox = styled.label<IUseCheckboxProps>`
  display: flex;
  align-items: center;

  strong {
    cursor: pointer;
    height: 24px;
    width: 24px;
    border-radius: 50%;

    border: 2px solid #7051dc;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${({ isChecked }) =>
      isChecked &&
      css`
        &::after {
          content: '';
          height: 10px;
          width: 10px;
          border-radius: 50%;
          background: #7051dc;
          position: absolute;
        }
      `};
  }

  span {
    margin-right: 30px;
  }
`;

export const SelectPage = styled.li<ISelectPageProps>`
  display: flex;
  align-items: center;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    height: 40px;
    width: 40px;
    font-weight: 400;

    border: 2px solid #7051dc;
    position: relative;

    ${({ isChecked }) =>
      isChecked &&
      css`
        background: #7051dc;
      `}

    /** Mobile */
    @media screen and (max-width: 430px) {
      height: 30px;
      width: 30px;
      font-size: 12px;
    }
  }
`;
