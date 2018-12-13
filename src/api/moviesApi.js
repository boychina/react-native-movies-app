import axios from 'axios';
import { APIBase } from './base';

const MoviesURI = {
  inTheaters: `${APIBase}/movie/in_theaters`,
}

export default {
  getInTheaters: () => {
    return axios.get(MoviesURI.inTheaters);
  }
}
