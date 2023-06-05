import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatsCont = ({person}) => {
    return (
        <Row className="justify-content-center">
        <Col sm='8' className="fs-5 fw-bold mb-2">
        لديك {person.length} مواعيد اليوم
        </Col>
        </Row>
    )
}

export default DatsCont
