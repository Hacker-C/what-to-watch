import MTip from '@/components/common/MTip'
import MediaCard from '@/components/home/MediaCard'
import { useLoad, useMedias } from '@/context'

function MediaList() {
  const { medias } = useMedias()
  const { loadStatus } = useLoad()
  // TODO 缓存组件，防止重复渲染影响性能
  return (
    <>
      <div>
        {
          medias.length === 0
            ? loadStatus === 'success'
              ? <div className='text-center mt-5'>
                  <MTip type={'warn'}>未查询到数据</MTip>
                </div>
              : loadStatus === 'error'
                ? <div className='text-center mt-5'>
                      <MTip type={'danger'}>网络错误，请尝试切换代理</MTip>
                    </div>
                : <></>
            : medias?.map((media) => {
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
