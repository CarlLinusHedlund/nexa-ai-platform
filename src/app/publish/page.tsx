"use client"
import React from 'react'
import { useAuth } from '@clerk/nextjs';
import { createPost } from '@/utils/supabaseRequest'

function Publish() {
  const {userId, getToken} = useAuth();
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [file, setFile] = React.useState<File | null>(null);
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const token = await getToken({template: "Nexa-Supabase"})
    const post = await createPost({ title, content, userId, token }) // createPost is a function that creates a post in the database
    console.log(post);
  }
  
  return (
    <div className='py-40'>
      <form onSubmit={handleSubmit} className='md:w-1/2' action="">
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' className='w-full p-2 mb-4 border-2 border-gray-300 rounded-md' />
        <textarea onChange={(e) => setContent(e.target.value)} name="" id="content" cols={30} rows={10} placeholder='Content' className='w-full p-2 mb-4 border-2 border-gray-300 rounded-md'></textarea>
        <input onChange={(e) => setFile(e.target.files?.[0] || null)} type="file" name="file" id="file" />
        <button type='submit' className='w-full p-2 my-10 mb-4 border border-[#11C8B2] bg-[#17171780] text-[#eeeeee] hover:shadow-sm duration-300 hover:shadow-[#11c8b36d] font-semibold rounded-md '>Publish</button>
      </form>
    </div>
  )
}

export default Publish