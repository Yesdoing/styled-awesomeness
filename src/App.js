import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <Container>
      <Button />
      <Button danger />
      </Container>
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
  background-color: ${ props => props.danger ? "#c0392b" : "#3498db"}
`;

export default App;
