import React from 'react'
import DiaryCard from './DiaryCard'

type Props = {}

function Display({}: Props) {
  return (
    <div className='w-full h-fit min-h-screen flex flex-wrap justify-evenly space-x-5 space-y-5'>
      <DiaryCard/>
    </div>
  )
}

export default Display
