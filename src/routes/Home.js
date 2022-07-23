import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import './Home.css';


function Home(){
  const [isLoading, setIsLoading] = useState(true);
  // 처음에는 로딩 상태이므로 초기값은 true
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000)
    getMovies();
  }, [isLoading])
  
  // movies 키 접근 방법 1: 일반식
  // const getMovies = async () => {
  //   const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
  //   console.log(movies.data.data.movies);
  // }

  // movies 키 접근 방법 2: 구조 분해 할당
  const getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    setMoviesList(movies);
    setIsLoading(false);
    
  }
   
  return(
    <section className="container">
      <div>
        { isLoading ? <div className="loader"><span className="loader__text">loading...</span></div> : <div className="movies">{ moviesList.map(function(movie){
          return (<Movie
            key={ movie.id }
            id={ movie.id }
            year={ movie.year }
            title={ movie.title }
            summary={ movie.summary.slice(0, 180) }
            poster={ movie.medium_cover_image }
            rating={ movie.rating }
            genres={ movie.genres } />);
        }) }</div> }
      </div>
    </section>
  )
}

export default Home;
