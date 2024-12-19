import "./Rigister.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Title from "../../components/Title/Title";
import {Link, useNavigate} from "react-router-dom"
import { useState } from "react";
import { toast } from "react-toastify";
import {useDispatch,useSelector} from "react-redux"
import { rigisterUser } from "../../redux/apiCalls/authapiCall";
import swal from "sweetalert"
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [numberKey ,setNumberKey] = useState("");
  const [password , setPassword] = useState("");  
  const dispatch = useDispatch(); 
  const {registerMessage} = useSelector(state=>state.auth);
  const formSubmitHandler = (e) =>{
      e.preventDefault();
      if(!username)return toast.error("username is required");
      if(!email)return toast.error("email is required");
      if(!numberKey)return toast.error("numberKey is required");
      if(!password)return toast.error(" password required");
      console.log({username,email,numberKey,password});
      dispatch(rigisterUser({username,email,numberKey,password}));
    }  
  const nav =  useNavigate();
  if (registerMessage) {
    swal({
      title:registerMessage,
      icon:"success",
    }).then(isOk=>{
      if (isOk) {
        nav("/login")
              // go to login page 

      }
    })
  }
  return (
    <div className="register-sty ">
      <div className="card-register-sty ">
      <Title  title="Rigister" />
        <Form classname="card-register-sty " onSubmit={formSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>username</Form.Label>
            <Form.Control value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>numberkey address</Form.Label>
            <Form.Control value={numberKey}onChange={(e)=>setNumberKey(e.target.value)} type="number" placeholder="numberkey address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>
          <Button  variant="outline-primary w-100" type="submit">
            Submit
          </Button>
          <p style={{textAlign: "center", padding:" 20px 0px 0px"}}>if you have an account <Link to="/login"> login</Link></p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
