import React from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import Container from "react-bootstrap/esm/Container";
import PostList from "../../components/postList/postList";
import { posts } from "../../dummyData";
import "./category.css"
const Category = () => {
  const { category } = useParams();
  return (
    <section className="category">
      <Container fluid>
      <div className=" row">
            <div className="col post-list-cont "  style={{ margin:"auto" , maxWidth:"800px"}}>
            <Title title={"post " + category} />
            <PostList  posts={posts} style={{border:"1px soild"}} />
            </div>   
      </div>
      </Container >
    </section>
  );
};

export default Category;
