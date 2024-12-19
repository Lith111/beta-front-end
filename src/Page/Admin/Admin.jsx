import './Admin.css';
import Row from "react-bootstrap/Row"
import AdminMain from '../../components/AdminMain/AdminMain';
import AdminSidbar from '../../components/AdminSidbar/AdminSidbar';
const Admin = () => {
  return (
    <section className='Admin-dashoard '>
     <Row>
      <AdminSidbar/>
      <AdminMain/>
      </Row>
    </section>
  )
}

export default Admin