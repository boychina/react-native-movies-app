'use strict';

import * as types from '../constants/moviesTypes';

const initialState = {
  inTheaters: {},
  top250: {},
  comingSoon: {},
}

export default function movies(state = initialState, action: any) {
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
    case types.GET_COMING_SOON:
      return {
        ...state,
        comingSoon: action.comingSoon,
      }
    default:
      return state;
  }
}