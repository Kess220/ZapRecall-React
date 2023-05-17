import { useState } from "react";
import PropTypes from "prop-types";
import play from "../assets/seta_play.png";
import virar from "../assets/seta_virar.png";
import styled from "styled-components";
import Resposta from "./Resposta";

const PerguntaWrapper = styled.div`
  /* Your styles for the question wrapper */
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
  /* Styles for the virar button */
  display: flex;
  align-items: flex-end;
  width: 30px;
  height: 20px;
  margin-top: 105px;
  margin-right: 10px;
`;

const Pergunta = ({
  pergunta,
  index,
  perguntaAtiva,
  exibirResposta,
  exibirPergunta,
  buttonZap,
}) => {
  const [setZapClicado] = useState(false);
  const [respostaRevelada, setRespostaRevelada] = useState(false);

  const revealQuestion = () => {
    return perguntaAtiva === index;
  };

  const handleVirar = () => {
    setRespostaRevelada(!respostaRevelada);
    console.log(pergunta.resposta);
  };

  const handleNaoLembrei = () => {
    // Implement the logic for the "Não lembrei" button here
  };

  const handleQuaseLembrei = () => {
    // Implement the logic for the "Quase lembrei" button here
  };

  const handleZap = () => {
    setZapClicado(true);
    setRespostaRevelada(false);
    buttonZap(index);
  };

  return (
    <PerguntaWrapper
      className={`pergunta ${revealQuestion() ? "revealed card" : ""}`}
    >
      {revealQuestion() ? (
        <>
          <PerguntaNumero>
            {respostaRevelada ? (
              <Resposta
                texto={pergunta.resposta}
                onNaoLembrei={handleNaoLembrei}
                onQuaseLembrei={handleQuaseLembrei}
                onZap={handleZap}
              />
            ) : (
              pergunta.pergunta
            )}
          </PerguntaNumero>
          {!respostaRevelada && (
            <div>
              <VirarButton
                className="icone"
                src={virar}
                alt="Ícone Virar"
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
            alt="Ícone Play"
            onClick={() => exibirPergunta(index)}
          />
        </>
      )}

      {exibirResposta && revealQuestion() && !respostaRevelada && (
        <div className="virar">
          <img
            className="icone"
            src={virar}
            alt="Ícone Virar"
            onClick={handleVirar}
          />
        </div>
      )}

      {exibirResposta && revealQuestion() && respostaRevelada && (
        <Resposta
          texto={pergunta.resposta}
          onNaoLembrei={handleNaoLembrei}
          onQuaseLembrei={handleQuaseLembrei}
          onZap={handleZap}
        />
      )}
    </PerguntaWrapper>
  );
};

Pergunta.propTypes = {
  pergunta: PropTypes.shape({
    numeroPerg: PropTypes.string.isRequired,
    pergunta: PropTypes.string.isRequired,
    resposta: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  perguntaAtiva: PropTypes.number,
  exibirResposta: PropTypes.bool.isRequired,
  exibirPergunta: PropTypes.func.isRequired,
  buttonZap: PropTypes.func.isRequired,
};

export default Pergunta;
