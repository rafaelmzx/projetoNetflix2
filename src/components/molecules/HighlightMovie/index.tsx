import React from "react"
import MovieInterface, { SimpleMovieInterface } from '../../../models/interfaces/Movie'
import { useNavigate } from 'react-router-dom'
import Title from '../../atoms/Title'
import { BsFillPlayFill } from "react-icons/bs"
import Button from "../../atoms/Button"


interface HighlightMovieInterface {
  movie: MovieInterface
}

function HighlightMovie({ movie }: HighlightMovieInterface) {
  const navigate = useNavigate()


  function sendToMovie(id: number) {
    navigate('/filme/' + id)
  }


  return (
    <>

      <div style={{
        backgroundImage: `url(${movie.backdrop_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '85vh',
        zIndex: '1',
      }}>
        <div style={{
          background: 'linear-gradient(to top, #0f0f0f 1%, transparent 60%',
          height: 'inherit',
        }}>
          <div style={{
            backgroundImage: 'linear-gradient(to right, #0f0f0f 1%, transparent 40%',
            height: 'inherit',
          }}>
            <div style={{
              position: 'absolute',
              top: '300px',
              left: '76px'
              
            }}>
          <Title>{movie.title}</Title>
          <br/>
          <p className="texto-banner">{movie.overview}</p>
          <br />
          <Button className="botao-banner" onClick={() => sendToMovie(movie.id)} 
          ><BsFillPlayFill size={40}/>Assistir</Button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default HighlightMovie