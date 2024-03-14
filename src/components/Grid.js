import React from "react";
import { useCellContext } from "./CellContext";
import Cell from "./Cell";

function Grid() {
  const { cells, countOnCells } = useCellContext();

  return (
    <>
      <h1>Count: {countOnCells}</h1>
      <div className="container">
        {cells.map((_, index) => (
          <Cell key={index} index={index} />
        ))}
      </div>
    </>
  );
}

export default Grid;