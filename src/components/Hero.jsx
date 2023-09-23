import React from 'react'
import Loading from './Loading'
import { useSelector } from 'react-redux';
import { baseImgUrl } from '../utils/contants';

const Hero = () => {
  const state = useSelector((store) => store.mainReducer);



  const index = Math.floor(Math.random() * state.popularMovies.length);

  const movie = state.popularMovies[index];

 

  return (
    <div className='row p-3'>
      {state.isLoading ? <Loading /> :
        <>
          <div className="col-md-6 mb-4 d-flex flex-column justify-content-center gap-2">
            <h1>{movie.original_title}</h1>
            <p>{movie.overview}</p>
            <span className='text-warning fs-1'>IMPD:{movie.vote_average}</span>
            <div className='d-flex gap-3 '>
              <button className='btn bg-danger'>Film izle</button>
              <button className='btn bg-info'>Film detay</button>
            </div>

          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <img src={baseImgUrl.concat(movie.backdrop_path)} className='img-fluid rounded-3' alt="" />
            </div>
        </>

      }
    </div>
  )
}

export default Hero
