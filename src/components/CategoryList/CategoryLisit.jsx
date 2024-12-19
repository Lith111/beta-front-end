import "./CategoryList.css"
import {categories} from "../../dummyData"
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title"
const CategoryLisit = () => {
  const catMap = categories.map((item)=> <Link key={item._id} className="button-category btn btn-primary" style={{color:"#fff"}} to={`/posts/categories/${item.title}`}> {item.title} </Link>)
    return (
  <section className="category">
    <Title title="categories"/>
      {catMap}
      </section>
  )
}

export default CategoryLisit