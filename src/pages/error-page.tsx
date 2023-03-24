import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'

export default function ErrorPage() {
  const { pathname } = useLocation()
  return (
    <div className='text-center mt-20 font-sans'>
      <div className='flex-center'>
        <Icon icon='iconoir:emoji-sad' width='50' />
      </div>
      <h1 className='text-3xl font-bold'>Oooops!</h1>
      <div className='text-xl mt-10'>Sorry, there is something wrong...</div>
      <p m='t-10'>
        <i className='text-gray-500'>{`404 not found: ${pathname}`}</i>
      </p>
      <div className='mt-5'>
        <Link to="/">
          <button className='btn-primary'>
            Back
          </button>
        </Link>
      </div>
    </div>
  )
}
