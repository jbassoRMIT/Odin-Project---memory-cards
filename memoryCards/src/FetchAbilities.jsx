import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function FetchAbilities({pokemon}){
    //write function to fetch API data
    const [data,setData]=useState([]);

    useEffect(()=>{
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data.abilities);
        setData(data.abilities);
      })
      .catch(error => console.error(error))
    },[])

    // useEffect(() => {
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    //       .then(response => {
    //         setData(response.data);
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   }, []);

    // const abilities=data.abilities;

    
    return(
        <div className="abilities">
            <h3>Abilities</h3>
            <ul>
                {/* {JSON.stringify(data)} */}
                {data.map((ability)=>{
                    return <li>{ability.ability.name}</li>
                })}
            </ul>
        </div>
    )
}