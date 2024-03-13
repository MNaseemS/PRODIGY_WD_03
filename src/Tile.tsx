function Tile({ className, value, onClick, playerTurn }) {
    let hoverClass = null
    if (value == null && playerTurn != null){
        hoverClass =`${playerTurn.toLowerCase()}-hover`
    }
    return <div onClick={onClick} className={`text-current text-[2em] flex justify-center items-center ${className} ${hoverClass}`}>{value}</div>;
}

export default Tile;
