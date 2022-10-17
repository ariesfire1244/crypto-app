import React from "react";



export function Coin ({name, icon, price, symbol}){
    return(
        <div className="coin">
            <h1>Name: {name}</h1>;
            <img src={icon} />;
            <h1>Price: {name}</h1>;
            <h1>Symbol: {name}</h1>;
        </div>
    )
}
export default Coin ;


