import MTip from '@/components/common/MTip'
import MediaList from '@/components/home/MediaList'
import SearchPanel from '@/components/home/SearchPanel'
import { Container } from '@/components/home/styles/Contaniner'

function Home() {
  return (
    <Container>
      <Container.Header>
        What to watch today ...?
      </Container.Header>
      <div className='sticky top-1 z-100'>
        <SearchPanel></SearchPanel>
      </div>
      <div className='lt-sm:text-center sm:text-left mt-1'>
        <MTip type='info'>点击即可添加到列表中，稍有延迟~</MTip>
      </div>
      <MediaList></MediaList>
    </Container>
  )
}

export default Home
