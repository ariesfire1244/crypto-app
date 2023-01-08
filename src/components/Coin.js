import React from "react";



export function Coin ({name, icon, price, symbol}){
    return(
        <div className="coin">
            <h1>Name: {name}</h1>
            <img src={icon} />
            <h1>Price: {price} USD</h1>
            <h1>Symbol: {symbol}</h1>
        </div>
    )
}
export default Coin; 


