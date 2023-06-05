import { Button, Col, Container, Row } from "react-bootstrap";
import "../src/index.css"
import { person } from "./data";


function App() {
  return (
    <div className="">
      <Container className="container py-5" >
        <Row className="justify-content-center">
          <Col sm='8' className="fs-5 fw-bold mb-2">
          لديك {person.length} مواعيد اليوم
          </Col>
        </Row>


        <Row className="justify-content-center ">
          <Col pill  sm='8'>
            <div className="rectangle rounded px-4">



            {
              person.length ? person.map((item) =>{
                return (
                  <div className="d-flex align-content-center pt-3 border-bottom">
                <img className="img-avatar" src={item.img} alt="dc" />
                <div className="me-2 ">
                  <h5 className="d-inline">{item.name}</h5>
                  <p>{item.date}</p>
                </div>
              </div>
                )
              }) : <h2 className="d-flex justify-content-center pt-5 border-bottom">لا يوجد مواعيد اليوم</h2>
            }





            </div>
          </Col>
        </Row>


        <Row className="justify-content-center mt-2">
          <Col sm='8' className="d-flex justify-content-between">
            <Button className="btn-cas ">مسح الكل</Button>
            <Button className="btn-cas ">عرض البيانات</Button>
          </Col>
        </Row>
      </Container>
      </div>
  );
}

export default App;
