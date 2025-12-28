//A component that displays a list of of information for that pokemon
import { useState } from "react";
import { useEffect } from "react";

export default function PokemonInfo({pokemon}){
    //Fetch info from api
    const [name,setName]=useState([]);
    const [stats,setStats]=useState([]);
        
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then((data) => {
        console.log(data);
        setName(data.name);
        setStats(data.stats);
        })
        .catch(error => console.error(error))
    },[])

    return(
        <div>
            <h3>Info for {pokemon}</h3>
            <p>name: {name}</p>
            <p>stats</p>
            <ul>
                {stats.map((stat)=>{
                    return <li>{stat.stat.name} - {stat.base_stat}</li>
                })}
            </ul>
        </div>
        
    )
}