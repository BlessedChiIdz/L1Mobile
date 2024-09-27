import React, {useState} from 'react';
import "./gridCellComps.css";
const GridCellComp = () => {
    const [clicks, setClicks] = useState(1)
    return(
        <div className="gridCellComp">
            <img src="/favicon.ico" style={{"width":"100%"}} />
            <button onClick={()=>{setClicks(clicks+1)}}>
                {clicks}
            </button>
        </div>
    )
};

export default GridCellComp;
