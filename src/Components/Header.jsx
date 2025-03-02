import React from "react";
import { Container,Row,Col } from "react-bootstrap";



const Header = ({searchMovies}) => {

  const getMatch=(e)=>{

    searchMovies(e);
  }
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
            
                        <input  onChange={(e)=>getMatch(e.target.value)}
               type="text" className="form-control" placeholder="ابحث" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>







  );
};

export default Header;
