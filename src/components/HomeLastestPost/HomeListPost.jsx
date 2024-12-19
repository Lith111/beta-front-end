import Title from '../Title/Title'
import './HomeListPost.css'
import PostList from './PostList'
import PostSidebar from './PostSidebar'
const HomeListPost = () => {
  return (
    <>
      <Title title= "lasest post" /> 
    <div className="home-container">
        <PostList ></PostList>
        <PostSidebar></PostSidebar>
    </div>
    </>
  )
}

export default HomeListPost