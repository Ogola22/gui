import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
//import axios from 'axios';

const Signup = () => {

    const [data, setData]=useState({
        email: "",
        password: ""
    })

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

      const handleChange = (e) => {
        const {name, value} = e.target;
        setData((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        
         fetch('http://localhost:4000/register',{
            
          method: 'POST',
          body: JSON.stringify(data),
          headers: {"content-type": "application/json"},
        }).then (res => res.json())
        .then(res => alert(JSON.stringify(res.error.message, null, 2)));
       
      }
    
    return ( 
        <div className='form-content'>
            <h4 align="center"> Sign-up here...</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" 
                        onChange={ handleChange} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">  
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" 
                        onChange={ handleChange } placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit} type="submit">
                    Signup
                </Button>
            </Form>
        </div>
     );
}
 
export default Signup;