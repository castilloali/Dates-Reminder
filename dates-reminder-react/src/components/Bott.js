import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const Bott = ({deleteData, ShowDat}) => {
  return (
    <Row className="justify-content-center mt-2">
        <Col sm='8' className="d-flex justify-content-between">
            <Button onClick={deleteData} className="btn-cas ">مسح الكل</Button>
            <Button onClick={ShowDat} className="btn-cas ">عرض البيانات</Button>
        </Col>
  </Row>
)
}

export default Bott
