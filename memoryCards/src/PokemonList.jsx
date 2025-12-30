//This function returns a list of pokemon in the database up to certain number
import { useState } from "react";
import { useEffect } from "react";
import PokemonInfo from "./PokemonInfo";
export default function PokemonList(){
    const [data,setData]=useState([]);
    const [display,setDisplay]=useState(false);
    const [size,setSize]=useState("");
    const [moreInfo,setMoreInfo]=useState(false);
    const [listIndex,setListIndex]=useState(0);
    const [sorted,setSorted]=useState(false);
    
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
        console.log(pokeList);
        console.log(pokeListSorted);
    }

    //write a function to filter pokemon based on index
    const pokeList=data.filter((pokemon,index)=> {
        return index<size;
    })

    //write a sorting function for pokeList
    const sortingFunction=function(a,b){
        if(a.name>b.name){
            return 1
        }
        else if (a.name<b.name){
            return -1
        }
        else{
            return 0
        }
    }
    

    const pokeListSorted=pokeList.toSorted(sortingFunction);

    const handlePokemonClick=function(n){
        setMoreInfo(true);
        setListIndex(n);

    }

    const showMoreInfo=function(pokemonName){
        const hideInfo=function(){
            setMoreInfo(false);
        }
        
        return(
            <div>
                <PokemonInfo pokemon={pokemonName}/>
                <button onClick={hideInfo}>Hide</button>
            </div>
        )
    }


    const toggleSort=function(){
        if(sorted){
            setSorted(false);
        }
        else{
            setSorted(true);
        }
    }

    const displayPokemon=function(){
        let displayList=pokeList;

        if(sorted){
            displayList=pokeListSorted;
        }
        
        return(
            <div>
                <h3>List of all pokemon</h3>
                <ul>
                    {displayList.map((pokemon,index)=>{
                        return(
                            <div>
                                <li onClick={() => handlePokemonClick(index)}>{pokemon.name}</li>
                                {(moreInfo && listIndex==index)? showMoreInfo(pokemon.name):null}
                            </div>
                        ) 
                    })}
                </ul>
                <button onClick={toggleSort}>toggle sort</button>
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