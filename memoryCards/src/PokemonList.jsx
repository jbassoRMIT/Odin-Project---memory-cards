//This function returns a list of pokemon in the database up to certain number
import { useState } from "react";
import { useEffect } from "react";
export default function PokemonList(){
    const [data,setData]=useState([]);
    const [display,setDisplay]=useState(false);
    const [size,setSize]=useState("");
    const num=23;
    
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
        .then(response => response.json())
        .then((data) => {
        console.log(data.results);
        setData(data.results);
        })
        .catch(error => console.error(error))
    },[])

    const handleChange=function(e){
        setSize(e.target.value);
        console.log(size);
    }
    
    const handleSubmit=function(e){
        e.preventDefault();
        setDisplay(true);
        console.log(data);
        console.log(size);
    }

    //write a function to filter pokemon based on index
    const pokeList=data.filter((pokemon,index)=> {
        return index<size;
    })

    const displayPokemon=function(){
        return(
            <div>
                <h3>List of all pokemon</h3>
                <ul>
                    {pokeList.map((pokemon)=>{
                        return <li>{pokemon.name}</li>
                    })}
                </ul>
            </div>
        )
    }

    const reset=function(){
        setDisplay(false);
    }

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="size">How many pokemon would you like to return?</label>
                <input type="number" name="size" id="size" value={size} onChange={handleChange}/><br/>
                <button type="submit">Display pokemon</button>
            </form>
            <button onClick={reset}>Reset</button>
            {display?displayPokemon():null}
        </div>
    )
}