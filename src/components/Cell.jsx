import React, { useState } from "react";
import { useCellContext } from "./CellContext";


function Cell({index}){ // index prop is needed to identify which cell to toggle
    const { cells, toggleCell } = useCellContext();
    const isOn = cells[index];
    return(
        <div 
        
            className="box" 
            onClick = {() => toggleCell(index)}
            style ={{backgroundColor: isOn ? "black": "white"}}></div>
    );
}

export default Cell;