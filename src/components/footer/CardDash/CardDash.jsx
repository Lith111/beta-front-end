import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardDash({title,number,urlDashbord}) {
  return (
    <Card style={{ width: '12rem'}}>
      <Card.Body >
        <Card.Title className='card-title-dash'> <span>{title}</span></Card.Title>
        <Card.Text style={{color:"var(--red-color)"}}>{number}</Card.Text>
        <Link className='btn btn-primary' to={urlDashbord} > see all {title}</Link>
      </Card.Body>
    </Card>
  );
}

export default CardDash;