import axios from "axios"

const Track = ({track, close=false , add=false, setFavouriteTracks,setTracks}) => {
    
    const handleSetFavouriteMusic = ()=>{
        axios.post('http://localhost:8080/users/1/setTracks',[track.id])
        .then(({data})=>{console.log(data)
            })
   .catch((err)=>console.log(err))
    }


    const handleRemoveFavouriteMusic = ()=>{
         axios.post('http://localhost:8080/users/1/removeTracks',[track.id])
        .then(({data})=>{console.log(data)
        setFavouriteTracks(data)}
        )
    .catch((err)=>console.log(err))
    }

  return (
    <>
   <div className="flex bg-red-500  max-w-[400px]  justify-between ">
   <div>{track.name}</div>
    {add && <button onClick={handleSetFavouriteMusic} className="bg-green-400"> dame LIKE</button>}
    {close && <button onClick={handleRemoveFavouriteMusic} className="bg-red-400"> X</button>}
   </div>
    </>
  )
}
export default Track