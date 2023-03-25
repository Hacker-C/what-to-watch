import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import MCard from '@/components/home/styles/MCard'
import type { Media } from '@/interfaces'
import { useList, useMedias } from '@/context'

function MediaCard({ media }: { media: Media }) {
  const { updateList } = useList()
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
      updateList({
        type: 'add',
        payload: media
      })
      updateMedias({
        type: 'select',
        payload: media
      })
    } else {
      updateList({
        type: 'remove',
        payload: media
      })
      updateMedias({
        type: 'deselected',
        payload: media
      })
    }
  }
  return <MCard media={media} key={media.id} onClick={addToList} style={style} />
}

export default MediaCard
