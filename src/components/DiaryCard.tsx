import React from 'react'

type Props = {}

export default function DiaryCard({}: Props) {
  return (

        <section className="flex flex-col h-fit w-fit justify-center bg-zinc-600 space-y-5 min-w-[80%] lg:min-w-[30%] md:min-w-[50%]" id="{{id}}" >
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
                <h4 className="comment--date">0/20/2022 17:43:23</h4>
                <h3 className="comment--body">this is a comment</h3>
              </li>
            </ul>
          </div>
          <div className="card--footer">
            <div className="emoji--container text-left">
              <button className="emoji" value="{{emo1}}" id="emo1">😀{1}</button>
              <button className="emoji" value="{{emo2}}" id="emo2">👍{1}</button>
              <button className="emoji" value="{{emo3}}" id="emo3">💖{1}</button>
            </div>
            <form className="flex space-x-5">
                <div>
                    <label htmlFor="comment-area">Comment</label>
                    <input type="text" required placeholder="comment" />
                </div>
                <button type="submit">Post</button>
            </form>
          </div>
        </section>
  )
}
