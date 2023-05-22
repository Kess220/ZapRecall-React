import { useState } from "react";
import styled from "styled-components";
import playIcon from "../assets/seta_play.png";
import flipIcon from "../assets/seta_virar.png";
import SideBar from "./SideBar.jsx";
import logoImagem from "../assets/logo.png";
import zapIcon from "../assets/icone_certo.png";
import quaseIcon from "../assets/icone_quase.png";
import naoIcon from "../assets/icone_erro.png";

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
  margin-left: -24px;
`;

const Perguntas = styled.div`
  margin-bottom: 50px;
`;

const H1 = styled.h1`
  font-family: "Righteous";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.012em;

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
  width: 300px;
  height: 65px;
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
  color: #333333;
  line-height: 19px;
  margin-top: 5px;
  text-decoration: ${(props) => (props.answered ? "line-through" : "none")};
  color: ${(props) => {
    if (props.answered) {
      if (props.selectedAnswer === "Zap") {
        return "#2fbe34";
      } else if (props.selectedAnswer === "Quase") {
        return "#fd7f02";
      } else if (props.selectedAnswer === "Não") {
        return "#e60000";
      } else {
        return "color: #333333;";
      }
    }
  }};
`;

const PlayButton = styled.img`
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
  color: #333333;
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
  const [selectedAnswers, setSelectedAnswers] = useState([]);

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
    {
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
    setFlipped(true);
    setShowAnswer(false);
    setSelectedAnswer(selectedAnswers[index] || null);
  };

  const handleFlip = () => {
    setShowAnswer(true);
  };

  const handleAnswerClick = (answer) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[activeIndex] = answer;
    setSelectedAnswers(newSelectedAnswers);
    setActiveIndex(null);
    setFlipped(false);
    setShowAnswer(false);
  };

  const isAnswered = (index) => selectedAnswers[index];

  const totalQuestions = cards.length;
  const answeredQuestions = selectedAnswers.filter((answer) => answer !== null);
  const totalAnsweredQuestions = answeredQuestions.length;

  return (
    <>
      <Nave>
        <Logo src={logoImagem} alt="Image description" />
        <H1>ZapRecall</H1>
      </Nave>
      <Perguntas className="perguntas">
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
                      {selectedAnswer !== "Zap" ? (
                        <>
                          {selectedAnswer !== "Quase" ? (
                            <>
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
                            </>
                          ) : (
                            <img src={quaseIcon} alt="Quase Icon" />
                          )}
                        </>
                      ) : (
                        <img src={zapIcon} alt="Zap Icon" />
                      )}
                    </RespostaBotoes>
                  </RespostaWrapper>
                )}
              </>
            ) : (
              <PerguntaWrapper answered={isAnswered(index)}>
                <PerguntaNumero
                  answered={isAnswered(index)}
                  selectedAnswer={selectedAnswers[index]}
                >
                  Pergunta {index + 1}
                </PerguntaNumero>
                {selectedAnswers[index] !== "Zap" ? (
                  selectedAnswers[index] !== "Quase" ? (
                    selectedAnswers[index] !== "Não" ? (
                      <PlayButton
                        src={playIcon}
                        alt="Play"
                        onClick={() => handleClick(index)}
                      />
                    ) : (
                      <img src={naoIcon} alt="Não Icon" />
                    )
                  ) : (
                    <img src={quaseIcon} alt="Quase Icon" />
                  )
                ) : (
                  <img src={zapIcon} alt="Zap Icon" />
                )}
              </PerguntaWrapper>
            )}
          </div>
        ))}
      </Perguntas>
      <SideBar
        totalQuestions={totalQuestions}
        totalAnsweredQuestions={totalAnsweredQuestions}
      />
    </>
  );
};

export default ZapRecall;
