import React from 'react'
import {Link} from 'react-router-dom'
import {BsX, BsList, BsFillPencilFill}from "react-icons/bs"
export const HeaderLeft = ({toggle,setToggle}) => {
  return (
    <div className="header-left">
    <div className="header-munu" onClick={()=> setToggle(Prev=>!Prev)}>
        {toggle ? <BsX></BsX>: <BsList ></BsList>}
      </div>
      <div className="header-logo">
      <Link to ="/" ><strong>Betaweb</strong></Link>
        <BsFillPencilFill />
      </div>
    </div>
  )
}
export default HeaderLeft ;
