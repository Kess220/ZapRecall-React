import React from "react";
import styled from "styled-components";

import {
  BemVindoContainer,
  Logo,
  ZapRecallTitle,
  IniciarButton,
} from "./StyledBemVindo";

import imagem from "../assets/logo.png";
import ZapRecall from "./ZapRecall";

const BemVindoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50%;
`;
const IniciarRecall = () => {
  const [isToRender, setIsToRender] = React.useState(true);

  const handleButtonClick = () => {
    setIsToRender(false);
  };

  return (
    <BemVindoContainer>
      {isToRender ? (
        <>
          <BemVindoStyled>
            <Logo src={imagem} alt="Descrição da imagem" />
            <ZapRecallTitle>ZapReacall</ZapRecallTitle>
            <IniciarButton onClick={handleButtonClick}>
              Iniciar Recall
            </IniciarButton>
          </BemVindoStyled>
        </>
      ) : (
        <ZapRecall />
      )}
    </BemVindoContainer>
  );
};

export default IniciarRecall;
