import MediaList from '@/components/MediaList'
import SearchPanel from '@/components/SearchPanel'
import { Container } from '@/components/Contaniner'

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
