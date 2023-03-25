import MediaCard from '@/components/logic/MediaCard'
import { useMedias } from '@/context'

function MediaList() {
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
