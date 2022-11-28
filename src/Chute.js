import styled from 'styled-components';
export default function Chute(){
    return(<Conteudo>
        <div className='conteudo'>
    <div>Já sei a palavra!</div>
          <input></input>
          <button>Chutar</button>
          </div>
    </Conteudo>)
}
const Conteudo=styled.div`
    display:flex;
    /* background-color: yellow; */
    justify-content:center;
    align-items: center;
    
    .conteudo{
        align-items: center;
        display:flex;
        width: 50%;
        justify-content:space-around;
    }
    button{
        width: 150px;
        height: 40px;
    }
    input{
        height: 32px;
    }
    `