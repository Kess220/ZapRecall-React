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
  background: #ffffff;
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
  margin-top: 5px;
  color: ${(props) => {
    if (props.answered) {
      if (props.selectedAnswer === "Zap") {
        return "#2fbe34"; // cor para o botão "Zap" selecionado
      } else if (props.selectedAnswer === "Quase") {
        return "#fd7f02"; // cor para o botão "Quase" selecionado
      } else if (props.selectedAnswer === "Não") {
        return "#e60000"; // cor para o botão "Não" selecionado
      } else {
        return "#333"; // cor padrão para perguntas respondidas
      }
    }
  }};
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
  margin-bottom: 25px;
`;

const PerguntaTexto = styled.div`
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

const P = styled.span`
  margin-left: 15px;
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
  background: ${(props) => (props.selected ? "#2fbe34" : "#33a532")};
`;

const BotaoQuase = styled(Botao)`
  background: ${(props) => (props.selected ? "#fd7f02" : "#fd7f02")};
`;

const BotaoNao = styled(Botao)`
  background: #e60000;
`;

const ZapRecall = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState([]);

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
    setSelectedAnswer(null);
  };

  const handleFlip = () => {
    setShowAnswer(true);
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    const newAnswered = [...answered];
    newAnswered.push(activeIndex);
    setAnswered(newAnswered);
    setActiveIndex(null);
    setFlipped(false);
    setShowAnswer(false);
  };

  const isAnswered = (index) => answered.includes(index);

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
                      <BotaoZap
                        onClick={() => handleAnswerClick("Zap")}
                        selected={selectedAnswer === "Zap"}
                      >
                        Zap
                      </BotaoZap>
                      <BotaoQuase
                        onClick={() => handleAnswerClick("Quase")}
                        selected={selectedAnswer === "Quase"}
                      >
                        Quase
                      </BotaoQuase>
                      <BotaoNao
                        onClick={() => handleAnswerClick("Não")}
                        selected={selectedAnswer === "Não"}
                      >
                        Não
                      </BotaoNao>
                    </RespostaBotoes>
                  </RespostaWrapper>
                )}
              </>
            ) : (
              <PerguntaWrapper answered={isAnswered(index)}>
                <PerguntaNumero
                  answered={isAnswered(index)}
                  selectedAnswer={selectedAnswer}
                >
                  Pergunta {index + 1}
                </PerguntaNumero>
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
