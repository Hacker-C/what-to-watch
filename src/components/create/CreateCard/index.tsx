import type { Media } from '@/interfaces'
import { formatDate } from '@/utils'

const CreateCard = ({ media }: { media: Media }) => {
  const { name, poster, originalName, date, episodeCount } = media
  return (
    <div border='1 solid gray-300' className='mt-2 rounded-md'>
      <header border='b-1 solid gray-300' p='5'>
        <hgroup>
          <h1 font='bold title' text='base' className=''>{name}</h1>
          <h2 text='sm gray-400'>{originalName}</h2>
        </hgroup>
      </header>
      <div className='flex py-4'>
        <div m='x-4' border='2 gray-400'>
          <img src={poster} alt={name} width='90px' />
        </div>
        <div font='sans' text='base gray-700' p='t-2'>
          {date && <div>{date.slice(0, 4)}年</div>}
          {<span>{episodeCount || '1'}集</span>}
          {date && <span> / {formatDate(date)}</span>}
        </div>
      </div>
    </div>
  )
}

export default CreateCard
