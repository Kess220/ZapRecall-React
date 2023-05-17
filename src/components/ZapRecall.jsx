import { useState } from "react";
import imagem from "../assets/logo.png";
import Pergunta from "./Pergunta";
import SideBar from "./SideBar";
import styled from "styled-components";

const Logo = styled.img`
  width: 52px;
  height: 60px;
`;
const Nave = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 70px;
`;

const H1 = styled.h1`
  width: 203.17px;
  height: 44px;

  font-family: "Righteous";
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;

  transform: rotate(0.58deg);
`;

const ZapRecall = () => {
  const perguntas = [
    {
      numeroPerg: "Pergunta 1",
      pergunta: "O que é JSX ?",
      resposta: "JSX é uma sintaxe para escrever HTML dentro do JS ",
    },
    {
      numeroPerg: "Pergunta 2",
      pergunta: "Se o amor é a resposta, qual é a pergunta?",
      resposta: "Tem resposta pra essa pergunta?",
    },
    {
      numeroPerg: "Pergunta 3",
      pergunta: "Feijão é por cima ou por baixo do arroz?",
      resposta: "Feijão por cima, obvio!",
    },
    {
      numeroPerg: "Pergunta 4",
      pergunta:
        "Como posso dizer para minha família em um jantar que sou programador?",
      resposta: "Sou garoto de programa",
    },
  ];

  const [perguntaAtiva, setPerguntaAtiva] = useState(null);
  const [exibirResposta, setExibirResposta] = useState(true);

  const exibirPergunta = (index) => {
    setPerguntaAtiva(index);
    setExibirResposta(false);
  };

  const buttonZap = (index) => {
    const updatedPerguntas = [...perguntas];
    updatedPerguntas[index].zapClicado = true;
    setPerguntaAtiva(null);
    console.log(updatedPerguntas);
  };

  return (
    <>
      <Nave>
        <Logo src={imagem} alt="Descrição da imagem" />

        <H1>
          <h1>ZapRecall</h1>
        </H1>
      </Nave>
      <div className="perguntas">
        {perguntas.map((pergunta, index) => (
          <Pergunta
            key={index}
            pergunta={pergunta}
            index={index}
            perguntaAtiva={perguntaAtiva}
            exibirResposta={exibirResposta}
            exibirPergunta={exibirPergunta}
            buttonZap={buttonZap}
          />
        ))}
      </div>

      <SideBar />
    </>
  );
};

export default ZapRecall;
