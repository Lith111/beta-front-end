import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Title from '../../components/Title/Title'
import { useState } from 'react';
import { toast } from 'react-toastify';
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [numberkey ,setNumberKey] = useState("");
     const formSubmitHandler = (e) =>{
      e.preventDefault();
      if(!email)return toast.error("email is required");
      if(!numberkey)return toast.error("numberKey is required");
      console.log({email,numberkey});
  }  
  return (
    <div className='register-sty'>
    <div className="card-register-sty">
    <Title  title=" forgot password " />
         <Form classname="" onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>numberkey address</Form.Label>
        <Form.Control value={numberkey} onChange={(e)=>setNumberKey(e.target.value)} type="number" placeholder="numberkey address" />
        </Form.Group>
      <Button variant="outline-primary w-100" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div> 
  );
}

export default ForgotPassword