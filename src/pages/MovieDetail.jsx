import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseImgUrl, options } from '../utils/contants';
import Loading from '../components/Loading';
import Badges from '../components/Badges';

const MovieDetail = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`/movie/${movieId}`, options)
      .then((res) => setMovie(res.data));
  }, [movieId]);
  console.log(movie);


  return (
    <div className='row p-4'>
      {!movie ? <Loading /> :
        < >
          <div className='col-md-4 position-relative mb-5'>
            <img style={{ height: "500px" }} src={baseImgUrl.concat(movie.backdrop_path
            )} alt="" className='rounded shadow w-100' />
            <p style= {{right:"30px"}}className='position-absolute bg-warning rounded p-1 shadow bottom-0 fs-5'>{movie.vote_average.toFixed(1)}</p>
          </div>

          <div className='col-md-8'>
            <h1>{movie.original_title
            }</h1>
            <p>{movie.overview
            }</p>
            <div className='row'>
              <div>
                <Badges title="Kategoriler" list={movie.genres} color="bg-primary"/>
                <Badges title="Diller" list={movie.spoken_languages} color="bg-danger"/>
                <Badges title="Yapımcı Şirketler" list={movie.production_companies } color="bg-success"/>
              </div>
              <span>Maliyet: {movie.budget}</span>
              <span>Hasılat: {movie.revenue }</span>
            </div>

          </div>
        </>

      }
    </div>
  )
}

export default MovieDetail
