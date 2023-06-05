import { Button, Col, Container, Row } from "react-bootstrap";
import "../src/index.css"
import { person } from "./data";
import DatsCont from "./components/DatsCont";
import Rectangle from "./components/Rectangle";
import Bott from "./components/Bott";
import { useState } from "react";

function App() {
  const [personData, setpersonData] = useState(person)
  const onDelete = () => {
    setpersonData([])
  }
  const onShowData = () => {
    setpersonData(person)
  }
  return (
    <div className="">
      <Container className="container py-5" >
        <DatsCont  person={personData}/>
        <Rectangle person={personData}/>
        <Bott ShowDat={onShowData} deleteData={onDelete}/>


      </Container>
      </div>
  );
}

export default App;
