import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import MCard from '@/components/home/styles/MCard'
import type { Media } from '@/interfaces'
import { useMedias } from '@/context'

function MediaCard({ media }: { media: Media }) {
  const { updateMedias } = useMedias()
  const { selected } = media

  const borderStyle: CSSProperties = {
    borderColor: '#67c23a',
    outline: '2px solid #67c23a',
    backgroundColor: '#edfcf3'
  }
  const [style, setStyle] = useState<CSSProperties>(() => selected ? borderStyle : {})
  // TIP: 每次全局 medias state 变化，则触发 rerender，判断是否被选中
  useEffect(() => {
    setStyle(selected ? borderStyle : {})
  }, [selected])
  const addToList = () => {
    if (!selected) {
      updateMedias({
        type: 'remove',
        payload: media
      })
    } else {
      updateMedias({
        type: 'remove',
        payload: media
      })
    }
  }
  return <MCard media={media} key={media.id} onClick={addToList} style={style} />
}

export default MediaCard
