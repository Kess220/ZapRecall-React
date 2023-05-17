import React from "react";
import {
  BemVindoContainer,
  Logo,
  ZapRecallTitle,
  IniciarButton,
} from "./StyledBemVindo";

import imagem from "../assets/logo.png";
import ZapRecall from "./ZapRecall";

const IniciarRecall = () => {
  const [isToRender, setIsToRender] = React.useState(true);

  const handleButtonClick = () => {
    setIsToRender(false);
  };

  return (
    <BemVindoContainer>
      {isToRender ? (
        <>
          <Logo src={imagem} alt="Descrição da imagem" />
          <ZapRecallTitle>ZapReacall</ZapRecallTitle>
          <IniciarButton onClick={handleButtonClick}>
            Iniciar Recall
          </IniciarButton>
        </>
      ) : (
        <ZapRecall />
      )}
    </BemVindoContainer>
  );
};

export default IniciarRecall;
