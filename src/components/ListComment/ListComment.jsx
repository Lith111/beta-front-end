import ListGroup from "react-bootstrap/ListGroup";
import Title from "../Title/Title";
import NavDropdown from "react-bootstrap/NavDropdown";
import Comment from "../Comment/Comment";
import swal from "sweetalert";
import "./ListComment.css";
import UpdateCommentCtrol from "../updateComment/UpdateCommentCtrol";
import { useState } from "react";
function ListComment() {
  const [show ,setShow] = useState(false);
  const commentHandelDeletes = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("comment has been deleted !", {
          icon: "success",
        });
      } else {
        swal("something went  wrong !");
      }
    });
  };

  return (
    <>
      <Title title="comment" />
      <ListGroup className="">
        {[1, 2].map((comment) => (
          <ListGroup.Item key={comment} className="comment-item">
            <div className="comment-item-info">
              <div className="comment-item-username">
                <img
                  className="img-username"
                  style={{ maxWidth: "40px" }}
                  src="https://media.licdn.com/dms/image/D4E03AQEbgZ1Yfhs26w/profile-displayphoto-shrink_800_800/0/1682025589746?e=2147483647&v=beta&t=BhSSSWNHmlGbYe_0u4a0i16VeaknAxBNEPqTQ9l1EAA"
                  alt=""
                  srcset=""
                />
                <h4 className="username-title-item-comment">
                  <span>latih</span>
                  <span>22 week</span>
                </h4>
              </div>
              <div className="comment-controler">
                <NavDropdown
                  title="Settings"
                  id="nav-dropdown"
                  className="navDroComment"
                >
                  <NavDropdown.Item onClick={()=>setShow(true)}>update</NavDropdown.Item>
                  <NavDropdown.Item onClick={commentHandelDeletes}>
                    Delelet
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
            <div className="comment-item-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim
              error cum pariatur, veniam illo. Assumenda numquam maiores quidem
              molestiae itaque. Voluptatum eveniet odit laboriosam perferendis
              iure id exercitationem provident. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maiores
            </div>
          </ListGroup.Item>
        ))}
        <ListGroup.Item style={{ padding: "10px 0", border: "none" }}>
          <Comment />
        </ListGroup.Item>
      </ListGroup>
      {show ? <UpdateCommentCtrol setShow={setShow}/>:null}
    </>
  );
}

export default ListComment;
