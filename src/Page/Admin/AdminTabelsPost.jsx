import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AdminSidbar from "../../components/AdminSidbar/AdminSidbar";
import Title from "../../components/Title/Title";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import {posts} from "../../dummyData"
const AdminTabelsPosts = () => {
    const postHandelDeletes = ()=>{  swal({
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

        <Title title="all post" />

          <Table
            striped="columns"
            className="Col-10 ">
            <thead>
              <tr>
                <th>#</th>
                <th>user</th>
                <th>post title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                  <img
                      class="img-username-admin"
                      src={item.user.image}
                      alt=""
                      srcset=""
                      style={{maxWidth : "40px"}}
                    />
                   {item.user.username}
                  
                  </td>
                  <td> {item.title}</td>
                  <td><Link className="btn btn-primary" to={"/posts/post-detals/"+item._id} style={{marginRight:"5px"}}>veiw</Link><Button onClick={postHandelDeletes} variant="danger">Delelte</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default AdminTabelsPosts;
