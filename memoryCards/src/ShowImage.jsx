//write a function that returns an image from a giphy API call
import { useState } from "react";
import { useEffect } from "react";

export default function ShowImage({searchTerm}){
    const [data,setData]=useState([]);
        
    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=lSaPK1xtdipOD5FBO6qLflCfev5umows&q=${searchTerm}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
        .then(response => response.json())
        .then((data) => {
        console.log(data.data[0].images.original.url);
        setData(data.data[0].images.original.url);
        })
        .catch(error => console.error(error))
    },[])

    return(
        <div>
            <h3>Displaying image</h3>
            <img src={data} alt="" />
        </div>
    )
}