import React from 'react';

import {  useNavigate} from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';

import { useState } from 'react';

import './auth.css'
const Admin = () => {
  
const [input, setInput] = useState({
  email:"",
  password:"",
 
});


const handleChange = (e) => {
  setInput({
    ...input,
      [e.target.name]: e.target.value,
  });

  console.log(input);

};

const navigate = useNavigate();
const [error, setError] = useState(null);


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      const res = await axios.post("http://localhost:5000/api/auth/login", input);

      console.log(res.data); 
     navigate("/tableau-de-bord");
  } catch (error) {
      console.error(error); 
      setError(error.response.data);
  
  }
};


  return (
  
<main class='auth-page'>

    <form  onSubmit={handleSubmit} >
    <legend>Connexion des membres</legend>
<label htmlFor="email"> Email : </label>
     <input type="email" name="email" onChange={handleChange} />
     <label htmlFor="motDepasse"> Mot de passe :  </label>
        <input required type="password" name="password" onChange={handleChange}/>
        <button type='submit'className='login'> SE CONNECTER</button>
     {error && <p>Votre mot de passe ou identifiant est  incorrect.  </p>}
        <span>Vous n'avez pas de compte ? <Link to="/inscription"> Inscrivez-vous </Link></span>
     
    </form>
</main>
)
};

export default Admin;


