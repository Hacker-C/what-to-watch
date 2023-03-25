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
      border='1 solid primary rounded-lg rounded-lg'
      outline='2 solid transparent active:primary'
      bg='#2c7a7b hover:#2c7a7b active:#285e61'
      text='white lt-sm:sm sm:lg'
      p='lt-sm:x-3 sm:x-5 y-1'
      className='ml-5px ease-out duration-200 lt-sm:h-[30px]'
      onClick={onClick}
      style={{
        backgroundColor: '#319795'
      }}
    >
      { children }
    </button>
  )
}

