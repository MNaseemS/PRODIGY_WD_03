function Tile({ className, value }) {
    return <div className={`text-current text-[2em] flex justify-center items-center ${className}`}>{value}</div>;
}

export default Tile;
