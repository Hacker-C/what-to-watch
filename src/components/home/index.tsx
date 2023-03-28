import Loading from './styles/Loading'
import MTip from '@/components/common/MTip'
import MediaList from '@/components/home/MediaList'
import SearchPanel from '@/components/home/SearchPanel'
import { Container } from '@/components/home/styles/Contaniner'
import { useLoad } from '@/context'

function Home() {
  const { loadStatus } = useLoad()
  return (
    <Container>
      <Container.Header>
        What to watch today ...?
        <div text='center' m='y-3'>
          <MTip type='info'>制作影视推荐清单，点击即可添加</MTip>
        </div>
      </Container.Header>
      <div className='sticky top-1 z-100'>
        <SearchPanel></SearchPanel>
      </div>
      { loadStatus === 'loading' ? <Loading /> : <MediaList /> }
    </Container>
  )
}

export default Home
