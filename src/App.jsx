import { useState } from 'react'
import './App.css'
  import { Zenitho } from "uvcanvas"
  import { Novatrix } from "uvcanvas"
  import { Velustro } from "uvcanvas"
  import { Lumiflex } from "uvcanvas"
  import { Tranquiluxe } from "uvcanvas"
  import { Opulento } from "uvcanvas"

function App() {
  const [modeMusic, setModeMusic] = useState(false)
  const handleModeMusic = ()=>{
       setModeMusic(!modeMusic)
  }
  

  return (
    <>
    <div className='bg-black'>
    <div className={`${modeMusic?'w-[80%]':'w-screen'} bg-red-900 min-h-screen transition-all duration-700 `}>
        <button onClick={handleModeMusic}  className='ml-[600px]'>abrir</button>
        <div className='bg-green-500 w-[90%]'>contenido</div>
        <div className='bg-green-500 w-[90%]'>contenido</div>
        <div className='bg-green-500 w-[90%]'>contenido</div>
        <div className='bg-green-500 w-[90%]'>contenido</div>
        <div className='bg-green-500 w-[90%]'>contenido</div>
    </div>
    <div className={`${modeMusic?'translate-x-[0%]':'translate-x-[100%]'} fixed right-0 top-0 w-[20%] bg-red-400
     min-h-screen transition-all duration-700 `}>

    </div>
    </div>
    </>
  )
}

export default App
