import React from 'react'
import { Geist } from 'next/font/google'

const geistMono = Geist({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const Header = () => {
  return (
    <div className='h-2/6'></div>
  )
}

export const Greeting = () => {
  return (
    <div className='h-2/6 flex flex-col justify-center items-center'>
      <div className='text-7xl text-gray-100 tracking-wide m-4'>
        Resumes are overrated.
      </div>
      <div className='text-xl flex flex-col justify-center items-center text-gray-300'>
        Ask me anything and get your answer immediately.
      </div>
    </div>
  )
}

export const TextBox = () => {
  return (
    <div className='h-2/6 w-full flex flex-col justify-end items-center'>
      <div className='w-full h-15 mb-40 flex justify-center items-center'>
        <textarea placeholder='What experience do you have with backend architecture?' className={`textarea w-1/2 placeholder:text-gray-400 ${geistMono.className}`} />
      </div>
    </div>
  )
}

export const ChatInterface = () => {
  return (
    <div className='w-5/6 h-full flex flex-col justify-between items-center'>
        <Header />
        <Greeting />
        <TextBox />
    </div>
  )
}

export default ChatInterface;
