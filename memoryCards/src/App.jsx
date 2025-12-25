import { useState } from 'react'
import './App.css'
import FetchMoves from './FetchMoves'
import FetchAbilities from './FetchAbilities'
import SearchPokemon from './SearchPokemon';
import PokemonList from './PokemonList';
import ShowImage from './ShowImage';

function App() {

  const [pokemonName,setPokemonName]=useState("");
  const [submitted,setSubmitted]=useState(false);

  const handleChange=function(e){
      setPokemonName(e.target.value);
      console.log(pokemonName);
  }

  const handleSubmit=function(e){
      e.preventDefault();
      console.log(pokemonName);
      setSubmitted(true);
  }

  const clear=function(e){
    setPokemonName("");
    console.log(pokemonName);
    setSubmitted(false);
  }

  return (
    <>
      <h2 className='mainHeading'>hello world</h2>
      {submitted? <h2>Displaying info for {pokemonName}</h2>:null}
      {/* <FetchAbilities pokemon={pokemon}/>
      <FetchMoves pokemon={pokemon}/> */}
      <SearchPokemon pokemonName={pokemonName} handleChange={handleChange} handleSubmit={handleSubmit} clearFunction={clear}/>
      {/* {/* <FetchAbilities pokemon={"bulbasaur"}/> */}
      {submitted?<FetchMoves pokemon={pokemonName}/> :null}
      {/* <PokemonList/> */}
      {submitted? <ShowImage searchTerm={pokemonName}/>:null}
    </>
  )
}

export default App
