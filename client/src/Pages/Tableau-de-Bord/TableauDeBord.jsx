import React, { useEffect, useState } from 'react';
import Livres from './Livres';
import Deconnexion from './Deconnexion';
// import BarreDeRecherche from '../Catégories/BarreDeRecherche';


const TableauDeBord = () => {
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







    const [titleGenres, setTitleGenres] = useState({
        title: '',
    });

    const updateFormData = (e) => {
        const { name, value } = e.target;
        setTitleGenres({ ...titleGenres, [name]: value });
    };

    const [books, setBooks] = useState({
        title: "",
        author: "",
        editor: "",
        dateOfPublication: "",
        synopsis: "",
        url_img: "",
        genre_id: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBooks({ ...books, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      
  
      try {
          const response = await fetch('http://localhost:5000/api/book/addBook', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(books),

        
          });
  
          const data = await response.json();
          window.location.reload();
          console.log("Response:", data);
      } catch (error) {
          console.log("Error:", error);
      }
  };
  
  const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/genre/all', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(titleGenres),
            });

            const data = await response.json();
            window.location.reload();
            console.log(data);
            console.log(genre.title)
        } catch (error) {
            console.log('Error adding genre:', error);

        }
    };
return (
      <main>
        <section>
          <h1>Bonjour </h1>   
     <Deconnexion/>

          <form onSubmit={handleClick}>
            <h2> Ajouter un genre</h2>
            <input type="text" placeholder='titre' onChange={updateFormData} name='title' />
            <button type='submit'>Ajouter un genre</button>
          </form>
        </section>
  
        <section>
          <form onSubmit={handleSubmit}>
            <h2> Ajouter un livre</h2>
            <input type='text' placeholder='Titre' onChange={handleChange} name='title' />
            <input type='text' placeholder='Auteur' onChange={handleChange} name='author' />
            <input type='text' placeholder='Editeur' onChange={handleChange} name='editor' />
            <input type='date' placeholder="Année de publication" onChange={handleChange} name="dateOfPublication" />
            <input type='text' placeholder='Résumé du livre' onChange={handleChange} name='synopsis' />
            <input type='url' placeholder="URL de l'image" onChange={handleChange} name='url_img' />            <select name='genre_id' id='' onChange={handleChange}>
              <option value=''>Sélectionner un genre</option>
              {genre.map((genres) => (
                <option key={genres.id} value={genres.id}>{genres.title}</option>
           
              ))}
                 
            </select>
            <button type='submit'>Ajouter un livre</button>
          </form>
        </section>
        <Livres/>
      </main>
  )
}




export default TableauDeBord