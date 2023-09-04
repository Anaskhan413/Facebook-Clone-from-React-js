import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Sidee from './Components/Sidee'
import Posts from './Components/Posts'







function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>


<div className="facebookall">
  <Sidee/>
  <Posts/>
</div>




    </>
  )
}

export default App
