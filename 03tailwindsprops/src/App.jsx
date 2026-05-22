import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
//important thing we always write jsx in vite
  return (
    <>
     <h1 className='bg-blue-500 text-white p-4'>tailwind test</h1> // it is only for checking
     <Card username="John Doe" />
    </>
  )
}

export default App
