import { Icon } from '@iconify/react'
import type { ChangeEvent, FormEvent } from 'react'

interface FormProps {
  children: React.ReactNode
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  className?: string
}

interface InputProps {
  type: 'text'
  placeholder: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  clearable?: boolean
}

export const MForm = ({ onSubmit, children }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className='lt-sm:text-center sm:text-left'>
      {children}
    </form>
  )
}

export const MInput = ({ onChange, value, type, placeholder, clearable = false }: InputProps) => {
  return (
    <div
      className='inline-block relative'
      w='lt-sm:55% lt-md:60% md:80'
    >
      <input
        border='1 solid primary rounded-lg rounded-lg'
        outline='2 solid transparent focus:primary'
        text='#333 lt-sm:base sm:lg'
        p='l-2 r-[30px] y-1'
        className='w-[100%] ease-out duration-500 leading-3'
        placeholder={placeholder}
        value={value}
        onChange={e => onChange!(e)} type={type}
      />
      {clearable
        && <div
          className='absolute top-0 right-[6px] h-[100%] flex-center cursor-pointer'
          style={{
            display: value ? 'flex' : 'none'
          }}
          onClick={() => onChange!({ currentTarget: { value: '' } } as ChangeEvent<HTMLInputElement>)}
        >
          <Icon icon="mdi:clear-circle-outline" className='gray-400' color='#7bc2c0' height='25px' />
        </div>
      }

    </div>
  )
}

MForm.MInput = MInput
