import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--kanit), sans-serif;
  }

  ${({ theme }) => css`
    body {
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.gray_50};
    }
  `}

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
