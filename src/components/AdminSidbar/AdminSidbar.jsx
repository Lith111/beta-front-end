import  "./AdminSidbar.css";
import {Link} from 'react-router-dom'
import {BsFillStickiesFill} from "react-icons/bs"
import {BsFillDropletFill} from "react-icons/bs"
import {BiPhotoAlbum} from "react-icons/bi"
import {BsFillTagsFill}from "react-icons/bs"
import {BsChatRightText}from "react-icons/bs"
const AdminSidbar = () => {
  return (
    <div className='col dash-sid-adm' >
        <Link to="/admin-dashboard">
        <h6 className="title-dash">Dashbord</h6>
        </Link>
        <ul className="tabels-dashboard">
            <Link className="tab-bashbord" to="/admin-dashboard/users-tables">
            <BsFillStickiesFill/>
                <span>users </span>
            </Link>
            <Link className="tab-bashbord" to="/admin-dashboard/category-tables">
            <BsFillTagsFill/>
                <span>category </span>
            </Link>
            <Link className="tab-bashbord" to="/admin-dashboard/posts-tables">
            <BiPhotoAlbum />
                <span>posts</span>
            </Link>
            <Link className="tab-bashbord" to="/admin-dashboard/midcal-tables">
            <BsFillDropletFill/>
                <span>medical </span>
            </Link>
            <Link className="tab-bashbord" to="/admin-dashboard/comment-tables">
            <BsChatRightText/>
                <span>comment</span>
            </Link>
        </ul>
    </div>
  )
}

export default AdminSidbar