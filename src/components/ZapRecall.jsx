import { useState } from "react";
import imagem from "../assets/logo.png";
import styled from "styled-components";
import play from "../assets/seta_play.png";
import virar from "../assets/seta_virar.png";
import SideBar from "./SideBar.jsx";

/* eslint-disable react/prop-types */

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

const PerguntaWrapper = styled.div`
  /* Styles for the question wrapper */
  display: flex;
  width: 300px;
  height: 65px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  &.card {
    width: 299px;
    height: 131px;
    background: #ffffd5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
  }
`;

const PerguntaNumero = styled.h1`
  height: 100%;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  margin-top: 5px;
`;

const PlayButton = styled.img`
  margin-right: 20px;
  width: 20px;
  height: 23px;
`;

const VirarButton = styled.img`
  /* Styles for the "flip" button */
  display: flex;
  align-items: flex-end;
  width: 30px;
  height: 20px;
  margin-top: 105px;
  margin-right: 10px;
`;

const RespostaWrapper = styled.div`
  /* Styles for the answer wrapper */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const RespostaTexto = styled.p`
  /* Styles for the answer text */
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #333333;
`;

const RespostaBotoes = styled.div`
  /* Styles for the answer buttons */
  display: flex;
  width: 100%;
  margin-top: 9px;
  justify-content: space-between;
`;
const BotaoZap = styled.button`
  /* Styles for the answer button */
  width: 85.17px;
  height: 37.17px;

  background: #2fbe34;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
`;

const BotaoQuase = styled.button`
  /* Styles for the answer button */
  width: 85.17px;
  height: 37.17px;

  background: #ff922e;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
`;

const BotaoNao = styled.button`
  /* Styles for the answer button */
  width: 85.17px;
  height: 37.17px;

  background: #ff3030;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
`;

const Pergunta = ({
  pergunta,
  index,
  perguntaAtiva,
  exibirResposta,

  exibirPergunta,
  buttonZap,
}) => {
  const [, setZapClicado] = useState(false);
  const [respostaRevelada, setRespostaRevelada] = useState(false);

  const revealQuestion = () => {
    return perguntaAtiva === index;
  };

  const handleVirar = () => {
    setRespostaRevelada(!respostaRevelada);
    console.log(pergunta.resposta);
  };

  const handleNaoLembrei = () => {
    // Implement logic for "I don't remember" button here
  };

  const handleQuaseLembrei = () => {
    // Implement logic for "I almost remember" button here
  };

  const handleZap = () => {
    setZapClicado(true);
    setRespostaRevelada(false);
    buttonZap(index);
  };

  if (
    !pergunta ||
    typeof pergunta !== "object" ||
    !pergunta.resposta ||
    typeof pergunta.resposta !== "string"
  ) {
    return null; // Render something different if the "pergunta" prop is invalid
  }

  return (
    <PerguntaWrapper
      className={`pergunta ${revealQuestion() ? "revealed card" : ""}`}
    >
      {revealQuestion() ? (
        <>
          <PerguntaNumero>
            {respostaRevelada ? (
              <RespostaWrapper>
                <RespostaTexto>{pergunta.resposta}</RespostaTexto>
                <RespostaBotoes>
                  <BotaoNao onClick={handleNaoLembrei}>Não lembrei</BotaoNao>
                  <BotaoQuase onClick={handleQuaseLembrei}>
                    Quase lembrei
                  </BotaoQuase>
                  <BotaoZap onClick={handleZap}>Zap</BotaoZap>
                </RespostaBotoes>
              </RespostaWrapper>
            ) : (
              pergunta.pergunta
            )}
          </PerguntaNumero>
          {!respostaRevelada && (
            <div>
              <VirarButton
                className="icone"
                src={virar}
                alt="Flip Icon"
                onClick={handleVirar}
              />
            </div>
          )}
        </>
      ) : (
        <>
          <PerguntaNumero>{pergunta.numeroPerg}</PerguntaNumero>
          <PlayButton
            className="play"
            src={play}
            alt="Play Icon"
            onClick={() => exibirPergunta(index)}
          />
        </>
      )}

      {exibirResposta && revealQuestion() && !respostaRevelada && (
        <div className="virar">
          <VirarButton
            className="icone"
            src={virar}
            alt="Flip Icon"
            onClick={handleVirar}
          />
        </div>
      )}
    </PerguntaWrapper>
  );
};

const ZapRecall = () => {
  const perguntas = [
    {
      numeroPerg: "Pergunta 1",
      pergunta: "O que é JSX?",
      resposta: "JSX é uma sintaxe para escrever HTML dentro do JS",
    },
    {
      numeroPerg: "Pergunta 2",
      pergunta: "Se o amor é a resposta, qual é a pergunta?",
      resposta: "Tem resposta pra essa pergunta?",
    },
    {
      numeroPerg: "Pergunta 3",
      pergunta: "Feijão é por cima ou por baixo do arroz?",
      resposta: "Feijão por cima, obviamente!",
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
        <Logo src={imagem} alt="Image description" />
        <H1>ZapRecall</H1>
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
