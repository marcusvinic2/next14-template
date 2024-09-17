import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  // your global styles
  font-family: var(--Kanit), sans-serif;

  //remover background do click em botões e formulários no mobile
  @media (max-width: 1024px) {
    &:focus {
      -webkit-tap-highlight-color: transparent;
    }

    &:hover {
      -webkit-tap-highlight-color: transparent;
    }
  }
`;

export default GlobalStyles;
