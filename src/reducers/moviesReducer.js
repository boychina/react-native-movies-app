'use strict';

import * as types from '../constants/moviesTypes';

const initialState = {
  inTheaters: {},
  top250: {},
}

export default function movies(state = initialState, action) {
  switch (action.type) {
    case types.GET_IN_THEATERS:
      return {
        ...state,
        inTheaters: action.inTheaters,
      }
    case types.GET_TOP_250:
      return {
        ...state,
        top250: action.top250,
      }
    default:
      return state;
  }
}