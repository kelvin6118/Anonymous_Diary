import React, {useEffect, useState} from 'react'
import DiaryCard from './DiaryCard'
import Loading from './Loading'
import {Diary} from '../typing'
import {fetchDiary} from '../util/fetchDiary'



function Display() {
  const [diaries,setDiaries] = useState<Diary[]>([]);
  const [stack, setStack] = useState<number>(1);

  const getDiaries = async () => {
    fetchDiary().then(
      response => {
        setDiaries([...response].reverse())
      }
    );
  }

  useEffect(()=>{
      getDiaries();
  },[])

  return (
    <div className='min-h-screen h-fit w-full'>
      <div className='w-full h-fit flex flex-wrap justify-evenly'>
        {
          diaries.length > 0? diaries.slice(0,stack*12).map((diary) =>(<DiaryCard diary={diary}/>) ) : <Loading/>
        } 
      </div>
      {
        stack*12 < diaries.length?<button className='text-xl text-slate-400 p-10' onClick={()=>setStack(stack+1)}>Load More</button> : false
      }
    </div>
  )
}

export default Display
