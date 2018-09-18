import React, { Component } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

class Table extends Component {
  render = props => {
    const { characterData, removeCharacter } = this.props;
    return (
      <table>
        <TableHead />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  };
}

export default Table;
