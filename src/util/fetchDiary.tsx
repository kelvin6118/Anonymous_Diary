export const fetchDiary = async () =>{

    const response = await fetch("https://kelvin-anonymous-diary.herokuapp.com/Diaries");
    const data = await response.json();
    return data;
    
}
