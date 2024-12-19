import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AdminSidbar from "../../components/AdminSidbar/AdminSidbar";
import Title from "../../components/Title/Title";
import Button from "react-bootstrap/esm/Button";
import swal from "sweetalert";
const AdminTabelsCategory = () => {
    const CategoryHandelDeletes = ()=>{  swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary user!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("category has been deleted !", {
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

        <Title title="all Categories" />

          <Table
            striped="columns"
            className="Col-10 ">
            <thead>
              <tr>
                <th>#</th>
                <th>Category title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[1,2,3].map((item) => (
                    <tr>
                        <td>{item}</td>
                        <td> cares</td>
                        <td className="td-btn-category"><Button style={{width:"50%"}} onClick={CategoryHandelDeletes} variant="danger">Delelte</Button></td>
                    </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default AdminTabelsCategory;
