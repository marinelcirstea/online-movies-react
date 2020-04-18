import React from 'react';
import { connect } from 'react-redux';
import { getPopular, getLatestMovies } from '../../redux/actions/movieActions';
import Header from './Header';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    // props.getLatestMovies();
    props.getPopular(props.composedRequest.mediaType);
  }
  state = {
    movies: [],
  };
  render() {
    const { movies } = this.props;
    return (
      <>
        <Header />
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}></li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('movies:', state.movieReducer.movies);
  return {
    composedRequest: state.movieReducer.composedRequest,
    movies: state.movieReducer.movies,
  };
};

export default connect(mapStateToProps, { getPopular, getLatestMovies })(
  Landing
);
