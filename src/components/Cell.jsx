import React, { useState } from "react";


function Cell(props){
    return(
        <div 
        
            className="box" 
            onClick = {props.toggle}
            style ={{backgroundColor: props.isOn ? "black": "white"}}></div>
    );
}

export default Cell;