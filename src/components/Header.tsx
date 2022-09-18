import React from 'react'
import {PlusIcon} from '@heroicons/react/24/solid';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='bg-zinc-900 flex flex-row justify-between sticky'>
        <div className='align-center p-5'>
          <p className='text-slate-400 text-2xl'>
             Anonymous Diary
          </p>
        </div>
        <div className='align-center p-5'>
          <PlusIcon className='h-10 w-10 text-slate-400 hover:scale-125 transition duration-200 cursor-pointer' />
        </div>
        
    </header>
  )
}
