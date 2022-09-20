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
        <section className="flex flex-col h-fit w-fit justify-center bg-zinc-600 space-y-5 min-w-[80%] lg:min-w-[30%] md:min-w-[40%]" id="id" >
            <h3 className='w-full'>
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
                    <h4 className="comment--date">{comment.date}</h4>
                    <h3 className="comment--body">{comment.comment}</h3>
                </li>
                </ul>
            </div>
            <div className="footer">
                <div className="emoji--container text-left">
                <button onClick={() => updateEmoji({...emoji, happy: emoji.happy+1})} className="">😀{emoji.happy}</button>
                <button onClick={() => updateEmoji({...emoji, like: emoji.like+1})}>👍{emoji.like}</button>
                <button onClick={() => updateEmoji({...emoji, love: emoji.love+1})}>💖{emoji.love}</button>
                </div>
                <form 
                className="flex space-x-5"
                onSubmit={handleSubmit}
                >
                    <div>
                        <label htmlFor="comment-area">Comment</label>
                        <input onChange={(e) => setComment(e.target.value)}type="text" required placeholder="comment" />
                    </div>
                    <button type="submit">Post</button>
                </form>
            </div>
            </section>
    )
}
