import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Baskerville';
    src: url('fonts/Baskerville-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto-Medium';
    src: url('fonts/Roboto-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto-Regular';
    src: url('fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: none;
    user-select: none;
    padding: 0;
    background-color: #fcfcfc;
  }

  #root {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
