import Title from '../Title/Title';
import AboutUsContCard from '../aboutUsContCard/AboutUsContCard';
import './AboutUs.css';
import Container from 'react-bootstrap/Container';
const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <Container>
        <Title title="about us"/>  
        <div className='txt-aboutUs'>
          beta laboratiry for Medical Analysis is one of the <span> best </span> our medical laboratires in Syria our
          medical staff is considered one  of the <span>best</span>  doctors and specialists in this field ,we rely on 
          national  and the international standards and the latest medical tools, most accuratw and <span> fast  </span>, 
          under the supervision of <span> Dr.Bahjat Naoura </span> and<span> thanks</span> you for reading
        </div>
        <AboutUsContCard />
      </Container>
    </div>
  )
}

export default AboutUs