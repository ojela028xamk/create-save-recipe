import { useEffect, JSX } from 'react'

const App = (): JSX.Element => {
  useEffect(() => {
    console.log('FUN')
  }, [])

  return <h2>App</h2>
}

export default App
