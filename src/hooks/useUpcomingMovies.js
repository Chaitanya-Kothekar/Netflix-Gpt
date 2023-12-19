import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../components/constants";


const useUpcomingMovies =()=>{

const dispatch = useDispatch();
const nowUpcomingMovies= useSelector((store)=> store.movies.nowUpcomingMovies);

  const getUpcomingMovies = async () =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(()=>{
    !nowUpcomingMovies && getUpcomingMovies();
  },[])
}

  export default useUpcomingMovies;