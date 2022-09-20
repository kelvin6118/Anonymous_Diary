import React, {useEffect, useState} from 'react'
import { RootState } from '../redux/store';
import {useSelector, useDispatch} from 'react-redux';
import {fetchTrending, fetchSearch} from "../util/fetchGiphy";
import { updateGif } from '../redux/createFormSlice';

type Props = {}

export default function Giphy({}: Props) {
    const [search, setSearch] = useState<string>();
    const [giphyDisplay, setGiphy] = useState<any[]>();
    const Giphy = useSelector((state: RootState)=>state.form.GiphySwitch);
    const selected = useSelector((state: RootState)=>state.form.selectedGif);
    const dispatch = useDispatch();

    const getGiphy = async () => {
        fetchTrending().then(
          response => setGiphy(response)
        );
    }

    const searchGiphy =async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(search != undefined){
          fetchSearch(search).then(
            response => setGiphy(response)
          );
        }
        }
    
    useEffect(()=>{
        getGiphy();
    },[])
    
  return (
    <>
    {Giphy && (
        <div className='flex flex-col'>
          <form className='flex space-x-2 p-2 justify-evenly' onSubmit={searchGiphy}>
            <input 
            className='outline-none p-1 bg-slate-800 text-slate-400 placeholder:text-slate-400'
            type="text" 
            onChange={(e)=>setSearch(e.target.value)}/>
            <button className='text-slate-400 hover:scale-125 transition duration-200' type='submit'>Search</button>
          </form>
          <div className='flex flex-row flex-wrap justify-evenly space-y-1 overflow-y-scroll h-[50vh]'>
            {giphyDisplay && giphyDisplay.map((giphy) => (
              <img 
              className= {`${selected == giphy.images["fixed_height_small"].url ? "border-2": ""} cursor-pointer `}
              src={giphy.images["fixed_height_small"].url}
              onClick={() => {
                dispatch(updateGif(giphy.images["fixed_height_small"].url));
              }}
              />
            ))}
          </div>
        </div>
      )}</>
  )
}
