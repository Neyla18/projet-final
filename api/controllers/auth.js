import bcrypt from "bcrypt";

import db from "../db.js";
import jwt from 'jsonwebtoken';
const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// Inscription
export const handleRegister = async (req, res) => {
  const query = "SELECT * FROM staff WHERE email = ? OR username = ?";
  db.query(query, [req.body.email, req.body.username], async (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.length) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await hashPassword(req.body.password);

    const insertQuery =
      "INSERT INTO staff(`email`, `username`, `password`) VALUES (?,?,?)";
    const values = [req.body.email, req.body.username, hashedPassword];

    db.query(insertQuery, values, (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(201).json({ message: "inserted successfully", result });
      }
    });
  });
};


// Connexion
export const handleConnection = async (req, res) => {
  const query = "SELECT email, password FROM staff WHERE email = ?";

  db.query(query, [req.body.email], async (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    if (result.length) {
      const isSame =   bcrypt.compare(req.body.password, result[0].password);
      console.log(isSame)
      if (isSame) {
          const token = jwt.sign({id:result[0].id}, "jwtkey",  { expiresIn: '1h' })
          const {email} = result[0]; 
          console.log(token)
          res.status(200).json({ success: true, message: 'Connexion réussie', data: { token, email } });

       
       
      
      } else {
        // Le mot de passe est incorrect
        res.status(401).json({ success: false, message: 'Échec de l\'authentification', data: null });

      }
    } else {
      res.status(401).json({ message: "Utilisateur non trouvé" });
    }

   
  });
  
};


// déconnexion 

export const logout = (req, res) => {
  const refreshToken = req.body.token;


  if (!refreshToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.status(200).json({ message: "User has been logged out." });
};

