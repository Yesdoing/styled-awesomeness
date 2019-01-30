import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle, css, keyframes, ThemeProvider } from "styled-components";
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: pink;
`;

const Card = styled.div`
  background-color: red;
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;



class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <Fragment>
        <Container>
          <Form />
        </Container>
        <GlobalStyle />
      </Fragment>
      </ThemeProvider>
    );
  }
}

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);


export default App;
