import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AllMovie from './Components/AllMovie'
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginationComponent from './Components/PaginationComponent'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import CardDetails from './Components/CardDetails' 
function App() {
  const[movie,setmovie]= useState([]);
  const[count,setCount]=useState(0);
  const getAllMovies=async ()=>{
    const movies=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=73695b12f3959162ea4d4ce9713caa8e`);
    setmovie(movies.data.results);
     setCount(movies.data.total_pages);
     

  }
  const searchMovies=async (search)=>{
    if(search==""){
      getAllMovies();
    }
 
 
   else{
    const movies=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=73695b12f3959162ea4d4ce9713caa8e&query=${search}&language=ar`);

    setmovie(movies.data.results);
    setCount(movies.data.total_pages);
   }
    
 
  
  }

  const getSpecificPage=async(num)=>{
    //طبعا السطر ده مش احسن  هنا علشان لما يبحث
    const movies =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=73695b12f3959162ea4d4ce9713caa8e&page=${num}`);

    setmovie(movies.data.results);
    setCount(movies.data.total_pages);
  }

  const getSpecificMovie=async()=>{
    const movies=await axios.get(`https://api.themoviedb.org/3/movie/5/?api_key=73695b12f3959162ea4d4ce9713caa8e`);
    setmovie(movies.data.results);
     setCount(movies.data.total_pages);

  }
  useEffect( ()=>{
    getAllMovies();
  },[] )

  return (
  <>

     <Header searchMovies={searchMovies} />
  <Container>

  <BrowserRouter>
  <Routes>
    <Route  path='/' element={<AllMovie movie={movie}/>}/>
<Route path='/CardDetails/:id' element={  <CardDetails />} />

  </Routes>
  </BrowserRouter>
  <PaginationComponent  count={count} getSpecificPage={getSpecificPage}/>


  </Container>


  </>
  );
}

export default App;
