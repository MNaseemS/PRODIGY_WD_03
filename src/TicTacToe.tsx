import { useState } from "react";
import Board from "./Board";

const Player_X = "X"
const Player_O = "O"

function TicTacToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null))
    const [playerTurn, setPlayerTurn] = useState(Player_X)

    const handleTileClick = (index: unknown) => {
        console.log(index)
    }

    return (
    <div>
        <h1 className="text-3xl font-bold py-20">Tic Tac Toe</h1>
        <Board tiles={tiles} onTileClick={handleTileClick}/>
    </div>
    );
}

export default TicTacToe