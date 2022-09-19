import React, {useState} from 'react'
import Picker, { IEmojiData } from 'emoji-picker-react';
import {FaceSmileIcon} from '@heroicons/react/24/solid';
type Props = {}

/* eslint-disable no-unused-expressions */
function CreateForm({}: Props) {
  const [openEmoji, setEmojiActive] = useState<boolean>(false);
  const [title, setTitle] = useState<any>();
  const [description, setDescription] = useState<any>();

  const addEmoji = (e:React.MouseEvent<Element, MouseEvent>, emojiObject:IEmojiData) => {
    setDescription(description + emojiObject.emoji)
  };

  return (
    <div className='flex flex-col justify-center absolute right-10 top-10 border-2 border-sky-500 box-border'>
      <h2 className="text-slate-400 text-lg">Diary Form</h2>
        <form className='flex flex-col space-y-2 p-2 w-fit mx-auto'>
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
        </form>
        <button onClick={() => setEmojiActive(!openEmoji)}>
          <FaceSmileIcon pointerEvents="none" className='h-10 w-10'/>
          {openEmoji && (
            <div>
              <Picker onEmojiClick={function (event: React.MouseEvent<Element, MouseEvent>, data: IEmojiData):
                void {
                 addEmoji(event, data);
                } } />
            </div>
          )}
        </button>
        
    </div>
  )
}

export default CreateForm
