import React from 'react';
import { connect } from 'react-redux';
import {
  getPopular,
  getByGenre,
  changeMediaType,
} from '../../redux/actions/movieActions';
import { Header } from '../layout/Header';
import Pagination from '../layout/Pagination';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    props.getPopular(props.composedRequest.mediaType);
  }
  state = {
    movies: [],
  };
  render() {
    console.log(this.props);
    const { movies } = this.props;
    return (
      <>
        <Header
          //functions
          getByGenre={this.props.getByGenre}
          getPopular={this.props.getPopular}
          //props
          changeMediaType={this.props.changeMediaType}
          genre={this.props.composedRequest.genre}
          mediaType={this.props.composedRequest.mediaType}
          props={this.props}
        />
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title ? movie.title : movie.name}</li>
          ))}
        </ul>
        <Pagination total_pages={this.props.composedRequest.total_pages} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('movies:', state.movieReducer.movies);
  return {
    composedRequest: state.movieReducer.composedRequest,
    movies: state.movieReducer.movies,
    // mediaType: state.movieReducer.composedRequest.mediaType,
    // genre: state.movieReducer.composedRequest.genre,
    // pageNumber: state.movieReducer.composedRequest.pageNumber,
  };
};

export default connect(mapStateToProps, {
  getPopular,
  getByGenre,
  changeMediaType,
})(MovieList);
