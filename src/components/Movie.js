import React from "react";
import propTypes from 'prop-types';
import './Movie.css'
import { Link } from 'react-router-dom';


function Movie(props){
  return (
    <div className="movie">
      <Link to='/movie-detail'>
        <img src={ props.poster } alt={ props.title } title={ props.title } />
        <div className="movie__data">
          <h3 className="movie__title">{ props.title }</h3>
          <h5 className="movie__year">{ props.year }</h5>
          <ul className="movie__genres">{ props.genres.map((genre, index) => {
            return <li key={ index } className="movie__genre">{ genre }</li>
          }) }</ul>
          <p className="movie__summary">{ props.summary }...</p>
        </div>
      </Link>
      
    </div>
    

    
  );
}

Movie.propTypes = { 
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  // medium_cover_image 키값에 영화 포스터 이미지 저장.
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;