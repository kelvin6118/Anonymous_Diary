import React, {useEffect, useState} from 'react'
import DiaryCard from './DiaryCard'
import Loading from './Loading'
import {Diary} from '../typing'
import {fetchDiary} from '../util/fetchDiary'

type Props = {}

function Display({}: Props) {
  const [diaries,setDiaries] = useState<Diary[]>();

  const getDiaries = async () => {
    fetchDiary().then(
      response => {
        setDiaries(response)
      }
    );
  }

  useEffect(()=>{
    getDiaries();
  },[])

  return (
    <div className='w-full h-fit min-h-screen flex flex-wrap justify-evenly'>
      {
        diaries? diaries.map((diary) =>(<DiaryCard diary={diary}/>) ) : <Loading/>
      }
    </div>
  )
}

export default Display
