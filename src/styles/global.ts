import { createGlobalStyle } from 'styled-components';

import 'react-day-picker/lib/style.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', 'Roboto', 'Ubuntu', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Ubuntu', sans-serif;
    font-weight: bold;
  }

  button {
    cursor: pointer;
  }

  ul, nav {
    list-style: none;
  }
`;
