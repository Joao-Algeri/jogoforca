import forca0 from './assets/forca0.png'
import forca1 from './assets/forca1.png'
import forca2 from './assets/forca2.png'
import forca3 from './assets/forca3.png'
import forca4 from './assets/forca4.png'
import forca5 from './assets/forca5.png'
import forca6 from './assets/forca6.png'
import palavras from "./Palavras";
import styled from 'styled-components';
export default function Jogo(forca,setForca,palavra,setPalavra,palavras,imagemForca){

    return(
    <Conteudo>
    <img src={forca0} alt="imagem forca"/>
    <button>Escolher palavra</button>
   
    </Conteudo>
    )

    
}
const Conteudo=styled.div`
    display:flex;
    justify-content:space-between;
    padding:20px;

    button{
        width: 150px;
        height: 40px;
    }
    img{
        height: 50vh;
        width: 50vw;
    }
    `