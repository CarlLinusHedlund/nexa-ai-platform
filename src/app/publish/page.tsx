"use client"
import React from 'react'


function Publish() {
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [file, setFile] = React.useState<File | null>(null);

  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
    } catch (error) {
      console.error(error);
    }
     // createPost is a function that creates a post in the database
  }
  
  return (
    <div className='py-40'>
      <form onSubmit={handleSubmit} className='md:w-1/2' action="">
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' className='w-full p-2 mb-4 border-2 border-gray-300 rounded-md' />
        <textarea onChange={(e) => setContent(e.target.value)} name="" id="content" cols={30} rows={10} placeholder='Content' className='w-full p-2 mb-4 border-2 border-gray-300 rounded-md'></textarea>
        <input accept=".png, .jpg, .jpeg, .webp" onChange={(e) => setFile(e.target.files?.[0] || null)} type="file" name="file" id="file" />
        <button type='submit' className='w-full p-2 my-10 mb-4 border border-[#11C8B2] bg-[#17171780] text-[#eeeeee] hover:shadow-sm duration-300 hover:shadow-[#11c8b36d] font-semibold rounded-md '>Publish</button>
      </form>
    </div>
  )
}

export default Publish