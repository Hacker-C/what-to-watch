import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  htmlType: 'submit' | 'button' | 'reset'
}

export const MButton = ({ children, onClick, htmlType = 'button' }: ButtonProps) => {
  return (
    <button
      type={htmlType}
      border='1.5 solid primary rounded-lg rounded-lg'
      outline='solid transparent hover:primary hover:1.5'
      text='primary lt-sm:base sm:lg'
      p='lt-sm:x-2 sm:x-3 lg:x-3 y-1'
      className='ml-5px ease-out duration-200 font-sans'
      onClick={onClick}
      style={{
        backgroundColor: '#fff'
      }}
    >
      { children }
    </button>
  )
}

