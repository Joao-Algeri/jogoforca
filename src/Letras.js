import styled from 'styled-components';
export default function Letras(){
    const alfabeto = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
    return(<Conteudo>
            <div className="letras  ">
          {alfabeto.map((elemento) => (
            <div
              
              className="letra"
            >
              {elemento.toLocaleUpperCase()}
            </div>
          ))}
        </div>
    
    </Conteudo>)
}
const Conteudo=styled.div`
    display:flex;
    justify-content:center;
    padding:20px;

    button{
        width: 150px;
        height: 40px;
    }
    .letras {
    display: flex;
    width: 60vw;
    height: 8vw;

     flex-wrap: wrap;
     margin-top: 5%;
}
    .letra {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: #e1ecf4;
    border: 1px solid #7fabc9;
    color: #39739e;
    margin-right: 5px;
    margin-bottom: 5px;
}
    `