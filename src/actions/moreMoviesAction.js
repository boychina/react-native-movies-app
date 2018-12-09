"use strict";

import axios from 'axios';
import * as types from "../constants/moreMoviesTypes";

export function getMoreMovies(moreType) {
  console.log('>>>>><<<<<<', moreType);
  return dispatch => {
    axios.get(`http://api.douban.com/v2/movie/${moreType}?count=100&city=成都`)
      .then(res => {
        dispatch(
          setState({
            type: types.GET_MORE_MOVIES,
            moreMovies: res.data
          })
        );
      })
      .catch(e => {
        console.log(e);
      })
  };
}

function setState(result) {
  return {
    ...result
  };
}
