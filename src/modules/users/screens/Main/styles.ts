import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  section {
    margin-top: 200px;

    /** Mobile */
    @media screen and (max-width: 764px) {
      margin-top: 100px !important;
    }
  }
`;
