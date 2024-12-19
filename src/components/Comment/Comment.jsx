import Form from'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import {useState} from 'react'
import './Comment.css'
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { toast } from 'react-toastify';
// import { useState } from 'react';
const Comment = () => {
        const [text , setText]  = useState('');
        const formsubmintHundle = (e)=>{
            e.preventDefault();
            if (text.trim()==="") {
                return toast.error("empty comment");
            }
            console.log({text});
            document.querySelector(".comment-input").value ="";
            
        }
  return (
    <div className='Comment'>
        <Form onSubmit={formsubmintHundle}>
            <FormGroup className='d-flex  sty-comment'>
                <Form.Control  className='comment-input' type='text' value={text} placeholder='add your comment' onChange={(e)=>setText(e.target.value)}/>
                <Button type='submit' >add</Button>
            </FormGroup>
        </Form>
    </div>
  )
}

export default Comment