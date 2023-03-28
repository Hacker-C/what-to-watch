import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import MCard from '@/components/home/styles/MCard'
import type { Media } from '@/interfaces'
import { useList, useMedias } from '@/context'
import { getBase64Image } from '@/utils'

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
  const addToList = async () => {
    if (!selected) {
      const resolveImage: Promise<string> = new Promise((resolve, reject) => {
        const image = new Image()
        image.crossOrigin = 'anonymous'
        image.addEventListener('load', () => {
          resolve(getBase64Image(image))
        })
        image.addEventListener('error', (e) => {
          reject(e)
        })
        image.src = `${media.poster}?v=${Math.random()}`
      })
      // TIP: UI 更新提前，避免格式转换延迟 UI 更新
      updateMedias({
        type: 'select',
        payload: media.id
      })
      // TIP 每添加一个到制作列表中，就转化为 base64 格式，解决卡顿，性能优化
      const posterBase64 = await resolveImage
      updateList({
        type: 'add',
        payload: { ...media, poster: posterBase64 }
      })
    } else {
      updateList({
        type: 'remove',
        payload: media.id
      })
      updateMedias({
        type: 'deselected',
        payload: media.id
      })
    }
  }
  return <MCard media={media} key={media.id} onClick={addToList} style={style} />
}

export default MediaCard

