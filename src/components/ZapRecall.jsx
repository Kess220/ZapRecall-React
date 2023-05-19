import { useState } from "react";
import styled from "styled-components";
import playIcon from "../assets/seta_play.png";
import flipIcon from "../assets/seta_virar.png";
import SideBar from "./SideBar.jsx";
import logoImagem from "../assets/logo.png";

const Logo = styled.img`
  width: 52px;
  height: 60px;
`;

const Nave = styled.div`
  display: flex;
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

const QuestionWrapper = styled.div`
  width: 299px;
  height: 131px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-bottom: 25px;
`;

const PerguntaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f0f0f0;
  margin-bottom: 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
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
  cursor: pointer;
`;

const FlipButton = styled.img`
  width: 30px;
  height: 20px;
  cursor: pointer;
  margin-right: 15px;
  margin-bottom: 6px;
`;

const RespostaWrapper = styled.div`
  width: 299px;
  height: 131px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`;

const P = styled.p`
  margin-left: 15px;
`;

const PerguntaTexto = styled.p`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #333333;
  width: 100%;
  height: 100%;
  margin-top: 18px;
`;

const RespostaBotoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 16px 16px 16px;
`;

const Botao = styled.button`
  width: 85.17px;
  height: 37.17px;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
`;

const BotaoZap = styled(Botao)`
  background: #2fbe34;
`;

const BotaoQuase = styled(Botao)`
  background: #ff922e;
`;

const BotaoNao = styled(Botao)`
  background: #ff3030;
`;

const ZapRecall = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const cards = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão da linguagem JavaScript",
    },
    {
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
    setFlipped(true);
    setShowAnswer(false);
  };

  const handleFlip = () => {
    setShowAnswer(true);
  };

  const handleAnswerClick = (answer) => {
    console.log("Resposta selecionada:", answer);
    // Aqui você pode adicionar a lógica para tratar a resposta selecionada
  };

  return (
    <>
      <Nave>
        <Logo src={logoImagem} alt="Image description" />
        <H1>ZapRecall</H1>
      </Nave>
      <div className="perguntas">
        {cards.map((card, index) => (
          <div key={index}>
            {index === activeIndex && flipped ? (
              <>
                {!showAnswer ? (
                  <QuestionWrapper>
                    <PerguntaTexto>
                      <P>{card.question}</P>
                    </PerguntaTexto>
                    <FlipButton
                      src={flipIcon}
                      alt="Flip"
                      onClick={handleFlip}
                    />
                  </QuestionWrapper>
                ) : (
                  <RespostaWrapper>
                    <PerguntaTexto>
                      <P>{card.answer}</P>
                    </PerguntaTexto>
                    <RespostaBotoes>
                      <BotaoZap onClick={() => handleAnswerClick("Zap")}>
                        Zap
                      </BotaoZap>
                      <BotaoQuase onClick={() => handleAnswerClick("Quase")}>
                        Quase
                      </BotaoQuase>
                      <BotaoNao onClick={() => handleAnswerClick("Não")}>
                        Não
                      </BotaoNao>
                    </RespostaBotoes>
                  </RespostaWrapper>
                )}
              </>
            ) : (
              <PerguntaWrapper>
                <PerguntaNumero>Pergunta {index + 1}</PerguntaNumero>
                <PlayButton
                  src={playIcon}
                  alt="Play"
                  onClick={() => handleClick(index)}
                />
              </PerguntaWrapper>
            )}
          </div>
        ))}
      </div>
      <SideBar />
    </>
  );
};

export default ZapRecall;
