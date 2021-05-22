import React from "react";

let BestPokemon = (props) => {
    return (
        <div>
            <p>My favorite Pokemon is Sparrow</p>
            <ul>
                {props.abilities.map((ability, index) => (
                    <li key={index}>{ability}</li>
                ))}
            </ul>
        </div>
    );
};

export default BestPokemon;