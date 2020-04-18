import axios from 'axios';
import { GET_POPULAR, CHANGE_MEDIA_TYPE, GET_BY_GENRE } from './types';

const base = 'https://api.themoviedb.org/3';
const key = '6521b98734f61e4d1ef2d62365896a88';
const config = {
  headers: {
    Accept: 'application/json',
  },
};

/**
 *
 * @param {String:movie,tv} mediaType
 * @description Instead of having two functions, one to get the movies and another to get the
 * tv show, we'll use one for both of them with the default mediaType set in the global app state
 * so when a user wants to see movies, the state stays to movies and when the user is only
 * interested in tv shows, he'll only receive tv shows
 *
 */
export const getPopular = (mediaType, pageNumber = 1) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${base}/${mediaType}/popular?api_key=${key}&page=${pageNumber}`
    );
    const total_pages = res.data.total_pages;
    const dataList = res.data.results;
    dispatch({
      type: GET_POPULAR,
      payload: dataList,
      mediaType,
      pageNumber,
      total_pages,
    });
  } catch (err) {
    console.log(err);
  }
};
export const getByGenre = (genreID, mediaType, pageNumber = 1) => async (
  dispatch
) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${key}&with_genres=${genreID}&page=${pageNumber}`,
      config
    );
    const total_pages = res.data.total_pages;
    const dataList = res.data.results;
    dispatch({
      type: GET_BY_GENRE,
      payload: dataList,
      mediaType,
      genreID,
      pageNumber,
      total_pages,
    });
  } catch (err) {
    console.log(err);
  }
};
export const changeMediaType = (mediaType) => async (dispatch) => {
  try {
    dispatch({
      type: CHANGE_MEDIA_TYPE,
      payload: mediaType,
    });
  } catch (err) {
    console.log(err);
  }
};
