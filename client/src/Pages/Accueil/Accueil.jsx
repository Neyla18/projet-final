import React, { useState, useEffect } from "react";

import photoAccueil from "../../assets/photo-home.jpg";
import { Link } from "react-router-dom";

import "./accueil.css"; 
const Accueil = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/book/allNew");
        console.log(response);
        const data = await response.json();
        setBooks(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <main className="accueil-main">
      <header>
        <img
          src={photoAccueil}
          alt="bibliothèque emeraude"
          className="photo-accueil"
        />

        <div className="bloc-accueil">
          <h1 className="bienvenue"> Bienvenue à la Bibliothèque Emeraude </h1>
          <p>
            La Bibliothèque Émeraude vous ouvre ses portes avec un trésor de
            mots et d'aventures à explorer, offrant une échappée passionnante à
            tous les amoureux des livres.
          </p>
          <Link to="/a-propos" className="link-Plus">
         
            En savoir plus
          </Link>
        </div>
      </header>

      <section className="section-nouveaute">
        <h2>Les Nouveautés</h2>
<div className="container-nouveaute">
    {books.map((book) => (
book.url_img && (
  <Link to={`/livre/${book.id}`}>
    <img src={book.url_img} alt={book.title} className='image_livre' />
  </Link>

)

))}
</div>
        <button className="categories">
          <Link to="/categories">Notre Collection</Link>
        </button>
      </section>

      <hr />

      <section>
        <h2 class='evenement'>Évenement virtuel </h2>
      </section>
    </main>
  );
};

export default Accueil;
