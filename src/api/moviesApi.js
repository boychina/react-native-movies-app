"use strict";
import axios from 'axios';
import { APIBase } from './base';
import * as types from "../constants/moviesTypes";

const MoviesURI = {
  inTheaters: `${APIBase}/movie/in_theaters`,
}

export default {
  getInTheaters: () => {
    return axios.get(MoviesURI.inTheaters);
  }
}
