import CreateCard from '../CreateCard'
import { useList } from '@/context'

function CreateList() {
  const { list } = useList()
  return (
    <div font='global' p='b-5'>
      {list.map(media => (<CreateCard media={media} key={media.id} />))}
    </div>
  )
}

export default CreateList

