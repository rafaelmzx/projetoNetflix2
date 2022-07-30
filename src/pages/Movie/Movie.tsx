import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import * as ApiTmbService from '../../services/apiTmdb'
import MovieInterface from "../../models/interfaces/Movie";
import VideoFrame from "../../components/atoms/VideoFrame";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieInterface>()
  const [videoKey, setVideoKey] = useState<string>()

  const imgUrl = 'https://image.tmdb.org/t/p/w300'

  useEffect(() => {
    if (!id || movie) return
    ApiTmbService.getMovieDetails(+id)
      .then((response) => {
        setMovie(response)

        const video = response.videos && response.videos.results && response.videos.results[0]
        video && setVideoKey(video.key)
      })
  }, [id, movie])

  function getDateYear(releaseDate: string){
    const newDate = new Date(releaseDate)
    return newDate.getFullYear()
  }


  return <>
    <body style={{
      backgroundImage: 'url(https://raw.githubusercontent.com/Larissakich/netflix_login/main/Netflix%20Login/assets/img/background.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '99vh',
      width: '100%',
      zIndex: 1,
    }}>
      <div style={{
        background: 'linear-gradient(to top, #0f0f0f 1%, transparent 60%',
        height: 'inherit',
      }} >
        <div style={{
          background: 'linear-gradient(to bottom, #0f0f0f 1%, transparent 60%',
          height: 'inherit',
        }}>

          <div className="movie-container" style={{
            borderRadius: '5px',
            boxSizing: 'border-box',
            transform: 'translateX(53%)',
          }}>
            <div className="movie-content">


              <div className="video-frame">
                {videoKey && <VideoFrame width="800" height="500" videoKey={videoKey + ''} />}
              </div>

              <br />

              <div className="movie-titulo">
                <h1>{movie && movie.title}</h1>
                <h1 style={{
                  fontSize: '16px',
                  marginTop: '10px',
                  color: '#e50914'
                }}>{movie && getDateYear(movie.release_date)}</h1>
              </div>
              <br />
              <p>{movie && movie.overview}</p>

              {movie && movie.backdrop_path && (
                <img style={{
                  width: '20rem',
                  marginTop: '20px',
                  marginLeft: '30%'
                }} src={imgUrl + movie.backdrop_path} alt="" />
              )}


            </div>
          </div>
        </div>
      </div>
    </body>
  </>
}

export default Movie