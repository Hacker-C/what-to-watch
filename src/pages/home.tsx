import MediaList from '@/components/home/logic/MediaList'
import SearchPanel from '@/components/home/logic/SearchPanel'
import { Container } from '@/components/home/styles/Contaniner'

function Home() {
  return (
    <Container>
      <Container.Header>
        What to watch today
      </Container.Header>
      <div className=' sticky top-1 z-100'>
        <SearchPanel></SearchPanel>
      </div>
      <MediaList></MediaList>
    </Container>
  )
}

export default Home
