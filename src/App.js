import React, { Component } from "react";
import Table from "./components/table/Table";
import Form from "./components/table/Form";

class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <Form />
      </div>
    );
  }
}

export default App;
