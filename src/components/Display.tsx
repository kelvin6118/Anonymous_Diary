import React from 'react'
import DiaryCard from './DiaryCard'

type Props = {}

function Display({}: Props) {
  return (
    <div className='w-full h-fit min-h-screen flex flex-wrap justify-evenly'>
      <DiaryCard/>
    </div>
  )
}

export default Display
