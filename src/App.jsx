/* eslint-disable no-unused-vars */
import React from 'react';
import MyLogin from './Components/myLogin';
import { GlobalStyle, Conteiner } from './global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <MyLogin />
      </Conteiner>
    </>
  );
}

export default App;
