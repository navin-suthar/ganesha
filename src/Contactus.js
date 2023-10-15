import React from 'react';
import { useCookies } from 'react-cookie';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {

	const navigate = useNavigate();

	const [cookies, removeCookie] = useCookies(['token']);
  


	const handleLogout = () => {
	  // Delete the cookie
  
	  // Redirect the user to the home page

	// To remove the 'loginToken' cookie
	removeCookie('token');

	  navigate('/');
	};

return (
	<div>
	<h1>Contact Us Page</h1>
	<Button onClick={handleLogout}>Logout</Button>
	</div>
);
};

export default ContactUs;
