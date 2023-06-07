import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from '../axios/axios';

const Row = ({ title, fetchUrl, islargeRow = false }) => {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }

        fetchData()
    }, [fetchUrl])


    // console.log(movies);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row_posters">

                {
                    movies.map((movie) => {
                        if ((islargeRow && movie.poster_path) ||
                            (!islargeRow && movie.backdrop_path)) {
                                return <img loading='lazy' key={movie.id} className={`row_poster ${islargeRow && "row_posterLarge"}`} src={`${base_url}${islargeRow ? movie.poster_path : movie.backdrop_path
                                    }`} alt={movie.name} />
                        }

                    })
                }
            </div>
        </div>
    )
}

export default Row
