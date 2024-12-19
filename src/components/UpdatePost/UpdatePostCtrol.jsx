import  './updatePost.css'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Title from '../Title/Title';
import Form from "react-bootstrap/Form";
import {useParams} from "react-router-dom"
import {categories , posts} from"../../dummyData";
import { useState } from 'react';
import { toast } from 'react-toastify';
function UpdatePostCtrol({setshow}) {
    const {id} = useParams();
    const post = posts.find((item=>item._id === parseInt(id)));
  const optionCategoryMap = categories.map((item)=><option key={item._id} value={item._id}>{item.title}</option>)
   const [title,setTitle] = useState("");
   const [description,setDescription] = useState("");
   const [category,setCategory] = useState("");
   const formSubmitHandler = (e)=> {
    e.preventDefault();
    if(title.trim()==="")return toast.error("post Title is required")
    if(description.trim()==="")return toast.error("description  is required")
    if(category.trim()==="" || category.trim() === "Category of post")return toast.error("category  is required")        
   //  object to send json to datebase
   const formData = new FormData();     
   formData.append("title",title);
   formData.append("category",category);
   formData.append("description",description)
    console.log({title,category,description});
   setTimeout(() => {
    setshow(false);
   }, 1000);  
 }  
 
    return (
      <Alert className='alert-update-post' variant="light" >
        <Button style={{marginLeft:"100%",transform:"translateX(-100%)"}} variant="danger" onClick={()=>{setshow(false)}}>X</Button>
        <Alert.Heading><Title title="update"/></Alert.Heading>
        <Form onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="change title post"  />
      </Form.Group>
      <Form.Group className="mb-3"> 
        <Form.Select value={category} onChange={(e)=>setCategory(e.target.value)} aria-label="Default select example">
      <option>Category of post</option>
      {optionCategoryMap}
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control value={description} onChange={(e)=>setDescription(e.target.value)}  defaultValue={post.description}  as="textarea" rows={3} />
      </Form.Group>
      <Button  type="submit" className="w-100 mb-3">create post</Button>
    </Form>
      </Alert>
    );
  }


export default UpdatePostCtrol;