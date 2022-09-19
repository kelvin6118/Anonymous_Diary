import React from "react";

export const fetchTrending =async () =>{

    const response = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=8PiyixOfCPFFExgTLW5347Y8xbuMoYGk&limit=45&rating=g");
    const data = await response.json();
    const result = data.data;
    return result;
    
}

export async function fetchSearch(input:string){
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=8PiyixOfCPFFExgTLW5347Y8xbuMoYGk&q=${input}&limit=25&offset=0&rating=g&lang=en`)
    const data = await response.json();
    const result = data.data;
    return result;
}

export default {fetchTrending, fetchSearch}
