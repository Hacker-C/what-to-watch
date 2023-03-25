import MediaCard from '@/components/home/MediaCard'
import { useMedias } from '@/context'

function MediaList() {
  const { medias } = useMedias()
  // TODO 缓存组件，防止重复渲染影响性能
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
