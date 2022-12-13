import React,{useState} from 'react';
import './HomeScreen.css';
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Requests';
import Row from '../Row';

function HomeScreen() {
  const [search,setSearch] = useState([]);
  return (
    <div className='homeScreen'>
      <Nav/>
      <Banner/>
      <div className='search'>
        <input placeholder= "Enter Movie"/>
        <button onClick={(e)=>{e.preventDefault();
        setSearch(document.querySelector('input').value)}}>Search</button>
        {console.log(search)}
      </div>
      ({search}?
      (<Row title="" fetchUrl={`https://api.themoviedb.org/3/search/movie?api_key=67d34b7a693a655d5cf9cb187756ffa6&language=en-US&query=${search}&page=1&include_adult=false`} isLargeRow />):
      (
      <Row 
      title="Netflix Originals"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
     />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
     <Row title="Documentries" fetchUrl={requests.fetchDocumentries} isLargeRow/>
      )
      )
      
    </div>
  );
}

export default HomeScreen; 