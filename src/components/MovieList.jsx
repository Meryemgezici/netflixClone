import axios from "axios";
import { useEffect, useState } from "react";
import { baseImgUrl, options } from "../utils/contants";
import Loading from "./Loading";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {

    const [movieList, setMovieList] = useState(null);

    useEffect(() => {
        axios.get(`/discover/movie?include_adult=false&include_video=false&language=tr&page=1&sort_by=popularity.desc&with_genres=${genre.id}`, options)
            .then((res) => setMovieList(res.data.results))
    }, [])
    //    console.log(movieList);
    return (
        <div className="p-3 ">
            <h1 className="mb-2 fs-3">{genre.name}</h1>


            {!movieList ? <Loading /> :
                <Splide
                    options={{
                        autoWidth: true,
                        gap: "10px",
                        pagination: false,


                    }}
                >
                    {
                        movieList.map((movie) =>
                            <SplideSlide key={movie.id} >
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={baseImgUrl.concat(movie.backdrop_path)} alt="" className="movie " />
                                </Link>
                            </SplideSlide>
                        )
                    }
                </Splide>
            }


        </div>
    )
}

export default MovieList
