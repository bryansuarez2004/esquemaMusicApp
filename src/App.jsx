import { useEffect, useState } from 'react'
import './App.css'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
  
  import { Tranquiluxe } from "uvcanvas"
import axios from 'axios';
import Track from './components/Track';

function App() {
  const [modeMusic, setModeMusic] = useState(false)
   const [tracks, setTracks] = useState([])

  const handleModeMusic = ()=>{
       setModeMusic(!modeMusic)
  }

  const traks = {
    one : 'https://p.scdn.co/mp3-preview/c0d9119dc69cae75baf6463e21e43f433fdf5ff4?cid=76728c380d7c4a60b2d346094b79fccd',
    second : 'https://p.scdn.co/mp3-preview/cb283ce76eeee06a724b942d36a140cc088dd50f?cid=76728c380d7c4a60b2d346094b79fccd'
  }
  

  useEffect(()=>{
   axios.get('http://localhost:8080/tracks')
   .then(({data})=>setTracks(data))
   .catch((err)=>console.log(err))
  },[])

  return (
    <>
    <div className='bg-black'>
    <div className={`${modeMusic?'w-[75%]':'w-screen'} bg-red-900 flex min-h-screen transition-all duration-700  p-5 gap-5 `}>
       <div className=' flex  w-full *:grow '>
         <div className='bg-slate-400 max-w-[270px] *:p-1 flex flex-col'>
            <div className='bg-red-400'>Home</div>
            <div className='bg-red-950 grow'>Playlists</div>

            <div className='bg-red-900 grow'>Favourite tracks </div>
         </div>
         <div className='bg-gray-600 grid grid-rows-[10%,90%] '>
 <button onClick={handleModeMusic} className='bg-sky-400'>abrir</button>
  <div className='bg-yellow-500 flex  flex-col items-center'>
    {tracks.map((track)=>{
      return <Track key={track.id} track={track}/>
    })}
  </div>

         </div>
       </div>
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
