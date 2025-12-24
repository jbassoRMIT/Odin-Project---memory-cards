import { useEffect } from "react";
import { useState } from "react";

export default function FetchData({pokemon}){
    //write function to fetch API data
    const [data,setData]=useState(0);

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error))
    },[])

    const abilities=data.abilities;
    const moves=data.moves

    
    return(
        <div className="movesAbilities">
            <h2>Basic info for {pokemon}</h2>
            <div className="abilities">
                <h3>Abilities</h3>
                <ul>
                    {abilities.map((ability)=>{
                        return <li>{ability.ability.name}</li>
                    })}
                </ul>
            </div>
            <div className="moves">
                <h3>Moves</h3>
                <ul className="movesList">
                    {moves.map((move)=>{
                        return <li>{move.move.name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}