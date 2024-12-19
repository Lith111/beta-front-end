import './AboutUsContCard.css'
import CardAbout from '../CardAbout/CardAbout'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../images/aboutus-1.jpg'
import img2 from '../../images/aboutus-2.jpg'
import img3 from '../../images/aboutus-3.jpg'

const AboutUsContCard = () => {
  return (
    <div className='contCard'> 
      <Row>
        <Col className='col-style'><CardAbout img={img1} title="Fast"/></Col>
        <Col className='col-style'><CardAbout img={img2} title="Accuracy"/></Col>
        <Col className='col-style'><CardAbout  img={img3}title="Quality"/></Col>
      </Row>
    </div>
  )
}

export default AboutUsContCard