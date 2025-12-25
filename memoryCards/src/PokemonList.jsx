//This function returns a list of pokemon in the database up to certain number
import { useState } from "react";
import { useEffect } from "react";
export default function PokemonList(){
    const [data,setData]=useState([]);
    
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
        .then(response => response.json())
        .then((data) => {
        console.log(data.results);
        setData(data.results);
        })
        .catch(error => console.error(error))
    },[])

    return(
        <div>
            <h3>List of all pokemon</h3>
            <ul>
                {data.map((pokemon)=>{
                    return <li>{pokemon.name}</li>
                })}
            </ul>
        </div>
    )
}