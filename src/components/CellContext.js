import React, { createContext, useState, useContext } from "react";

const CellContext = createContext();

export function useCellContext() {
  return useContext(CellContext);
}

export const CellProvider = ({ children }) => {
  const [cells, setCells] = useState([false, false, false, false]);

  const toggleCell = (index) => {
    setCells(cells.map((cell, cellIndex) => cellIndex === index ? !cell : cell));
  };

  const countOnCells = cells.filter(cell => cell).length;

  return (
    <CellContext.Provider value={{ cells, toggleCell, countOnCells }}>
      {children}
    </CellContext.Provider>
  );
};