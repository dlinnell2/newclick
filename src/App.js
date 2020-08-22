import React, { Component } from 'react';
import Container from './Components/Container'
import Jumbo from './Components/Jumbo'
import Image from './Components/Image'
import Navbar from './Components/Navbar'
import characters from './info.json'

class App extends Component {

  state = {
    characters
  };

  render() {
    return (
      <Container>
        <Navbar />
        <Jumbo />
        <div className="row">
          {this.state.characters.map(character => (
            <Image
              image={character.image}
              id={character.id}
            />
          ))}
        </div>
      </Container>
    )
  }

}

export default App;
