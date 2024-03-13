import GameState from "./GameState";
function Reset({gameState, onReset}) {
    if(gameState === GameState.inProgress){
        return;
    }
    return (<button onClick={onReset} className="bg-[#0074a6] text-[white] w-full text-[1.5em] mt-[50px] p-5">Reset</button>);
}

export default Reset;