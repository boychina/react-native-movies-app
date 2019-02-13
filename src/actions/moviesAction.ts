import axios from 'axios';
import * as types from "../constants/moviesTypes";

export function getInTheaters() {
  return (dispatch: any) => {
    axios.get('http://api.douban.com/v2/movie/in_theaters?count=8&city=成都')
      .then(res => {
        dispatch(
          setState({
            type: types.GET_IN_THEATERS,
            inTheaters: res.data
          })
        );
      })
      .catch(e => {
        console.log(e);
      })
  };
}

export function getTop250() {
  return (dispatch: any) => {
    axios.get('http://api.douban.com/v2/movie/top250?count=8')
      .then(res => {
        dispatch(
          setState({
            type: types.GET_TOP_250,
            top250: res.data
          })
        );
      })
      .catch(e => {
        console.log(e);
      })
  };
}

export function getComingSoon() {
  return (dispatch: any) => {
    axios.get('http://api.douban.com/v2/movie/coming_soon?count=8')
      .then(res => {
        dispatch(
          setState({
            type: types.GET_COMING_SOON,
            comingSoon: res.data
          })
        );
      })
      .catch(e => {
        console.log(e);
      })
  };
}

function setState(result: any) {
  return {
    ...result
  };
}
