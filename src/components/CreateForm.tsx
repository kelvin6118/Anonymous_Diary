import React from 'react'

type Props = {}

function CreateForm({}: Props) {
  return (
    <div className='flex justify-center absolute right-10 top-10 border-2 border-sky-500'>
        <form className='flex flex-col space-y-2 p-2 w-fit mx-auto'>
            <label htmlFor="Title" className='text-left'>
                Title
            </label>
            <input type="text" className=''/>

            <label htmlFor="description" className='text-left'>
                description
            </label>
            <textarea className=''/>
        </form>
    </div>
  )
}

export default CreateForm
