import './App.css';
import {  Route,BrowserRouter, Routes ,Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './Page/Home/Home'
import Posts from './Page/Posts/Posts';

import Create from './Page/Create/Create';
import Admin from './Page/Admin/Admin';
import Login from './Page/Form/Login';
import Rigister from './Page/Form/Register'
import Footer from './components/footer/FooterMyapp';
import PostDetals from './Page/postDetails/PostDetals';
import { ToastContainer } from 'react-toastify';
import Category from './Page/Category/Category';
import Profile from './Page/Profile/Profile';
import AdminTbelsUsers from './Page/Admin/AdminTbelsUsers';
import AdminTabelsPosts from './Page/Admin/AdminTabelsPost';
import AdminTabelsCategory from './Page/Admin/AdminTabelsCategory';
import AdminTabelsComment from './Page/Admin/AdminTabelsComment';
import ForgotPassword from './Page/Form/ForgotPassword';
import ResetPassword from './Page/Form/ResetPassword';
import Notfound from './Page/NotFound/Notfound';
import {  useSelector } from 'react-redux';
const App = () =>{
   const {user} = useSelector(state => state.auth)

    return (
       <BrowserRouter>
         <Header ></Header>
         <ToastContainer/>
         <Routes>
            <Route path='/'element={<Home />} />
            <Route path='/posts'> 
            <Route index element={<Posts />} />
               <Route path='create'element={  <Create/> }/>
               <Route path ='post-detals/:id' element={<PostDetals/>}/>
               <Route path='categories/:category' element={<Category/>}/>
            </Route>
            <Route path='/profile/:id' element={<Profile/>}/>
            <Route path='/login'element={ !user? <Login />: <Navigate to={"/"}/>} />
            <Route path='/rigister'element={ !user? <Rigister/> : <Navigate to={"/"}/>} />
            <Route path='/admin-dashboard'element={  user?.isAdmin ? <Admin />: <Navigate to={"/"}/>} />
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/Reset-password' element={<ResetPassword/>}/>
            <Route path='admin-dashboard/users-tables' element={<AdminTbelsUsers/>}/>
            <Route path='admin-dashboard/posts-tables' element={<AdminTabelsPosts/>}/>
            <Route path='admin-dashboard/category-tables'element={<AdminTabelsCategory/>}/>
            <Route path='admin-dashboard/comment-tables'element={<AdminTabelsComment/>}/>
            <Route path='*' element={<Notfound/>}/>
         </Routes>
         <Footer></Footer>
       </BrowserRouter>
    )
};
export default App;