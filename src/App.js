import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
import forca0 from './assets/forca0.png'
import styled from 'styled-components';
import reset from './reset.css';
import { useState } from "react";
function App() {
 
  return (
  <Conteudo>
    <Jogo />
    <Letras/>
    <Chute/>
    </Conteudo>
  )
  
}
const Conteudo= styled.div`
font-family: "Roboto", sans-serif;
`
export default App;
