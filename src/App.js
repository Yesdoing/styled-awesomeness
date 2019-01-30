import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Fragment>
      <Container>
      <Button />
      <Button danger rotateTime="5"/>
      <Anchor as="a" href="http://www.google.com">Go to google</Anchor>
      </Container>
      <GlobalStyle />
      </Fragment>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: pink;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;  
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${ props => props.danger ? "#c0392b" : "#3498db"};
  ${props => {
    if(props.danger) {
      return css`animation: ${rotate} ${props.rotateTime}s linear infinite`;
    }
  }};
`;

const Anchor = styled(Button)`
  text-decoration: none;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default App;
