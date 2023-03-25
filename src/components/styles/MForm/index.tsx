import type { ChangeEventHandler, FormEvent } from 'react'

interface FormProps {
  children: React.ReactNode
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  className?: string
}

interface InputProps {
  type: 'text'
  placeholder: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const MForm = ({ onSubmit, children }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className='lt-sm:text-center sm:text-left'>
      {children}
    </form>
  )
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
