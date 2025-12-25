import { useState } from "react"

export default function SearchPokemon({pokemonName,handleChange,handleSubmit,clearFunction}){
    
    
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="pokemonName">Search for pokemon: </label>
                <input type="text" value={pokemonName} onChange={handleChange} />
                <button type="submit">Search</button>
                <button onClick={clearFunction}>clear</button>
            </form>
        </div>
    )
}