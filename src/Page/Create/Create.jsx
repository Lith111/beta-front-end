import './create.css'
import Title from "../../components/Title/Title"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import {categories} from"../../dummyData";
import { toast } from 'react-toastify';
  import { useState } from 'react'
const Create = () => {
  const optionCategoryMap = categories.map((item)=><option key={item._id} value={item._id}>{item.title}</option>)
   const [title,setTitle] = useState("");
   const [description,setDescription] = useState("");
   const [category,setCategory] = useState("");
   const [file,setfile] = useState(null);
  const formSubmitHandler = (e)=> {
     e.preventDefault();
     if(title.trim()==="")return toast.error("post Title is required")
     if(description.trim()==="")return toast.error("description  is required")
     if(category.trim()==="" || category.trim() === "Category of post")return toast.error("category  is required")        
     if(!file)return toast.error("file  is required")
    //  object to send json to datebase
    const formData = new FormData();     
    formData.append("image",file);
    formData.append("title",title);
    formData.append("category",category);
    formData.append("description",description)
     console.log({title,category,description,file});
  }  
   return (
    <section className='creat-post'>
     <Container> 
    <div className='post-form-cont'>
    <Title title="create post"/>
      <Form onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="create title post"  />
      </Form.Group>
      <Form.Group className="mb-3"> 
        <Form.Select value={category} onChange={(e)=>setCategory(e.target.value)} aria-label="Default select example">
      <option>Category of post</option>
      {optionCategoryMap}
    </Form.Select>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control  onChange={(e)=>setfile(e.target.files[0])} type="file" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="description of post"  as="textarea" rows={3} />
      </Form.Group>
      <Button  type="submit" className="w-100 mb-3" >create post</Button>
    </Form>
    </div>
  </Container>
    </section>
  )
}

export default Create