import React from "react";
import { Col } from "react-bootstrap";

const Card = ({item}) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
  
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500/` + item.poster_path} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {item.original_title}</p>
              <p>تاريخ الاصدار:{item.release_date}</p>
              <p>عدد المقيمين: {item.vote_count}</p>
              <p>التقييم:{item.vote_average} </p>
            </div>
          </div>
        </div>
  
    </Col >
  );
};

export default Card;
