import styled from 'styled-components';

interface IPaginationItemProps {
  isSelected?: boolean;
}

export const Container = styled.section`
  display: flex;
  align-items: center;

  > div {
    padding-top: 30px;

    & + div {
      margin-left: 80px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 640px;
      height: 600px;
      border-radius: 10px;
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

      /** Mobile */
      @media screen and (max-width: 430px) {
        h1 {
          font-size: 36px;
        }
      }
    }
  }

  /** Mobile */
  @media screen and (max-width: 430px) {
    flex-direction: column;

    #projects {
      img,
      ul {
        display: none;
      }
    }
  }
`;

export const UseProject = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  h3 {
    font-size: 35px;
    margin: 50px 0;

    /** Mobile */
    @media screen and (max-width: 430px) {
      font-size: 25px;
    }
  }

  p {
    color: #a8a8b3;
    font-size: 16px;
    text-align: center;
  }

  a {
    display: none;
    color: #7051dc;
    text-decoration: none;
    font-weight: 500;
    margin-top: 5px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    /** Mobile */
    @media screen and (max-width: 430px) {
      display: block;
    }
  }

  /** Mobile */
  @media screen and (max-width: 430px) {
    padding: 0 25px;
  }
`;

export const Pagination = styled.ul`
  display: flex;
  align-items: center;

  button {
    height: 40px;

    & + button {
      margin-left: 15px;
    }
  }
`;

export const PaginationItem = styled.li<IPaginationItemProps>`
  height: 4px;
  width: 40px;
  background: ${({ isSelected }) => (isSelected ? '#7051dc' : '#36364A')};
  margin: 20px 30px 20px 0;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
