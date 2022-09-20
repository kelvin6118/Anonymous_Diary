import React from 'react'
import DiaryCard from './DiaryCard'
import {Diary} from '../typing'

type Props = {}

function Display({}: Props) {
  const diary:Diary = {
    title: "this is a test title",
    description: "this is a test description",
    comments: [{date: "09/21/2022 17:00", comment: "this is the first comment"}, {date: "09/21/2022 17:00", comment: "this is the second comment"}],
    emoji: {happy: 0, like: 1, love: 2},
    giphy: "https://media3.giphy.com/media/5x5iPtXlR4LzwXzZhi/100.gif?cid=1253b287nm00qq88juxxwaardy3xcyngnemxrikpt19brgsq&rid=100.gif&ct=g"
  }

  return (
    <div className='w-full h-fit min-h-screen flex flex-wrap justify-evenly'>
      <DiaryCard Diary={diary}/>
    </div>
  )
}

export default Display
