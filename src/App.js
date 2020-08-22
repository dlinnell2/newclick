import React, { Component } from 'react';
import Container from './Components/Container'
import Jumbo from './Components/Jumbo'
import Image from './Components/Image'
import Navbar from './Components/Navbar'
import info from './info.json'

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

class App extends Component {

    state = {
      info,
      currentScore: 0,
      highScore: 0,
      clicked: [0],
      message: null,
      messageStyle: null
    }
  

  clickImage = (id) => {

    let checkClick = this.state.clicked.includes(id);

    let newInfo = this.state.info;
    shuffle(newInfo);
    let newArray = this.state.clicked.concat(id);

    if (checkClick) {

      this.setState({
          currentScore: 0,
          clicked: [0],
          message: "Already Clicked!",
          messageStyle: "incorrect",
          info:newInfo

      })
    } else if (this.state.currentScore >= this.state.highScore){

      this.setState({
        currentScore:this.state.currentScore+1,
        highScore:this.state.currentScore+1,
        message:"New High Score!",
        messageStyle:"correct",
        clicked:newArray,
        info:newInfo
      })
    } else {

      this.setState({
        currentScore:this.state.currentScore+1,
        message:"Correct!",
        messageStyle:"correct",
        clicked:newArray,
        info:newInfo
      })
    }

  }

  render() {
    return (
      <Container>
        <Navbar
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          message={this.state.message}
          messageStyle={this.state.messageStyle}
        />
        <Jumbo />
        <div className="row">
          {this.state.info.map(character => (
            <Image
              image={character.image}
              id={character.id}
              clickImage={this.clickImage}
            />
          ))}
        </div>
      </Container>
    )
  }

}

export default App;
