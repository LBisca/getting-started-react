import React from "react";

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tbody>
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button onClick={() => props.removeCharacter(index)}>Delete</button>
          </td>
        </tr>
      </tbody>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default TableBody;
