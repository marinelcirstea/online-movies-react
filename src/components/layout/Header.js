import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Header extends Component {
  state = {
    categories: [],
  };
  static propTypes = {
    getMoviesByGenre: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    axios
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=6521b98734f61e4d1ef2d62365896a88&language=en-US',
        config
      )
      .then((res) => this.setState({ categories: res.data.genres }));
  }
  changeGenre = (e) => {
    e.preventDefault();
    this.props.getByGenre(e.target.value, this.props.mediaType);
  };

  handleMediaTypeChange = (e) => {
    this.props.changeMediaType(e.target.value);
    if (this.props.genre !== null && this.props.genre !== undefined) {
      this.props.getByGenre(this.props.genre, e.target.value);
    } else {
      this.props.getPopular(e.target.value);
    }
  };
  render() {
    return (
      <nav className="container px-3 py-3 flex flex-row space-between items-center">
        <div className="logo x-large">
          <Link to="/">ONLINE-MOVIES.COM</Link>
        </div>
        <select name="mediaType" id="" onChange={this.handleMediaTypeChange}>
          <option value="movie">Movies</option>
          <option value="tv">Series</option>
        </select>
        <div className="flex flex-row">
          <Link to="/" className="mx-2">
            Home
          </Link>
          <select
            name="genre"
            value=""
            onChange={this.changeGenre}
            className="flex flex-col"
          >
            <option value="">Select genre</option>
            {this.state.categories.map((cat) => (
              <option value={cat.id} key={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      </nav>
    );
  }
}

export default Header;
