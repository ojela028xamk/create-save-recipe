import { useEffect } from 'react'

const App = (): React.JSX => {
  useEffect(() => {
    console.log('FUN')
  }, [])

  return <h2>App</h2>
}

export default App
