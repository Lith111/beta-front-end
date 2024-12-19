import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AdminSidbar from "../../components/AdminSidbar/AdminSidbar";
import Title from "../../components/Title/Title";
import Button from "react-bootstrap/esm/Button";
import swal from "sweetalert";
const AdminTabelsComment = () => {
    const postHandelDeletes = ()=>{  swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary user!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("comment has been deleted !", {
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

        <Title title="all Comments" />
          <Table
            striped="columns"
            className="Col-10 ">
            <thead>
              <tr>
                <th>#</th>
                <th>user</th>
                <th>comment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[1,2,3,4,5,6].map((item) => (
                <tr key={item._id}>
                  <td>{item}</td>
                  <td>
                  <img
                      class="img-username-admin"
                      src="/images/user-avatar.png"
                      alt=""
                      srcset=""
                      style={{maxWidth : "40px"}}
                    />
                        laith sorki                  
                  </td>
                  <td>thank you for this post </td>
                  <td className="td-btn-category"><Button style={{width:"50%"}} onClick={postHandelDeletes} variant="danger">Delelte</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default AdminTabelsComment;
