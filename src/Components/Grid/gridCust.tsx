import React from 'react';
import GridCellComp from "../gridCellComp/gridCellComp";
import "./gridCust.css"
const GridCust = () => {
    return (
        <div>
            <div className="gridRow">
                <GridCellComp/>
                <GridCellComp/>
            </div>
            <div className="gridRow">
                <GridCellComp/>
                <GridCellComp/>
            </div>
        </div>
    );
};

export default GridCust;
