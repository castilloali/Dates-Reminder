import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Rectangle = ({person}) => {
    return (
        <Row className="justify-content-center ">
            <Col  sm='8'>
                <div className="rectangle rounded px-4">
                {
                person.length ? person.map((item) =>{
                    return (
                    <div key={item.id} className="d-flex align-content-center pt-3 border-bottom">
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
    )
}

export default Rectangle
