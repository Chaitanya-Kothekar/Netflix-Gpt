import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRattedMovies } from "../utils/moviesSlice";
const useTopRattedMovies =()=>{

  const dispatch = useDispatch();
  const nowTopRattedMovies= useSelector((store)=> store.movies.nowTopRattedMovies);
  
    const getPopularMovies = async () =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRattedMovies(json.results));
    };
  
    useEffect(()=>{
      !nowTopRattedMovies && getPopularMovies();
    },[])
  }
  
    export default useTopRattedMovies;
