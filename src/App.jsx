import { useState } from 'react'
import './App.css'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
  
  import { Tranquiluxe } from "uvcanvas"
import Users from './components/Users';

function App() {
  const [modeMusic, setModeMusic] = useState(false)
  const handleModeMusic = ()=>{
       setModeMusic(!modeMusic)
  }

  const traks = {
    one : 'https://p.scdn.co/mp3-preview/c0d9119dc69cae75baf6463e21e43f433fdf5ff4?cid=76728c380d7c4a60b2d346094b79fccd',
    second : 'https://p.scdn.co/mp3-preview/cb283ce76eeee06a724b942d36a140cc088dd50f?cid=76728c380d7c4a60b2d346094b79fccd'
  }
  

  return (
    <>
    <div className='bg-black'>
    <div className={`${modeMusic?'w-[75%]':'w-screen'} bg-red-900 min-h-screen transition-all duration-700 flex flex-col p-5 gap-5 `}>
        <button onClick={handleModeMusic}  className='ml-[600px]'>abrir</button>
        
    <Users /> 
       
    </div>
    <div className={`${modeMusic?'translate-x-[0%]':'translate-x-[100%]'} fixed right-0 top-0 w-[25%] bg-red-400
     min-h-screen transition-all duration-700 `}>
       <  div className='w-[95%] mx-auto mt-2 h-[300px] bg-slate-300'>
          <Tranquiluxe/>
       </div>
       <AudioPlayer 
    src={traks.one}
    className='bg-slate-500 '
    showJumpControls={false}
    
    // other props here
  />
    </div>
    </div>
    </>
  )
}

export default App
