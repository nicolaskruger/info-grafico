import styled, { ThemeProvider } from "styled-components";
import { Section01, Section02, theme } from "./components";



const AppDiv = styled.div`
  display: grid;
  grid-template-rows: 50vh 50vh;
  width: 100vw;
  background-color: ${props => props.theme.Background};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppDiv>
        <Section01 />
        <Section02 />
      </AppDiv>
    </ThemeProvider>
  );
}

export default App;
