import {PostItem} from '../PostITem/PostItem'
import  './postList.css'
const  postList = ({posts}) => {
  const postmap = posts?.map((item)=><PostItem post={item}  key={item._id} />)
    return (
    <div className='post-list'>
      {postmap}
      </div>
  )
}

export default postList;