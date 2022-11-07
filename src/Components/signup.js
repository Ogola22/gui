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
         headers: {"content-type": "application/json"},
         body: JSON.stringify(data)
        }).then(response => response.json()
            //()=>{
            //console.log('new user added'); 
        //  history.push('/');
        //}
        )
        //.then(error => alert(error.statu));
        .then(result => alert(JSON.stringify(result.error.message, null, 2)));
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.post('http://localhost:4000/register',{
    //         email: email,
    //         password: password
    //     });
        // history.push("/");
    //}
    return ( 
        <div className='form-content'>
            <h4 align="center"> Sign-up here...</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" /* value={ email }*/
                        onChange={ handleChange/*(e) => setEmail(e.target.value)*/ } placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">  
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" /*value={ password }*/
                        onChange={ handleChange/*(e) => setPassword(e.target.value)*/ } placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit} type="submit">
                    Signup
                </Button>
            </Form>
        </div>
     );
}
 
export default Signup;