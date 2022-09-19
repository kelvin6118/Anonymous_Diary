export async function fetchTrending(){

    const response = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=8PiyixOfCPFFExgTLW5347Y8xbuMoYGk&limit=45&rating=g");
    const data = response.json();

    return data;
}

export async function fetchSearch(input:string){
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=8PiyixOfCPFFExgTLW5347Y8xbuMoYGk&q=${input}&limit=25&offset=0&rating=g&lang=en`)
    const data = response.json();

    return data;
}

export default {fetchTrending, fetchSearch}
