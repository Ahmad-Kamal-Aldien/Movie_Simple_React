
import Card from './Card'
import {  Row } from "react-bootstrap";
const AllMovie = ({movie}) => {
  return (
    <Row className="mt-3">
    {
      movie.map( (item)=>{
        return <Card  key={item.id} item={item}/>
      })
    }
     
    </Row>
  );
};

export default AllMovie;
