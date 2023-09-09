import CreateCard from '../CreateCard'
import { useList } from '@/context'
import Loading from '@/components/common/Loading'

function CreateList() {
  const { list } = useList()
  /**
   * TODO BUG：list 为空是判断没有选数据还是数据还在处理中
   * 目前是判断为没有选数据，待解决
   */
  return (
    <div font='global' p='b-5'>
      {
        list.length === 0
          ? <Loading />
          : list.map(media => (<CreateCard media={media} key={media.id} />))
      }
    </div>
  )
}

export default CreateList

