import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategories, getMovies } from "../Redux/actions/moviesActions"
import { mainReducer } from "../Redux/reducer/mainReducer"
import Loading from "../components/Loading"
import Hero from "../components/Hero"
import MovieList from "../components/MovieList"

const MainPage = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
      dispatch(getMovies());
      dispatch(getCategories())
  },[]);



  return (
    <div>
     <Hero/>
     <MovieList/>
    </div>
  )
}

export default MainPage
