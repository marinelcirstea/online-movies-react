import {
  GET_LATEST,
  GET_POPULAR,
  CHANGE_MEDIA_TYPE,
  GET_BY_GENRE,
} from '../actions/types';

const initialState = {
  movies: [],
  composedRequest: {
    mediaType: 'movie',
    genre: null,
    pageNumber: 1,
    total_pages: null,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_MEDIA_TYPE:
      return {
        ...state,
        composedRequest: {
          ...state.composedRequest.genre,
          mediaType: action.payload,
          ...state.composedRequest.pageNumber,
          ...state.composedRequest.total_pages,
        },
      };
    case GET_BY_GENRE:
      return {
        ...state,
        movies: action.payload,
        composedRequest: {
          mediaType: action.mediaType,
          genre: action.genreID,
          pageNumber: action.pageNumber,
          total_pages: action.total_pages,
        },
      };
    case GET_LATEST:
    case GET_POPULAR:
      return {
        ...state,
        movies: action.payload,
        composedRequest: {
          mediaType: action.mediaType,
          ...state.composedRequest.genre,
          pageNumber: action.pageNumber,
          total_pages: action.total_pages,
        },
      };
    default:
      return state;
  }
}
