import React, { useState } from "react";
import Grid from "./Grid";
import { CellProvider } from "./CellContext";



function App(){

    return(
        <CellProvider>
        <Grid />
        </CellProvider>
    );
}

export default App;