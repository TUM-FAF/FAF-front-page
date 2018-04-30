import { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #FFFFFF;
`;

class App extends Component {
  render() {
    return (
      <Title>Welcome to FAF front page</Title>
    );
  }
}

export default App;
