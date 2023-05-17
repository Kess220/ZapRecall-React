import { useState } from "react";
import imagem from "../assets/logo.png";
import play from "../assets/seta_play.png";
import virar from "../assets/seta_virar.png";
import SideBar from "./SideBar";

const ZapRecall = () => {
  const perguntas = [
    { numeroPerg: "Pergunta 1", pergunta: "Quanto é 3 + 3 ?", resposta: "6" },
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
    { numeroPerg: "Pergunta 4", pergunta: "Quanto é 3 + 3 ?", resposta: "6" },
  ];

  const [perguntaAtiva, setPerguntaAtiva] = useState(null);
  const [exibirResposta, setExibirResposta] = useState(false);

  const exibirPergunta = (index) => {
    setPerguntaAtiva(index);
    setExibirResposta(false);
  };

  const toggleResposta = () => {
    setExibirResposta((prevState) => !prevState);
  };

  const buttonZap = () => {
    setPerguntaAtiva(false);
  };

  return (
    <>
      <nav>
        <img className="logo-app" src={imagem} alt="Descrição da imagem" />
        <h1>ZapRecall</h1>
      </nav>
      <div className="perguntas">
        {perguntas.map((pergunta, index) => (
          <div
            className={
              perguntaAtiva === index && exibirResposta
                ? "card-resposta"
                : perguntaAtiva === index
                ? "card"
                : "pergunta"
            }
            key={index}
          >
            {perguntaAtiva === index ? (
              <>
                {!exibirResposta ? (
                  <>
                    <h1>{pergunta.pergunta}</h1>
                    <div className="virar">
                      <img
                        className="icone"
                        src={virar}
                        alt="Ícone Virar"
                        onClick={toggleResposta}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <h1>{pergunta.resposta}</h1>
                    <div className="botoes">
                      <button className="nao-lembrei">Não lembrei</button>
                      <button className="quase-lembrei">Quase lembrei</button>
                      <button onClick={buttonZap} className="zap">
                        Zap!
                      </button>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <h1>{pergunta.numeroPerg}</h1>
                <img
                  className="play"
                  src={play}
                  alt="Ícone Play"
                  onClick={() => exibirPergunta(index)}
                />
              </>
            )}
          </div>
        ))}
      </div>

      <SideBar />
    </>
  );
};

export default ZapRecall;
