import GameState from "./GameState";

function GameOver({ gameState }) {
    switch (gameState) {
        case GameState.inProgress:
            return <></>;
        case GameState.playerOWins:
            return (
                <div className="text-center text-[2em] mt-[50px] p-2.5 font-bold">
                    O Wins!
                </div>
            );
        case GameState.playerXWins:
            return (
                <div className="text-center text-[2em] mt-[50px] p-2.5 font-bold">
                    X Wins!
                </div>
            );
        case GameState.draw:
            return (
                <div className="text-center text-[2em] mt-[50px] p-2.5 font-bold">
                    Draw!
                </div>
            );
        default:
            return <></>;
    }
}

export default GameOver;
