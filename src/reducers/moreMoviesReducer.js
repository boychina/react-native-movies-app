'use strict';

import * as types from '../constants/moreMoviesTypes';

const initialState = {
  moreMovies: {},
}

export default function movies(state = initialState, action) {
  switch (action.type) {
    case types.GET_MORE_MOVIES:
      return {
        ...state,
        moreMovies: action.inTheaters,
      }
    default:
      return state;
  }
}