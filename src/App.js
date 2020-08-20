import React, { Component } from 'react';
import Container from './Components/Container'
import Jumbo from './Components/Jumbo'
import Card from './Components/Card'
import characters from './info.json'

class App extends Component{

render() {
  return(
    <Container>
      <Jumbo />
    </Container>
  )
}

}

export default App;
