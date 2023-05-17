import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  body {
    margin: 0;
    padding: 0;
  }

  /* Outros estilos globais */
  /* ... */
`;

// No componente raiz da sua aplicação
const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* Resto do seu código */}
    </>
  );
};

export default App;
