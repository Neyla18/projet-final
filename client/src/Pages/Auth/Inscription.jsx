import React, { useState } from "react";

import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';


import fondAuth from '../../assets/fond-auth.jpg'



const Inscription= () => {


const [input, setInput] = useState({
    username:"",
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
        const res = await axios.post("http://localhost:5000/api/auth/register", input);
        console.log(res.data); 
       navigate("/tableau-de-bord");
    } catch (error) {
        console.error(error); 
        setError(error.response.data);
    
    }
};

    return (
        <main className='auth-page'>
 
        <form onSubmit={handleSubmit} >
        <legend>Inscription </legend>
        <label for="nom d'utilisateur">Nom :</label>
            <input type="text" placeholder="Nom d'utilisateur" name="username" onChange={handleChange} />
            <label htmlFor="email"> Email : </label>
            <input type="email" placeholder='Email' name="email" onChange={handleChange} />
            <label htmlFor="Mot de passe"> Mot de passe :  </label>
            <input type="password" placeholder="Mot de passe" name='password' onChange={handleChange} />
            {error && <p> Vous êtes déja inscris </p>}
            <button type="submit" class='login'> Se connecter</button>
         
        </form>
    
    </main>
  
  )
  };
  
  export default Inscription;
  