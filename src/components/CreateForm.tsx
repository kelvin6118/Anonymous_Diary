import React, {useState} from 'react'
import Picker, { IEmojiData } from 'emoji-picker-react';
import {FaceSmileIcon, GifIcon, ArrowRightIcon} from '@heroicons/react/24/solid';
import {useSelector, useDispatch} from 'react-redux';
import { switchEmoji, switchGiphy ,switchForm} from '../redux/createFormSlice';
import { RootState } from '../redux/store';
import Giphy from './Giphy'
import { AnimatePresence, motion } from 'framer-motion';

type Props = {visible: boolean}

function CreateForm({visible}: Props) {
  const Emoji = useSelector((state: RootState)=>state.form.EmojiSwitch);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const selected = useSelector((state: RootState)=>state.form.selectedGif);
  const dispatch = useDispatch();
  
  const addEmoji = (e:React.MouseEvent<Element, MouseEvent>, emojiObject:IEmojiData) => {
    setDescription(description? description + emojiObject.emoji : emojiObject.emoji)
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`title is ${title} and description is ${description} and gif ${selected} `)
  }

  const activeEmoji = (e:React.MouseEvent<Element, MouseEvent>) => {
    if(Emoji == true){
      dispatch(switchGiphy(true));
    }else{
      dispatch(switchGiphy(false));
    }
    dispatch(switchEmoji(!Emoji));
  }

  const activeGiphy = (e:React.MouseEvent<Element, MouseEvent>) => {
    dispatch(switchGiphy(true));
    if(Emoji == true){
      dispatch(switchEmoji(false));
    }
  }

  return (
    <AnimatePresence>
    {visible && <motion.section
    key="modal"
    initial={{
      x:500,
      opacity: 0,
    }}
    animate={{
      x:0,
      opacity:1,
    }}
    exit={{
      x:500,
      opacity: 0,
    }}
    transition= {{duration: 1}}
    className='flex flex-col justify-center absolute right-0 top-0 bg-zinc-600 w-96'>
      <h2 className="text-slate-400 text-xl bg-stone-800 p-5">
        Diary Form
        <div
        onClick={() => dispatch(switchForm(false))}
        className='h-10 w-10 absolute top-3 right-3 cursor-pointer'>
          <ArrowRightIcon pointerEvents="none"/>
        </div>
      </h2>

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
          <Giphy/>
        </div>
    </motion.section>}
    </AnimatePresence>
  )
}

export default CreateForm
