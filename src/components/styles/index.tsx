import type { ChangeEventHandler, FormEvent } from 'react'
import React from 'react'

interface BaseProps {
  children: React.ReactNode
}

interface FormProps extends BaseProps {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  className?: string
}

export const MForm = ({ onSubmit, children }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className='lt-sm:text-center sm:text-left'>
      {children}
    </form>
  )
}

interface InputProps {
  type: 'text'
  placeholder: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const MInput = ({ onChange, value, type, placeholder }: InputProps) => {
  return (
    <input
      w='lt-sm:55% lt-md:60% md:80'
      border='1 solid primary rounded-lg rounded-lg'
      outline='2 solid transparent focus:primary'
      text='#333 lt-sm:sm sm:lg'
      className='px-3 py-1 ease-out duration-500 bg-[#f4f5f5]'
      placeholder={placeholder}
      value={value} onChange={onChange} type={type}
    />
  )
}

MForm.MInput = MInput

interface ButtonProps extends BaseProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type: 'submit' | 'button' | 'reset'
}

export const MButton = ({ children, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button
      type={type}
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

