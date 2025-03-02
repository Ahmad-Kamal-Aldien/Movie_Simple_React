
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
const CardDetails = () => {
  
const id=useParams();
const [movie,setmovie]=useState({});
const getMovieId=async()=>{
   
    const movies=await axios.get(`https://api.themoviedb.org/3/movie/${id.id}?api_key=73695b12f3959162ea4d4ce9713caa8e&language=ar`);
    setmovie(movies.data);
  
 
}
useEffect( ()=>{

    getMovieId();
},[] );
  
    return (
      
       <>
        <div>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center ">
                        <img
                            className="img-movie w-30"

                            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                            alt="ascad"
                        />
                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                                اسم الفيلم: {movie.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                تاريخ الفيلم :{movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                عدد المقيمين : {movie.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                التقييم :{movie.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">القصة:</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
               
            </Row>
        </div>
       </>
    )
}

export default CardDetails
