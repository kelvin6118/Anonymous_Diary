import React,{useState} from 'react'
import { Emoji, Comment} from '../typing'


type Props = {}

export default function DiaryCard({}: Props) {
    const [emoji,updateEmoji] = useState<Emoji>({happy: 0, like: 0, love: 0});
    const [input, setComment] = useState<string>("");
    const date:string = new Date().toUTCString();
    const comment:Comment = {date: date, comment: input};

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <section className="flex flex-col h-fit w-fit justify-center bg-zinc-600 border-zinc-900 p-2 space-y-5 border-4 shadow-xl m-5 rounded-2xl shadow-white min-w-[70%] lg:min-w-[20%] md:min-w-[40%]" id="id" >
            <h3 className='w-full text-xl'>
                Title
            </h3>
            <div className="space-y-2">
                <img 
                className='w-full'
                src='https://media0.giphy.com/media/7PoDbyyGDJ3pi2WTjH/100.gif?cid=1253b287iyvi8n1vvpxy0hxyicoeorybw0nqwiohiwj5gu5r&rid=100.gif&ct=g'/>
                <p className='w-full'>
                    just some random description, use for testing
                </p>
                <ul className="text-left">
                <li className="comment">
                    <h4 className="">{comment.date}</h4>
                    <h3 className="">{comment.comment}</h3>
                </li>
                </ul>
            </div>
            <div className="footer">
                <div className="text-left space-x-1">
                <button
                className="hover:scale-125 transition duration-200"
                onClick={() => updateEmoji({...emoji, happy: emoji.happy+1})}>😀</button><span>{emoji.happy}</span>
                <button 
                className="hover:scale-125 transition duration-200"
                onClick={() => updateEmoji({...emoji, like: emoji.like+1})}>👍</button><span>{emoji.like}</span>
                <button 
                className="hover:scale-125 transition duration-200"
                onClick={() => updateEmoji({...emoji, love: emoji.love+1})}>💖</button><span>{emoji.love}</span>
                </div>
                <form 
                className="flex space-x-5"
                onSubmit={handleSubmit}
                >
                    <div className='space-x-2'>
                        <label htmlFor="comment-area">Comment</label>
                        <input 
                        className='p-1'
                        onChange={(e) => setComment(e.target.value)}type="text" required placeholder="comment" />
                    </div>
                    <button className='hover:scale-125 transition duration-200' type="submit">Post</button>
                </form>
            </div>
            </section>
    )
}
