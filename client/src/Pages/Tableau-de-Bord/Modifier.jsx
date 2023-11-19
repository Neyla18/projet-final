import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Modifier = () => {


  const [genre, setGenre] = useState([]);
    useEffect(() => {
        const fetchGenre = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/genre/all');
                const data = await response.json();
                setGenre(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchGenre();
    }, []);  


  const [books, setBooks] = useState({
    title: "",
    author: "",
    editor: "",
    dateOfPublication: "",
    synopsis: "",
    url_img: "",
    genre_id: ""
});

const location = useLocation()
const bookId = location.pathname.split("/")[2];


const navigate = useNavigate();


const handleChange = (e) => {
    const { name, value } = e.target;
    setBooks({ ...books, [name]: value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  

  try {
    const url = `http://localhost:5000/api/book/updateBook/${bookId}`;
    console.log("URL:", url);
    
    await axios.put(url, books);
        

    
      navigate("/tableau-de-bord");

      window.location.reload(); 
   
  } catch (error) {
      console.log("Erreur :", error);
  }
};


  return (
    <form onSubmit={handleSubmit}>
    <h2> Modifier</h2>
   
    <input type='text' placeholder='Titre' onChange={handleChange} name='title' />
    <input type='text' placeholder='Auteur' onChange={handleChange} name='author' />
    <input type='text' placeholder='Editeur' onChange={handleChange} name='editor' />
    <input type='date' placeholder="Année de publication" onChange={handleChange} name="dateOfPublication" />
    <input type='text' placeholder='Résumé du livre' onChange={handleChange} name='synopsis' />
    <input type='url' placeholder="URL de l'image" onChange={handleChange} name='url_img' />           
     <select name='genre_id' id='' onChange={handleChange}>
      <option value=''>Sélectionner un genre</option>
      {genre.map((genres) => (
        <option key={genres.id} value={genres.id}>{genres.title}</option>
   
      ))}
         
    </select>
    <button type='submit'>Modifier</button>
  </form>
  )
}

export default Modifier