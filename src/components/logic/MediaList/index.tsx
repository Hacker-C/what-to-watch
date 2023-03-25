import MediaCard from '@/components/logic/MediaCard'
import { useMedias } from '@/context'

function MediaList() {
  // TODO 缓存数据，进行优化，避免不必要的 rerender，或者编写 KeepAlive 组件缓存。
  const { medias } = useMedias()
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

export default MediaList
