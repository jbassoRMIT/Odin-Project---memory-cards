//Use this component to test whether clicking the text for  a pokemon displays its card
import PokemonInfo from "./PokemonInfo";
import { useState } from "react";

export default function ClickPokemonInfo(){
    
    const [displayCard,setDisplayCard]=useState(false);

    const handleClick=function(){
        setDisplayCard(true);
    }

    const showCard=function(){
        return (
            <ul>
                <li>
                    <PokemonInfo pokemon={"charizard"}/>
                </li>
            </ul>
        )
    }

    
    return(
        <div>
            <h3>Click pokemon below to display its card</h3>
            <ul>
                <li onClick={handleClick}>charizard</li>
                {displayCard? showCard():null}
            </ul> 
        </div>
    )
}