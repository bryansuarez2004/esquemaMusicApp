import axios from "axios"
import { useEffect, useState } from "react"
import Track from "./Track"

const Favorite = () => {
   const [favouriteTracks, setFavouriteTracks] = useState([])


   useEffect(()=>{
   axios.get('http://localhost:8080/users/1')
   .then(({data})=>setFavouriteTracks(data.tracks))
   .catch((err)=>console.log(err))
   },[])

  return (
    <>  
    <div className="bg-sky-400">Favorite</div>
    {favouriteTracks.map((favouriteTrack)=>{
        return <Track key={favouriteTrack.id} track={favouriteTrack} close setFavouriteTracks={setFavouriteTracks}/>
    })}
    </>
  )
}
export default Favorite