const Track = ({track}) => {    
  return (
    <>
   <div className="flex gap-5 bg-red-500 w-[70%] max-w-[400px]  justify-between ">
   <div>{track.name}</div>
    <button> dame LIKE</button>
   </div>
    </>
  )
}
export default Track