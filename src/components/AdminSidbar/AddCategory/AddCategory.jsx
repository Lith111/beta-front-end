import React from 'react'
import Title from '../../Title/Title'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
const AddCategory = () => {
    const [title,setTitle] = useState("");
    const formSubmitHandler = (e)=> {
        e.preventDefault();
        if(title.trim()==="")return toast.error("post Title is required");
        const formData = new FormData();     
        formData.append("title",title);
        console.log({title});

    }
  return (
    <div style={{margin:"0 60px "}}>
        <Container>
        <Title title="add Category"/>
        <Form onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="create title post"  />
      </Form.Group>
      <Button  type="submit" className="w-100 mb-3" >create post</Button>
    </Form>
    </Container>
    </div>
  )
}

export default AddCategory