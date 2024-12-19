import React from 'react'
import CardDash from '../footer/CardDash/CardDash'
import "./AdminMain.css"
import CreateMidcalAnalysis from '../CreateMidcalAnalysis/CreateMidcalAnalysis'
import AddCategory from '../AdminSidbar/AddCategory/AddCategory'
const AdminMain = () => {
  return (
    <div className='col-10 admin-main'>
        <div className='cont-Card container-fluid'>
        <CardDash title={"users"} number={120} urlDashbord={"/admin-dashboard/users-tables"}/>
        <CardDash title={"category"} number={12} urlDashbord={"/admin-dashboard/category-tables"}/>
        <CardDash title={"posts"} number={300} urlDashbord={"/admin-dashboard/posts-tables"}/>
        <CardDash title={"midcal"} number={30} urlDashbord={"/admin-dashboard/midcal-tables"}/>
        <CardDash title={"comment"} number={3000} urlDashbord={"/admin-dashboard/comment-tables"}/>
        </div>
        <CreateMidcalAnalysis/>
        <AddCategory />
        </div>
  )
}

export default AdminMain