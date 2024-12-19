import React from 'react'
import {
    BsHouse,
    BsStickies,
    BsJournalPlus,
    BsPersonCheck,
  } from "react-icons/bs";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
  const Navbar = ({toggle,setToggle}) => {
  const {user} = useSelector((state)=>state.auth); 
    return (
    <div style={{clipPath: toggle && "polygon(0 0, 100% 0, 100% 100% ,0 100%)"}} className="navber">
    <ul className="nav-links">
      <Link to="/" onClick={()=>setToggle(false)} className="nav-link" > 
        <BsHouse></BsHouse>
        home
      </Link>
      <Link to='/posts' onClick={()=>setToggle(false)} className="nav-link">
        <BsStickies></BsStickies>
        posts
      </Link>
     {
     (user?.isDoctor || user?.isAdmin ) ?
        <Link to='/posts/create' onClick={()=>setToggle(false)} className="nav-link">
        <BsStickies></BsStickies>
        create
      </Link>
      : ""
     }
     {
      user?  <Link to='/medical'  onClick={()=>setToggle(false)} className="nav-link">
      <BsJournalPlus></BsJournalPlus>
      Medical analysis
    </Link> : ""
     }
      {
       user?.isAdmin? 
        <Link to='/admin-dashboard'  onClick={()=>setToggle(false)} className="nav-link">
        <BsPersonCheck></BsPersonCheck>
        admin Dashbord
      </Link>:""
      }
    </ul>
  </div>
  )
}

export default Navbar