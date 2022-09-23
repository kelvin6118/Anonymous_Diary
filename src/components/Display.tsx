import React, {useEffect, useState} from 'react'
import DiaryCard from './DiaryCard'
import Loading from './Loading'
import {Diary} from '../typing'
import {fetchDiary} from '../util/fetchDiary'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import { refresh } from '../redux/createFormSlice'



function Display() {
  const [diaries,setDiaries] = useState<Diary[]>();
  const toRefresh:boolean = useSelector((state: RootState)=>state.form.refresh);
  const dispatch = useDispatch();

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

  useEffect(()=>{
    if(toRefresh===true){window.location.reload();}
  },[toRefresh])

  return (
    <div className='w-full h-fit min-h-screen flex flex-wrap justify-evenly'>
      {
        toRefresh===false && diaries? diaries.map((diary) =>(<DiaryCard diary={diary}/>) ) : <Loading/>
      }
    </div>
  )
}

export default Display
