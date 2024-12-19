import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Title from '../../components/Title/Title'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/apiCalls/authapiCall';
const Login = () => {
  const [email, setEmail] = useState("");
  const [numberKey ,setNumberKey] = useState("");
  const [password , setPassword] = useState("");
  const dispatch =  useDispatch() ;
  
  
  const formSubmitHandler = (e) =>{
      e.preventDefault();
      if(!email)return toast.error("email is required");
      if(!numberKey)return toast.error("numberKey is required");
      if(!password)return toast.error(" password required");
      console.log({email,numberKey,password});
      dispatch(loginUser({email,numberKey,password}))
    }  
  return (
    <div className='register-sty'>
    <div className="card-register-sty">
    <Title  title="Login" />
         <Form classname="" onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>numberkey address</Form.Label>
        <Form.Control value={numberKey} onChange={(e)=>setNumberKey(e.target.value)} type="number" placeholder="numberkey address" />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="outline-primary w-100" type="submit">
        Submit
      </Button>
      <p style={{textAlign:"center" ,padding:"20px 0 0 0 "}}> Did you forget your password <Link to="/forgot-password"> frogot password</Link></p>
    </Form>
    </div>
    </div> 
  );
}

export default Login