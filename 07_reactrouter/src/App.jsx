import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './component/Header/Header'
import Footer from './component/Foooter/footer'
import Home from './component/Home/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Footer/>
    <Header/>
    </>

  )
}

export default App
