import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function FetchMoves({pokemon}){
    //write function to fetch API data
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then((data) => {
          console.log(data.moves);
          setData(data.moves);
        })
        .catch(error => console.error(error))
    },[])

    const list=["apple","peach","pear","mandarin"];

    // useEffect(() => {
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
    //       .then(response => {
    //         setData(response.data.moves);
    //         console.log(data);
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   }, []);

    
    return(
        <div className="moves">
            <h3>Moves</h3>
            <ul className="movesList">
                {/* {JSON.stringify(data.moves)} */}
                {/* {list.map((fruit)=>{
                  return <li>{fruit}</li>
                })} */}
                {data.map((move)=>{
                  return <li>{move.move.name}</li>
                })}
                {/* {moves.map((move)=>{
                    return <li>{move.move.name}</li>
                })} */}
            </ul>
        </div>
    )
}