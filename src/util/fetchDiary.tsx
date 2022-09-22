import {Diary} from '../typing'

export const fetchDiary = async () =>{

    const response = await fetch("https://kelvin-anonymous-diary.herokuapp.com/Diaries");
    const data = await response.json();
    return data;
    
}

export const createDiary = async (diary:Diary) => {
    const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }

    const response = await fetch('https://kelvin-anonymous-diary.herokuapp.com/Diaries', {
        headers: new Headers(headerDict), 
        method: 'POST', 
        mode: 'cors',
        body: JSON.stringify(diary)
    });

    const data = await response.json();
    return data;
}

export const updateDiary = async (diary:Diary) => {
    const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }

    const response = await fetch('https://kelvin-anonymous-diary.herokuapp.com/Diaries', {
        headers: new Headers(headerDict), 
        method: 'PUT', 
        mode: 'cors',
        body: JSON.stringify(diary)
    });

    const data = await response.json();
    return data;
}
