import { useEffect, useState } from 'react'
import { getFact } from './services/facts'
import { useCatImage } from './components/hooks/useCatImage'
import '../style.css'

export function App () {
  const [fact, setFact] = useState('')
  const { imageURL } = useCatImage({ fact })

  useEffect(() => {
    getFact().then(newFact => setFact(newFact))
  }, [])

  const handleClick = async () => {
    const newFact = await getFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt={`Image extracted from the api using the fact: ${fact}`} />}
    </main>
  )
}
