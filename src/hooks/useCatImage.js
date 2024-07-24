import { useEffect, useState } from 'react'
import { getImage } from '../services/getImage'

export function useCatImage ({ fact }) {
  const [imageURL, setImageURL] = useState('')

  useEffect(() => {
    if (!fact) return

    getImage().then(url => setImageURL(url))
  }, [fact])

  return { imageURL }
}
