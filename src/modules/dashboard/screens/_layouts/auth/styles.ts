import styled from 'styled-components';

export const Container = styled.div`
  > img {
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: -1;
  }

  main {
    max-width: 600px;
    margin: 75px auto 50px;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      flex: 1;
      background: #1c1c2e;
      border-radius: 10px;
      padding: 90px;

      > img,
      h1 {
        margin-bottom: 50px;
      }

      button {
        margin-top: 35px;
      }

      a {
        color: #f4ede8;
        font-weight: 500;
        text-decoration: none;

        display: flex;
        align-items: center;

        margin-top: 30px;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }

        svg {
          margin-right: 10px;
        }
      }
    }
  }
`;
