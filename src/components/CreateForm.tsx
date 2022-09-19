import React, {useEffect, useState} from 'react'
import Picker, { IEmojiData } from 'emoji-picker-react';
import {FaceSmileIcon, GifIcon} from '@heroicons/react/24/solid';
import {fetchTrending, fetchSearch} from "../util/fetchGiphy";

type Props = {}

/* eslint-disable no-unused-expressions */
function CreateForm({}: Props) {
  const [openEmoji, setEmojiActive] = useState<boolean>(false);
  const [openGiphy, setGiphyActive] = useState<boolean>(true);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [search, setSearch] = useState<string>();
  const [giphyDisplay, setGiphy] = useState();
  
  const addEmoji = (e:React.MouseEvent<Element, MouseEvent>, emojiObject:IEmojiData) => {
    setDescription(description? description + emojiObject.emoji : emojiObject.emoji)
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`title is ${title} and description is ${description}`)
  }

  const handleEmoji = (e:React.MouseEvent<Element, MouseEvent>) => {
    if(openEmoji == false){
      setGiphyActive(false);
    }else{
      setGiphyActive(true);
    }
    setEmojiActive(!openEmoji)
  }

  const handleGiphy = (e:React.MouseEvent<Element, MouseEvent>) => {
    setGiphyActive(true);
    console.log(giphyDisplay);
    if(openEmoji == true){
      setEmojiActive(false);
    }
  }

  const getGiphy =async () => {
    fetchTrending().then(
      response => setGiphy(response)
    );
  }

  const searchGiphy =async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchSearch(search).then(
      response => setGiphy(response)
    );
    console.log(search);
  }

  useEffect(()=>{
    getGiphy();
  },[])

  return (
    <div className='flex flex-col justify-center absolute right-10 top-10 border-2 border-sky-500 box-border bg-zinc-600'>
      <h2 className="text-slate-400 text-lg bg-stone-800 ">Diary Form</h2>
        <form 
        className='flex flex-col space-y-2 p-2 w-full mx-auto '
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
                onClick={handleEmoji}>
                  <FaceSmileIcon pointerEvents="none" className='w-7 h-7 text-slate-400'/>
                </div>
                <div 
                className='w-7 h-7 cursor-pointer right-0'
                onClick={handleGiphy}>
                  <GifIcon pointerEvents="none" className='w-7 h-7 text-slate-400'/>
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
          {openEmoji && (
              <div>
                <Picker 
                onEmojiClick={function (event: React.MouseEvent<Element, MouseEvent>, data: IEmojiData):
                  void {
                  addEmoji(event, data);
                  } }
                />
              </div>
            )}
          {openGiphy && (
              <div>
                <form className='flex space-x-2' onSubmit={searchGiphy}>
                  <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
                  <button type='submit'>Search</button>
                </form>
              </div>
            )}
        </div>
    </div>
  )
}

export default CreateForm
