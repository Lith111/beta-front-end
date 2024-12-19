import "./createMidcalAnalysis.css"
import Title from "../../components/Title/Title"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
const CreateMidcalAnalysis = () => {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [userFuter,setuserFuter] = useState("");
  const [file,setfile] = useState(null);
 const formSubmitHandler = (e)=> {
    e.preventDefault();
    if(title.trim()==="")return toast.error("post Title is required")
    if(description.trim()==="")return toast.error("description  is required")
    if(userFuter.trim()==="" || userFuter.trim() === "Category of post")return toast.error("category  is required")        
    if(!file)return toast.error("file  is required")
   //  object to send json to datebase
   const formData = new FormData();     
   formData.append("image",file);
   formData.append("title",title);
   formData.append("userFuter",userFuter);
   formData.append("description",description)
    console.log({title,userFuter,description,file});
 }  
 
  return (
    <div className="createMidcal">
        <Title title ="add midcaile"/>
        <Container fuild>
        <div className="conter-form-meidcal " style={{margin:" 0 60px"}}>
        <Form onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="create title post"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control value={userFuter} onChange={(e)=>setuserFuter(e.target.value)} type="text" placeholder="create title post"  />
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
    </div>
  )
}

export default CreateMidcalAnalysis