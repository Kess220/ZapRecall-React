/* eslint-disable react/prop-types */
import styled from "styled-components";

const SideBarContainer = styled.div`
  position: fixed;
  top: 90vh;
  display: flex;
  width: 100%;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`;

const SideBar = ({ totalQuestions, totalAnsweredQuestions }) => {
  return (
    <>
      <SideBarContainer>
        Concluido {totalAnsweredQuestions}/{totalQuestions}
      </SideBarContainer>
    </>
  );
};

export default SideBar;
