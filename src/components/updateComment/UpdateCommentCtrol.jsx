// import  './updatePost.css'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Title from '../Title/Title';
import Form from "react-bootstrap/Form";
import { useState } from 'react';
import { toast } from 'react-toastify';
function UpdatePostCtrol({setShow}) {
   const [text,setText] = useState("");
   const formSubmitHandler = (e)=> {
    e.preventDefault();
    if(text.trim()==="")return toast.error("post Title is required")
   //  object to send json to datebase
    console.log({text});
   setTimeout(() => {
    setShow(false);
   }, 1000);  
 }  
 
    return (
      <Alert className='alert-update-post' variant="light" >
        <Button style={{marginLeft:"100%",transform:"translateX(-100%)"}} variant="danger" onClick={()=>{setShow(false)}}>X</Button>
        <Alert.Heading><Title title="update"/></Alert.Heading>
        <Form onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="change title post"  />
      </Form.Group>
     
      <Button  type="submit" className="w-100 mb-3">create post</Button>
    </Form>
      </Alert>
    );
  }


export default UpdatePostCtrol;