import { Link } from 'react-router-dom'
import { MButton } from '@/components/styles'
import { useMedias } from '@/context'

function Create() {
  const { medias } = useMedias()!
  const selectedMedias = medias.filter(m => m.selected)
  return (
    <div text='center' m='10' font='[Inter,sans-serif]'>
      <h1>Create</h1>
      <ul>
        {
          selectedMedias.map((m) => {
            return <li key={m.id}>{m.name}</li>
          })
        }
      </ul>
      <Link to='/'>
        <MButton type='button'>返回搜索</MButton>
      </Link>
    </div>
  )
}

export default Create
