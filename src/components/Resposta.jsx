import PropTypes from "prop-types";
import styled from "styled-components";

const RespostaWrapper = styled.div`
  /* Styles for the answer wrapper */
`;

const RespostaTexto = styled.h1`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  width: 100%;
  margin-top: 5px;
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

const Resposta = ({ texto, onNaoLembrei, onQuaseLembrei, onZap }) => {
  return (
    <RespostaWrapper>
      <RespostaTexto>{texto}</RespostaTexto>
      <RespostaBotoes>
        <BotaoNao onClick={onNaoLembrei}>Não lembrei</BotaoNao>
        <BotaoQuase onClick={onQuaseLembrei}>Quase lembrei</BotaoQuase>
        <BotaoZap onClick={onZap}>Zap!</BotaoZap>
      </RespostaBotoes>
    </RespostaWrapper>
  );
};

Resposta.propTypes = {
  texto: PropTypes.string.isRequired,
  onNaoLembrei: PropTypes.func.isRequired,
  onQuaseLembrei: PropTypes.func.isRequired,
  onZap: PropTypes.func.isRequired,
};

export default Resposta;
