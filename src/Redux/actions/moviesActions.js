import axios from "axios"
import { actionTypes } from "./actionTypes";
import { options } from "../../utils/contants";



axios.defaults.baseURL="https://api.themoviedb.org/3";


export const getMovies=()=>(dispatch)=>{
        axios.get(`/movie/popular`,options)
        .then((response)=>dispatch({
            type:actionTypes.SET_MOVIES,
            payload:response.data.results
        }));
}


export const getCategories=()=>(dispatch)=>{
    axios.get(`/genre/movie/list`,options)
    .then((res)=>dispatch({
        type:actionTypes.SET_CATEGORY,
        payload:res.data.genres
    }))
}