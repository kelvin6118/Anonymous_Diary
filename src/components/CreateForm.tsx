import React, {useEffect, useState} from 'react'
import Picker, { IEmojiData } from 'emoji-picker-react';
import {FaceSmileIcon, GifIcon} from '@heroicons/react/24/solid';
import {fetchTrending, fetchSearch} from "../util/fetchGiphy";
import {useSelector, useDispatch} from 'react-redux';
import { closeEmoji, closeGiphy, openEmoji, openGiphy } from '../redux/createFormSlice';
import { RootState } from '../redux/store';

type Props = {}

function CreateForm({}: Props) {
  const Emoji = useSelector((state: RootState)=>state.form.Emoji);
  const Giphy = useSelector((state: RootState)=>state.form.Giphy);
  
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [search, setSearch] = useState<string>();
  const [giphyDisplay, setGiphy] = useState<any[]>();
  const [selected, selectGiphy] = useState<string>();
  const dispatch = useDispatch();
  
  const addEmoji = (e:React.MouseEvent<Element, MouseEvent>, emojiObject:IEmojiData) => {
    setDescription(description? description + emojiObject.emoji : emojiObject.emoji)
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`title is ${title} and description is ${description} and gif ${selected}`)
  }

  const activeEmoji = (e:React.MouseEvent<Element, MouseEvent>) => {
    if(Emoji == false){
      dispatch(closeGiphy);
      dispatch(openEmoji);
    }else{
      dispatch(openGiphy);
      dispatch(closeEmoji);
    }
  }

  const activeGiphy = (e:React.MouseEvent<Element, MouseEvent>) => {
    dispatch(openGiphy);
    if(Emoji == true){
      dispatch(closeEmoji);
    }
  }

  const getGiphy =async () => {
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
    <section className='flex flex-col justify-center absolute right-0 top-0 bg-zinc-600 w-96'>
      <h2 className="text-slate-400 text-xl bg-stone-800 p-5">Diary Form</h2>
        <form 
        className='flex flex-col space-y-2 p-2 w-full boder-box'
        onSubmit={handleSubmit}
        >
            <label htmlFor="Title" className='text-left text-slate-400'>
                Title
            </label>
            <input
              type="text"
              className=''
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="description" className='text-left text-slate-400'>
                description
            </label>
            <textarea
              value={description}
              className=''
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className='flex flex-row justify-between'>
              <div className='flex'>
                <div 
                className='w-7 h-7 cursor-pointer right-0'
                onClick={activeGiphy}>
                  <GifIcon pointerEvents="none" className='w-7 h-7 text-slate-400'/>
                </div>
                <div 
                className='w-7 h-7 cursor-pointer right-0'
                onClick={activeEmoji}>
                  <FaceSmileIcon pointerEvents="none" className='w-7 h-7 text-slate-400'/>
                </div>
              </div>
              <div>
                <button type='submit'>
                  Submit
                </button>
              </div>
            </div>
        </form>
        <div className="h-fit w-full">
          {Emoji && (
              <div className='flex justify-center mb-5'>
                <Picker 
                
                onEmojiClick={function (event: React.MouseEvent<Element, MouseEvent>, data: IEmojiData):
                  void {
                  addEmoji(event, data);
                  } }
                />
              </div>
            )}
          {Giphy && (
              <div className='flex flex-col'>
                <form className='flex space-x-2 p-2 justify-evenly' onSubmit={searchGiphy}>
                  <input 
                  className='w-fit'
                  type="text" 
                  onChange={(e)=>setSearch(e.target.value)}/>
                  <button type='submit'>Search</button>
                </form>
                <div className='flex flex-row flex-wrap justify-evenly overflow-y-scroll h-[50vh]'>
                  {giphyDisplay && giphyDisplay.map((giphy) => (
                    <img 
                    className= {`${selected == giphy.images["fixed_height_small"].url ? "border-2": ""} cursor-pointer `}
                    src={giphy.images["fixed_height_small"].url}
                    onClick={() => {
                      selectGiphy(giphy.images["fixed_height_small"].url);
                    }}
                    />
                  ))}
                </div>
              </div>
              
            )}
        </div>
    </section>
  )
}

export default CreateForm
