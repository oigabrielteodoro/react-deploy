import styled from 'styled-components';

interface INavigationToggleButtonProps {
  isOpen: boolean;
}

export const Container = styled.header`
  max-width: 1120px;
  margin: 80px auto 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /** Mobile */
  @media screen and (max-width: 430px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 25px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  /** Mobile */
  @media screen and (max-width: 430px) {
    display: none;
  }
`;

export const NavigationToggleButton = styled.button<
  INavigationToggleButtonProps
>`
  display: none;
  background: transparent;
  border: 0;

  ul {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    border-radius: 4px;
    background: #fff;
    margin-top: 10px;

    li {
      margin-bottom: 5px;

      a {
        color: #7051dc;
        font-weight: bold;
      }
    }
  }
`;

export const NavigationItem = styled.li`
  cursor: pointer;
  transition: opacity 0.2s;
  margin-right: 20px;

  a {
    color: #f4ede8;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
