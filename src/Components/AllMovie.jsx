
import Card from './Card'
import {  Row } from "react-bootstrap";
const AllMovie = ({movie}) => {
  return (
    <Row className="mt-3">
    {
      movie.map( (item)=>{
        return <Card  key={Math.random} item={item}/>
      })
    }
     
    </Row>
  );
};

export default AllMovie;
