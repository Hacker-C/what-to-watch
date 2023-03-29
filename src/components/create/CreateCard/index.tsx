import { Icon } from '@iconify/react'
import type { Media } from '@/interfaces'
import { formatDate } from '@/utils'
import { useList, useMedias } from '@/context'
import MImage from '@/components/common/MImage'

const CreateCard = ({ media }: { media: Media }) => {
  const { id, name, poster, originalName, date, episodeCount } = media
  const { updateList } = useList()
  const { updateMedias } = useMedias()
  return (
    <div border='1 solid gray-300' className='mt-2 rounded-md'>
      <header border='b-1 solid gray-300' p='5' className='relative'>
        <hgroup>
          <h1 font='bold title' text='base' className=''>{name}</h1>
          <h2 text='sm gray-400'>{originalName}</h2>
        </hgroup>
        <Icon
          icon={'ph:x-square-light'}
          className='absolute top-1 right-1 text-gray-400 cursor-pointer'
          width={'22'}
          id='no-convert'
          onClick={() => {
            updateList({
              type: 'remove',
              payload: id
            })
            updateMedias({
              type: 'deselected',
              payload: id
            })
          }}
        />
      </header>
      <div className='flex py-4'>
        <div m='x-4' border='1 gray-500'>
          <MImage src={poster} alt={name} width='90px' />
        </div>
        <div font='sans' text='sm gray-700' p='t-2'>
          {date && <div>{date.slice(0, 4)}年</div>}
          {<span>{episodeCount || '1'}集</span>}
          {date && <span> / {formatDate(date)}</span>}
        </div>
      </div>
    </div>
  )
}

export default CreateCard
