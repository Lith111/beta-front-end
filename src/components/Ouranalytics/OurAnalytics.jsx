import Row from 'react-bootstrap/esm/Row'
import Title from '../Title/Title'
import './OurAnalytics.css'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import { CardMedical } from '../CardMedical/CardMedical'
const OurAnalytics = () => {
  return (
    <div className='ourAnlytics'>
        <Container>
        <Title title="Our medical analytics"></Title>
        <Row className='row-medical'>
        <Col className="col-midca" ><CardMedical title={"Analysis of chronic disease"} img={"../images/images-1.jpg"} txt={"A blood test usually involves taking a blood sample from a blood vessel in your arm"}/></Col>
        <Col className="col-midca"><CardMedical title={"Analysis of glands"} img={"../images/images-2.jpg"} txt={"A blood test usually involves taking a blood sample from a blood vessel in your arm"}/></Col>
        <Col className="col-midca"><CardMedical title={"blood tests"}img={"../images/images-3.jpg"} txt={"A blood test usually involves taking a blood sample from a blood vessel in your arm"} /></Col>
        <Col className="col-midca"><CardMedical title={"blood tests"}img={"../images/images-4.jpg"} txt={"A blood test usually involves taking a blood sample from a blood vessel in your arm"} /></Col>
        <Col className="col-midca"><CardMedical title={"blood tests"}img={"../images/images-5.jpg"} txt={"A blood test usually involves taking a blood sample from a blood vessel in your arm"} /></Col>
        <Col className="col-midca"><CardMedical title={"blood tests"}img={"../images/images-7.jpg"} txt={"A blood test usually involves taking a blood sample from a blood vessel in your arm"} /></Col>
      </Row>
      </Container>
    </div>
 )
}

export default OurAnalytics