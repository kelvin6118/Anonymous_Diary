import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='bg-zinc-900 flex flex-row justify-between sticky'>
        <div className='text-slate-400 text-2xl p-5'>
            Anonymous Diary
        </div>
    </header>
  )
}
