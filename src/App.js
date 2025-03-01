import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AllMovie from './Components/AllMovie'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const[movie,setmovie]= useState([]);
  const getAllMovies=async ()=>{
    const movies=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=73695b12f3959162ea4d4ce9713caa8e");
    setmovie(movies.data.results);
 

  }
  useEffect( ()=>{
    getAllMovies();
  },[] )

  return (
  <>

     <Header/>
  <Container>
<AllMovie movie={movie}/>

  </Container>


  </>
  );
}

export default App;
