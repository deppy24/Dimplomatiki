import {React, useState} from 'react';
import { Link, NavLink, useNavigate} from 'react-router-dom';
import { Button } from 'bootstrap';
import '../CSS FILES/login.css';
import axios from 'axios';


function Demo () {
  const [Email, getEmail] = useState();
  const [Password, getPassword] = useState();

  const handleSubmit =(event) =>{
  event.preventDefault();
  }
  const navigate = useNavigate();

  const handleButton =async(event) =>{
    event.preventDefault(); 
    switch (event.target.name) {
      default: break;
      case 'button':
      console.log("Με πάτησες")
      console.log(Email);
      console.log(Password);
      const request = await axios.post("http://localhost:8081/Login", {Email,Password})
      console.log(request)
      //να κανω μια ιφ για να ελεγχει αν ειναι σωστα η λαθοσ αυτα ποθ βαζει ο χρηστης
      navigate('/DBOARD');
      
    break;}
  }

  const handleChange =(event) =>{ 
    switch (event.target.name) {
    default: break;
    case 'Email':
      getEmail(event.target.value)
    break;
    case 'Password':
      getPassword(event.target.value)
    break;}
  event.preventDefault(); 
  }

  <div className='header'></div>
  return(
    <div className='screen'>
      <div className='loginpage'>
        <img className='img' src="https://files.codingninjas.in/article_images/custom-upload-1711630449-fc5893a1.webp" alt="logineikona" />
        <form action='' className='login' >
          <h3 className='h3'>Login</h3>
          <div className='loginfield'>
            <input type="text" onChange={handleChange} placeholder='Email' value={Email} name='Email' className='formtexts'></input>
          </div>
          <div className='loginfield'>
            <input type="text" onChange={handleChange} placeholder='Password' value={Password} className='formtexts' name='Password'></input>
          </div>
          <div className='oxiallo2'>
          <Link to='/DBOARD'><button onClick={handleButton}  name="button" type="button" class="btnbtn-success000">Login</button></Link> <br></br>
          <h5 className='h555'>If you do not have <br/> already an account,</h5>
          <Link to='/Signup'><button type="button" class="btnbtn-success111"  >Sign up</button></Link>
          </div>
        </form>
      </div>
    </div>
    
  )
} 

export default Demo;
//https://cdn-lite.ip2location.com/img/sign-up.png

//https://media.designrush.com/articles/265420/conversions/product-and-industrial-design-details.jpg
//https://i.pinimg.com/736x/87/66/47/8766471b7a37a6494326b4f934238638.jpg