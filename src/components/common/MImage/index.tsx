import { Icon } from '@iconify/react'
import { useState } from 'react'

interface ImageProps {
  src: string
  alt: string
  width?: string
}

function MImage({ src, alt, width }: ImageProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const onLoad = () => {
    setLoading(false)
    setError(false)
  }

  const onError = () => {
    setError(true)
    setLoading(false)
  }

  return (
    <>
      {error && <Icon
        icon="ic:outline-error-outline"
        width='30'
        className='text-gray-500'
      />}
      {loading && <Icon
        icon={'eos-icons:bubble-loading'}
        width='30'
        className='text-gray-500'
      />}
      {!error && <img
        width={width}
        src={src}
        alt={alt}
        onLoad={onLoad}
        onError={onError}
      />}
    </>
  )
}

export default MImage
