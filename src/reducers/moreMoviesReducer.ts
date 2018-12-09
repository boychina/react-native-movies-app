'use strict';

import * as types from '../constants/moreMoviesTypes';

const initialState = {
  moreMovies: {},
}

export default function moreMovies(state = initialState, action: any) {
  switch (action.type) {
    case types.GET_MORE_MOVIES:
      return {
        ...state,
        moreMovies: action.moreMovies,
      }
    default:
      return state;
  }
}