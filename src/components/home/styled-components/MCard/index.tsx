import type { CSSProperties } from 'react'
import type { Media } from '@/interfaces'
import { formatDate } from '@/utils'
import './index.css'
import MImage from '@/components/common/MImage'

interface MCardProps {
  media: Media
  onClick?: () => void
  style?: CSSProperties
}

function MCard({ media, onClick, style }: MCardProps) {
  const { name, poster, overview, date, type, originalName } = media
  return (
    <>
      <div
        m='lt-sm:y[15px] sm:y-[20px]'
        h='xl:210px lg:195px 180px'
        border='1px solid gray-400 rounded-lg'
        className='flex overflow-hidden cursor-pointer'
        onClick={onClick}
        style={style}
      >
        <div
          w='xl:140px lg:130px 120px'
          border='1 solid primary'
          className='relative flex-center'
        >
        <MImage src={poster} alt={name} />
        </div>
        <div className='h-100% px-5 py-2 flex-1 overflow-hidden'>
          <div className='flex items-center flex-wrap relative'>
            <h2
              text='black lg:xl md:lg base'
              className='font-bold pr-2'
            >
              {name}
            </h2>
            <div className='absolute -right-4 -top-1'>
              <div
                text='sm lg:lg primary center'
                border='1 solid primary'
                className='px-2 rounded-md'
              >
                {type}
              </div>
            </div>
          </div>
          <h2>{originalName || ''}</h2>
          <span className='lg:text-base text-sm text-[#777]'>
            {date ? formatDate(date) : 'unkown'}
          </span>
          {/* TODO 当 width < 320px，隐藏 overview */}
          <div className='over-line xl:h-[115px] lg:h-[110px] h-[100px]'>
            <p text='lg:lg base #292929'>{overview || 'unkown time'}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MCard
