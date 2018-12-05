"use strict";

import axios from 'axios';
import * as types from "../constants/moviesTypes";

export function getInTheaters() {
  return dispatch => {
    axios.get('http://api.douban.com/v2/movie/in_theaters?count=8')
      .then(res => {
        dispatch(
          setState(res.data)
        );
      })
      .catch(e => {
        console.log(e);
      })
  };
}

function setState(res) {
  return {
    type: types.GET_IN_THEATERS,
    inTheaters: res
  };
}
