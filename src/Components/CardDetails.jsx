
import { Col, Row } from "react-bootstrap";


const CardDetails = () => {
  

  
    return (
        <div>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center ">
                        <img
                            className="img-movie w-30"
                            src={""}
                            alt="ascad"
                        />
                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                                اسم الفيلم: {title}
                            </p>
                            <p className="card-text-details border-bottom">
                                تاريخ الفيلم :{release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                عدد المقيمين : {vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                التقييم :{vote_average}
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
    )
}

export default CardDetails
