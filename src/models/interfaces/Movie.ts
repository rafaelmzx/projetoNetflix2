export default interface MovieInterface {
    overview: string
    backdrop_path: string | null
    poster_path: string | null
    title: string
    id: number
    release_date: string
    popularity: number
    videos?: {
      results: VideoInterface[]
    }
  
  }
  
  export interface VideoInterface {
    key: string
  }
  
  export interface SimpleMovieInterface {
    overview: string
    backdrop_path: string | null
    poster_path: string | null
    release_date: string
    popularity: number
    title: string
    id: number
  }