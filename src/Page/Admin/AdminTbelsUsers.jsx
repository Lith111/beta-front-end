import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AdminSidbar from "../../components/AdminSidbar/AdminSidbar";
import Title from "../../components/Title/Title";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import swal from "sweetalert";
const AdminTbelsUsers = () => {
    const usersHandelDeletes = ()=>{  swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary user!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("user has been deleted !", {
            icon: "success",
          });
        } else {
          swal("something went  wrong !");
        }
      });}
  return (
    <div>
      <Row>
        <AdminSidbar />
        <Col xs={10} style={{ padding: "0px" , borderLeft: "2px solid #55555548" }}>

        <Title title="all users" />

          <Table
            striped="columns"
            className="Col-10 ">
            <thead>
              <tr>
                <th>#</th>
                <th>user</th>
                <th>Email</th>
                <th>code</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 12 }).map((_, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                  <img
                      class="img-username-admin"
                      src="https://media.licdn.com/dms/image/D4E03AQEbgZ1Yfhs26w/profile-displayphoto-shrink_800_800/0/1682025589746?e=2147483647&amp;v=beta&amp;t=BhSSSWNHmlGbYe_0u4a0i16VeaknAxBNEPqTQ9l1EAA"
                      alt=""
                      srcset=""
                      style={{maxWidth : "40px"}}
                    />
                    laith sorki
                  
                  </td>
                  <td>laith.sorki@gmail.com</td>
                  <td>0000</td>
                  <td><Link className="btn btn-primary" to={"/profile/1"} style={{marginRight:"5px"}}>veiw</Link><Button onClick={usersHandelDeletes} variant="danger">Delelte</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default AdminTbelsUsers;
