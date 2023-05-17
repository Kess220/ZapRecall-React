import { useState } from "react";
import imagem from "../assets/logo.png";
import ZapRecall from "./ZapRecall";

const IniciarRecall = () => {
  const [isToRender, setIsToRender] = useState(true);

  const handleButtonClick = () => {
    setIsToRender(false);
  };

  return (
    <div className="bemVindo">
      {isToRender ? (
        <>
          <img className="logo" src={imagem} alt="Descrição da imagem" />
          <h1 className="zapRecall">ZapReacall</h1>
          <button className="iniciar" onClick={handleButtonClick}>
            Iniciar Recall
          </button>
        </>
      ) : (
        <ZapRecall />
      )}
    </div>
  );
};

export default IniciarRecall;
