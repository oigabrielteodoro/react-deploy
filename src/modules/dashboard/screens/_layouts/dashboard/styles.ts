import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: relative;

  > img {
    position: absolute;
    top: -50px;
    z-index: -1;
    width: 100%;
  }
`;

export const Container = styled.div`
  flex: 1;
  padding: 50px 15px 50px 125px;

  max-width: 1510px;
`;
