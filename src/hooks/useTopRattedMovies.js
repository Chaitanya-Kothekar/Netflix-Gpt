import { useDispatch } from "react-redux";
import {  addTopRattedMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../components/constants";


const useTopRattedMovies =()=>{

const dispatch = useDispatch();
  const getPopularMovies = async () =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRattedMovies(json.results));
  };

  useEffect(()=>{
    getPopularMovies();
  },[])
}

  export default useTopRattedMovies;