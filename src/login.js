import React, {  useState } from 'react';
import { useCookies } from 'react-cookie';
import { Form, Button } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';


function PlaintextExample() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['token']);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  

  const handleLogin = () => {
    // Validate the username and password

    // Set a cookie to indicate that the user is logged in

    // Redirect the user to the other page
    setCookie('token', 'a@122dfdfsdf');
 

    navigate('/ContactUs');
  };





  return (
 <>

    <Form  onSubmit={handleLogin} >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label style={{float: "left"}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={username} onChange={(e) => setUsername(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label style={{float: "left"}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </Form.Group>
      <Button variant="primary" size="lg" type="submit">
        Submit
      </Button>
    </Form>
 </>
  );
}

export default PlaintextExample;