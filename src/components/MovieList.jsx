import { useSelector } from "react-redux";


const MovieList = () => {


    const state= useSelector((store)=>store.mainReducer);
    console.log(state);
   
  return (
    <div>
      
    </div>
  )
}

export default MovieList
