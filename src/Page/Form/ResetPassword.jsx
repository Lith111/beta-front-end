import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Title from '../../components/Title/Title'
import { useState } from 'react';
import { toast } from 'react-toastify';
const ResetPassword = () => {
  const [password , setPassword] = useState("");
     const formSubmitHandler = (e) =>{
      e.preventDefault();
      if(!password)return toast.error(" password required");
      console.log({password});
  }  
  return (
    <div className='register-sty'>
    <div className="card-register-sty">
    <Title  title="Reset password" />
         <Form classname="" onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> new Password</Form.Label>
        <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="outline-primary w-100" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div> 
  );
}

export default ResetPassword