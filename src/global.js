import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --primary-color: #4A80ED;
  --hover-color: #6495ed;
  --secundary-color: #fff;
  --my-color: #f00;
}
 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
  }

  html{
    font-family: 'Josefin Sans';
  }
`;

export const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  color: var(--secundary-color);

  form {
    display: flex;
    flex-flow: column nowrap;
    width: 300px;

    label {
      display: block;
      margin: 12px 0;
    }

    input {
      width: 240px;
      height: 30px;
      border-radius: 12px;
      padding: 8px;
      border: none;
    }

    button {
      margin: 30px;
      width: 180px;
      height: 30px;

      border-radius: 12px;
      border: none;

      font-size: 14px;
      font-weight: 600;
      color: var(--primary-color);

      :hover {
        cursor: pointer;
        background-color: var(--hover-color);
        color: var(--secundary-color);
        border: 1.2px solid var(--secundary-color);
      }
    }
    span {
      display: block;
      margin: 8px 0;

      color: var(--my-color);
    }
  }
`;
