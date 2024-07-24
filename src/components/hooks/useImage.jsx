import { useEffect, useState } from 'react'

export function useImage ({ fact }) {
  const [imageURL, setImageURL] = useState('')

  useEffect(() => {
    if (!fact) return

    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        const { url } = data[0]
        setImageURL(url)
      })
  }, [fact])

  return { imageURL }
}
