interface CreateHeaderProps {
  info: {
    title: string
    description?: string
    author?: string
  }
}

const CreateHeader = ({ info }: CreateHeaderProps) => {
  if (!info.description) {
    info.description = `世界上有两种人，没看过 ${info.title} 的和看过 ${info.title} 的。`
  }
  return (
    <div className='w-[320px] font-sans'>
      <h1 font='bold title' text='2xl'>《{info.title}》</h1>
      <p className='font-italic pl-3 text-base py-1'>“{info.description}”</p>
      { info?.author
        && <p className="font-italic text-right text-base">——{info.author}</p>
      }
    </div>
  )
}

export default CreateHeader
