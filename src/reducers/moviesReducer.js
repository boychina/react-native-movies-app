'use strict';

import * as types from '../constants/moviesTypes';

const initialState = {
  inTheaters: {},
}

export default function movies(state = initialState, action) {
  switch (action.type) {
    case types.GET_IN_THEATERS:
      return {
        ...state,
        inTheaters: action.inTheaters,
      }
      break;
    default:
      return state;
  }
}