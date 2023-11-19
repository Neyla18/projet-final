import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Deconnexion = () => {
  // à ranger
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/logout",
        { token: "your_access_token_here" }
      );
      console.log(response.data);

      navigate("/admin");

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return <button onClick={handleLogout}>Se déconnecter</button>;
};



export default Deconnexion;
