import axios from 'axios';
import { IS_ERROR, IS_LOADING, IS_SUCCESS } from './types';

export const getPosts = () => async dispatch => {
  dispatch({ type: IS_LOADING });
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({ type: IS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: IS_ERROR, payload: error.message });
  }
};
