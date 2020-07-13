import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.backgroundSecundary};
  border-radius: 4px;
  padding: 20px 30px;

  & + div {
    margin-left: 25px;
  }

  header,
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  header {
    > div {
      display: flex;
      align-items: center;

      span {
        color: #a8a8b3;
      }

      svg {
        margin-left: 10px;
      }
    }
  }

  footer {
    margin-top: 30px;

    span {
      color: #a8a8b3;
    }

    div {
      display: flex;
      align-items: center;

      svg {
        margin-left: 10px;
      }
    }
  }

  canvas {
    margin-top: 30px;
  }
`;
