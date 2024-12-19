import { Link } from "react-router-dom";
import {BiLogIn} from "react-icons/bi";
import { BsBoxArrowDownRight, BsPersonPlus } from "react-icons/bs";
import { useSelector , useDispatch } from "react-redux";
import {CgProfile} from "react-icons/cg"
import Dropdown from 'react-bootstrap/Dropdown';
import  {useNavigate} from "react-router-dom"
import { logoutUser } from "../../redux/apiCalls/authapiCall";
import { useState } from "react";
const HeaderRight = ({ setToggle }) => {
  const nav = useNavigate();
  const [home, setHome] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  if (home) {
    nav("/");
  }
  return (
    <div className="header-right">
      {user   ?(
        <>
         <Dropdown  className=" header-right-link profile-info">
         <Dropdown.Toggle  id="dropdown-basic" variant="white"  style={{border :"none"}}>
         <img src={user.profilePhoto.url} style={{maxWidth:"30px" ,marginRight :"5px"}} alt="" />
            <span>{user?.username}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
          <Dropdown.Item >
            <Link style={{color:"var(--blue-color)", paddingLeft :"3px"}}  to={`profile/${user._id}`}> <CgProfile className="sty-dro-log" /> profile</Link>
          </Dropdown.Item>
          <Dropdown.Item  onClick={()=>{dispatch(logoutUser()) ; setHome(true) }} style={{color:"var(--red-color)"}}> <BiLogIn className="sty-dro-log"  style={{color:"var(--red-color)"}}/>logout</Dropdown.Item>
    
      </Dropdown.Menu>
    
    </Dropdown>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="header-right-link"
            onClick={() => setToggle(false)}
          >
            <BsBoxArrowDownRight></BsBoxArrowDownRight>
            <spna>login</spna>
          </Link>
          <Link
            to="/rigister"
            className="header-right-link"
            onClick={() => setToggle(false)}
          >
            <BsPersonPlus></BsPersonPlus>
            <span>Register</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default HeaderRight;
