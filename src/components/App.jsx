import React, { useState } from "react";
import Cell from "./Cell";



function App(){

    const [cells, setCells] = useState([false, false, false, false]);

    const toggleCell = (index) => {
        setCells(cells.map((cell, cellIndex) => cellIndex === index ? !cell : cell));
    };

    const countOnCells = cells.filter(cell => cell).length;

    
    
    return(
        <div>
        <h1>Count: {countOnCells}</h1>
        <div className="container">
            {cells.map((isOn, index) =>(
                <Cell key={index}
                isOn = {isOn}
                toggle = {() => toggleCell(index)} />
            ))}
            
        </div>
        </div>
    );
}

export default App;