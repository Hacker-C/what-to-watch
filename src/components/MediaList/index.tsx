import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import MCard from '@/components/styles/MCard'
import type { Media } from '@/interfaces'
import { useMedias } from '@/context'

function MediaList() {
  // TODO 缓存数据，进行优化，避免不必要的 rerender，或者编写 KeepAlive 组件缓存。
  const { medias } = useMedias()!
  return (
    <>
      <div>
        {
          medias?.map((media) => {
            return (
              <MediaCard media={media} key={media.id} />
            )
          })
        }
      </div>
    </>
  )
}

function MediaCard({ media }: { media: Media }) {
  const { update } = useMedias()!
  const { selected } = media

  const borderStyle: CSSProperties = {
    borderColor: '#67c23a',
    outline: '4px solid #67c23a',
    backgroundColor: '#edfcf3'
  }
  const [style, setStyle] = useState<CSSProperties>(() => selected ? borderStyle : {})
  // TIP: 每次全局 medias state 变化，则触发 rerender，判断是否被选中
  useEffect(() => {
    setStyle(selected ? borderStyle : {})
  }, [selected])
  const addToList = () => {
    if (!selected) {
      update({
        type: 'remove',
        payload: media
      })
    } else {
      update({
        type: 'remove',
        payload: media
      })
    }
  }
  return <MCard media={media} key={media.id} onClick={addToList} style={style} />
}

export default MediaList
