import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from './Requests';

function Banner() {
  const [movie,setMovie] = useState([]);
  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random()*request.data.results.length-1)
        ]
      )
      return request;
    }
    fetchData()
  },[]);
  console.log(movie);
  async function truncate(string,n){
        return await string?.length>n?string.substr(0,n-1)+'. . .':string;
  }
  return (
    <header className="banner" style={{
        backgroundSize : "cover",
        backgroundImage : `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition : "center center",
        
    }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>MY List</button>
        </div>
        <h1 className='banner__descrition'>
            {/* {truncate(movie?.overview,150)} */}
            {movie?.overview}
        </h1>
      </div>
      <div className='banner--fadeBottom'/>
    </header>
  );
}

export default Banner;
// https://t3.ftcdn.net/jpg/03/56/37/38/240_F_356373830_Cg7aFeVcrxA5wP08m2pjYUfjuSItqNdt.jpg