import React,{useEffect, useState} from "react";
import axios from "./axios";
import "./Row.css";
import MovieContent from './MovieContent';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    p: 4,
  };
  

function Row({title,fetchUrl,isLargeRow=false}){
    const [movies,setMovies] = useState([]);
    const [curr, setCurr] = useState([]);
    const [omdbdata,setomdbdata] = useState([]);
    const [imdbid,setImdbid] = useState([]);
    const [imdbdata,setImdbdata] = useState([]);
    var selectMovie = null;
    const base_url ="https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])

    useEffect(()=>{
        async function fetchomdbData(){
            await axios(`https://www.omdbapi.com/?apikey=31a6e817&t=${curr.original_name || curr.name || curr.title}`)
            .then((res)=>{setomdbdata(res.data)});
            setImdbid(omdbdata.imdbID)
            console.log(omdbdata)
            console.log(imdbid)
        }
        fetchomdbData();
    },[curr.original_name || curr.name || curr.title])

    useEffect(()=>{
        async function fetchimdbData(){
            await axios(`https://imdb-api.com/en/API/Ratings/k_lxiu84oz/${imdbid}`)
            .then((res)=>{setImdbdata(res.data)});
            console.log(imdbdata)
            // console.log(1)
        }
        fetchimdbData();
    },[imdbid])
   

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

    return (
        (selectMovie!=null)?(<MovieContent movieId={selectMovie}/>):
        (<div className="row" >

        

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style} className="modal_box">
               {/* {console.log(curr)} */}
            <img src={`https://image.tmdb.org/t/p/original/${curr.backdrop_path}`} />
            <h1>{curr.original_name || curr.name || curr.title}</h1>
            <p>{curr.overview}</p>
            <div>Release Date: {curr.release_date}</div>
            <div>Awards: {omdbdata.Awards}</div>
            <div>TMDB ratings: {curr.vote_average}</div>
            <div>IMDB ratings: {omdbdata.imdbRating}</div>
            <div>Metacritic ratings: {(imdbdata.metacritic!=" ")?imdbdata.metacritic:"NA"}</div>
            {/* <div>OMDB ratings: {imdbdata.Ratings.Value}</div> */}
            </Box>
            </Modal>

          <h2>{title}</h2>
          <div className="row__posters">
          {movies.map((movie)=>(
            <img 
            onClick={(e)=>{
                e.preventDefault();
                handleOpen();
                setCurr(movie);
                // setmoviename(curr.original_name || curr.name || curr.title);
            }}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${base_url}${
                isLargeRow? movie.poster_path : movie.backdrop_path
            }`} alt={movie.name}/>
          ))}
          </div>
          
        </div>)
    );
}

export default Row;