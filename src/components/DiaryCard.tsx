import React,{useEffect, useState} from 'react'
import { Emoji, Comment, Diary} from '../typing'
import {updateDiary} from '../util/fetchDiary'


type Props = {
    diary: Diary
}

export default function DiaryCard({diary}: Props) {
    const [emoji,updateEmoji] = useState<Emoji>(diary.emoji);
    const [input, setComment] = useState<string>("");
    const [comments, getComments] = useState<Comment[]>([...diary.comments]);
    const date:string = new Date().toUTCString();
    const comment:Comment = {date: date, comment: input};

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        diary.comments.push(comment);
        updateDiary(diary);
        getComments([...diary.comments]);
    }

    

    const handleEmoji = (emo:number) => {
        switch(emo){
            case 1:
                updateEmoji({...emoji, happy: emoji.happy+1})
                return true;
            case 2:
                updateEmoji({...emoji, like: emoji.like+1})
                return true;
            case 3:
                updateEmoji({...emoji, love: emoji.love+1})
                return true;
        }}
        
    useEffect(()=>{
        diary.emoji = emoji;
        updateDiary(diary);
    },[emoji])

    return (
        <section className="flex flex-col h-fit justify-center bg-zinc-600 border-zinc-900 p-2 space-y-5 border-4 shadow-xl m-5 rounded-2xl shadow-white w-[70%] lg:w-[20%] md:w-[40%]"
        id={diary.id} >
            <h3 className='w-full text-xl break-words'>
                {diary.title}
            </h3>
            <div className="space-y-2">
                <img 
                className='w-full'
                src={diary.giphy}/>
                <p className='w-full max-h-[12rem] overflow-y-scroll'>
                    {diary.description}
                </p>
                <ul className="text-left">
                <li className="max-h-[10rem] overflow-y-scroll">
                    {
                        comments?
                        comments.map((comment) =>(
                            <><h4 className="">{comment.date}</h4>
                            <h3 className="">{comment.comment}</h3></>
                        )):false
                    }
                    
                </li>
                </ul>
            </div>
            <div className="footer">
                <div className="text-left space-x-1">
                <button
                className="hover:scale-125 transition duration-200"
                onClick={() => {handleEmoji(1)}}>😀</button><span>{emoji.happy}</span>
                <button 
                className="hover:scale-125 transition duration-200"
                onClick={() => {handleEmoji(2)}}>👍</button><span>{emoji.like}</span>
                <button 
                className="hover:scale-125 transition duration-200"
                onClick={() => {handleEmoji(3)}}>💖</button><span>{emoji.love}</span>
                </div>
                <form 
                className="flex justify-between"
                onSubmit={handleSubmit}
                >
                    <div className='space-x-2'>
                        <label htmlFor="comment-area">Comment</label>
                        <input 
                        className='p-1'
                        onChange={(e) => setComment(e.target.value)}type="text" required placeholder="comment" />
                    </div>
                    <button className='hover:scale-125 transition duration-200 pr-5' type="submit">Post</button>
                </form>
            </div>
            </section>
    )
}
