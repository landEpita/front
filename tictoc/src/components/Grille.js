import React,  {useState, useEffect} from 'react';
import Cell from './Cell';
// import axios from "axios";

const Grille = () => {

    const [values, setValues] = useState(["", "", "", "", "", "","", "", ""])
    const [turn, setTurn] = useState("X")
    const winCombinations = [[1,1,1,0,0,0,0,0,0],[0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,1,1,1],
                            [1,0,0,1,0,0,1,0,0],[0,1,0,0,1,0,0,1,0],[0,0,1,0,0,1,0,0,1],
                            [1,0,0,0,1,0,0,0,1],[0,0,1,0,1,0,1,0,0]]


    const check = (joueur) => {
        let res = false;
        let X = values.map((e) => Number(e===joueur));
        for (let i = 0; i < 8; i++)
        {
            for (let j = 0; j < 9; j++)
                if (X[j] != winCombinations[i][j]) 
                    break;
                else
                    if (j==8)
                        res=true;
        }
        return res;
    }

    const play= (index) => {
        setValues(values.map((e,i) =>{
            if (i == index && e ==="")
            {
                if (turn === "O")
                {
                    setTurn("X");
                    Document.title = "X"
                }
                else{
                    setTurn("O");
                    Document.title = "O"
                }
                return turn;
            }
            return e;
        }))
    }

    useEffect(()=> {
        if (check("X"))
            alert("X gagne !")
        if (check("O"))
            alert("O gagne !")
    }, [turn])

    const clean = () => {
        setValues(["", "", "", "", "", "","", "", ""])
        setTurn("X")
    }

    return (
        <>
        <div className="grille">
            <div className="grille_mesh">
                {values.map((e, index) => {
                            return (
                                <Cell key={index} play={() => play(index)} value={e}/>
                            )
                        })}
            </div>
        </div>
        <button onClick={() => clean()}>
            clear
        </button>
        </>
    );
};

export default Grille;