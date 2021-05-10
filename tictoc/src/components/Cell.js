import React from 'react';



const Cell = (props) => {

    const {value} = props;
    const {play} = props;

    return (
        <div className="cell" onClick={play}>
            <div className="valeur_cell">
                <h1> {value} </h1>
            </div>
        </div>
    );
};

export default Cell;