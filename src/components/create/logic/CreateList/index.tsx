import { Link } from 'react-router-dom'
import { MButton } from '@/components/home/styles/MButton'
import { useMedias } from '@/context'

function CreateList() {
  const { medias } = useMedias()!
  const selectedMedias = medias.filter(m => m.selected)
  return (
    <div text='center' m='10' font='global'>
      <h1>Create</h1>
      <ul>
        {
          selectedMedias.map((m) => {
            return <li key={m.id}>{m.name}</li>
          })
        }
      </ul>
      <Link to='/'>
        <MButton htmlType='button'>返回搜索</MButton>
      </Link>
    </div>
  )
}

export default CreateList

