import Title from '../Title/Title';
import './PostItem.css'
import {Link} from "react-router-dom";
const PostItem = ({post,a}) => {
  return (
    <div className="post-item ">
     <div className="post-item-info-wrapper">
      <div className="post-item-info">
       <div className="post-item-Author">
        <strong>
        <Link to ="/profile/1">
           {post.user.username}
           <div className="post-item-date">
        {new Date(post.createdAt).toDateString()}
       </div>
        </Link>
        </strong>
       </div>
       <img className='post-user-profile' src={post.user.image} alt="" />
      </div>
    <div className="post-item-details">
      <h4 className="post-item-title">
        {post.title}
      </h4>
      <Link to={`/posts/categories/${post.category}`}>
        {post.category}
      </Link>
      </div>
    </div>
    <div className="post-item-desciption">
      {post.description}
      Lorem ipsum, dolor sit amet consectetur adipisicing 
      elit. Sapiente, ipsum? Aliquid
       laudantium inventore aspernatur! Deb
       itis itaque dolore nam quas error di
      <Link to={`/posts/post-detals/${post._id}`}>...read more</Link>
       </div>
    <div className="post-item-image-wrapper">
      <img style={{maxWidth:"100%"}} src={post.image} alt="" className="post-item-image" />
    </div>
    </div>
  )

}
const PostItemDetals = ({post,image}) => {
  return (
    <div className="post-item ">
      <Title title={post.title} />
     <div className="post-item-info-wrapper">
      <div className="post-item-info">
       <div className="post-item-Author">
        <strong>
        <Link to ="/profile/1">
           {post.user.username}
           <div className="post-item-date">
        {new Date(post.createdAt).toDateString()}
       </div>
        </Link>
        </strong>
       </div>
       <img className='post-user-profile' src={post.user.image} alt="" />
      </div>
    <div className="post-item-details">
      <h4 className="post-item-title">
        {post.title}
      </h4>
      <Link to={`/post/categories/${post.category}`}>
        {post.category}
      </Link>
      </div>
    </div>
    <div className="post-item-desciption">
      {post.description}
      Lorem ipsum, dolor sit amet consectetur adipisicing 
      elit. Sapiente, ipsum? Aliquid
       laudantium inventore aspernatur! Deb
       itis itaque dolore nam quas error di
       </div>
    <div className="post-item-image-wrapper">
      <img style={{maxWidth:"100%"}} src={ image? image : post.image} alt="" className="post-item-image" />
    </div>
    </div>
  )

}
export  { PostItem, PostItemDetals}