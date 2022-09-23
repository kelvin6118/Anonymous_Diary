import React, {useState} from 'react'
import Picker, { IEmojiData } from 'emoji-picker-react';
import {FaceSmileIcon, GifIcon, ArrowRightIcon} from '@heroicons/react/24/solid';
import {useSelector, useDispatch} from 'react-redux';
import { switchEmoji, switchGiphy ,switchForm, refresh} from '../redux/createFormSlice';
import { RootState } from '../redux/store';
import Giphy from './Giphy'
import { AnimatePresence, motion } from 'framer-motion';
import { Diary } from '../typing'
import {createDiary} from '../util/fetchDiary'

type Props = {visible: boolean}

function CreateForm({visible}: Props) {
  const Emoji = useSelector((state: RootState)=>state.form.EmojiSwitch);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const selected = useSelector((state: RootState)=>state.form.selectedGif);
  const toRefresh:boolean = useSelector((state: RootState)=>state.form.refresh);
  const dispatch = useDispatch();
  
  const addEmoji = (e:React.MouseEvent<Element, MouseEvent>, emojiObject:IEmojiData) => {
    setDescription(description? description + emojiObject.emoji : emojiObject.emoji)
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    const data:Diary = {
      id: "",
      title: title,
      description: description,
      giphy: selected,
      comments: [],
      emoji: {happy: 0,like: 0,love: 0}
    }
    createDiary(data);
    setTimeout(()=>{console.log("waiting for api")},500);
    dispatch(refresh(true));  
  }

  const activeEmoji = () => {
    if(Emoji == true){
      dispatch(switchGiphy(true));
    }else{
      dispatch(switchGiphy(false));
    }
    dispatch(switchEmoji(!Emoji));
  }

  const activeGiphy = () => {
    dispatch(switchGiphy(true));
    if(Emoji == true){
      dispatch(switchEmoji(false));
    }
  }

  const beforeCloseForm = () => new Promise<void>((resolve, reject) => {
    activeGiphy();
    resolve();
  })

  const closeForm = (e:React.MouseEvent<Element, MouseEvent>) => {
    beforeCloseForm().then(()=>dispatch(switchForm(false)));
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
    className='flex flex-col justify-center absolute right-0 top-0 bg-gray-900 w-96'>
      <h2 className=" text-xl text-slate-400 p-5 cursor-default">
        Diary Form
        <div
        onClick={closeForm}
        className='h-10 w-10 absolute top-3 right-3 cursor-pointer hover:scale-125 transition duration-200'>
          <ArrowRightIcon pointerEvents="none"/>
        </div>
      </h2>

      <form 
        className='flex flex-col space-y-2 p-2 w-full boder-box'
        onSubmit={handleSubmit}
        >
          <label htmlFor="title" className='text-left text-slate-400'>
              Title
          </label>
          <input
            type="text"
            maxLength={50}
            value={title}
            placeholder='Hello, How is your day'
            required={true}
            className='outline-none p-2 bg-slate-800 text-slate-400 placeholder:text-slate-400'
            onChange={(e) => setTitle(e.target.value)}
           />
           
          <label htmlFor="diary" className='text-left text-slate-400'>
              Diary
          </label>
          <textarea
            placeholder='Tell us what happened today'
            value={description}
            className='outline-none p-2 bg-slate-800 text-slate-400 placeholder:text-slate-400'
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className='flex flex-row justify-between'>
            <div className='flex'>
              <div 
              className='w-7 h-7 cursor-pointer right-0 hover:scale-125 transition duration-200'
              onClick={activeGiphy}>
                <GifIcon pointerEvents="none" className='w-7 h-7 text-slate-400'/>
              </div>
              <div 
              className='w-7 h-7 cursor-pointer right-0 hover:scale-125 transition duration-200'
              onClick={activeEmoji}>
                <FaceSmileIcon pointerEvents="none" className='w-7 h-7 text-slate-400'/>
              </div>
            </div>
            <div>
              <button className='p-2 text-slate-400 hover:scale-125 transition duration-200' type='submit'>
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
        <div className='h-5 w-full bg-stone-800'>

        </div>
    </motion.section>}
    </AnimatePresence>
  )
}

export default CreateForm
