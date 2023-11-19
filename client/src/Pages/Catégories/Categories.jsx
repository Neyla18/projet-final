import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BarreDeRecherche from './BarreDeRecherche';

const Categories = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
      const fetchBooks = async () => {
          try {
              const response = await axios.get('http://localhost:5000/api/book/all');
              setBooks(response.data);
          } catch (error) {
              console.log(error);
          }
      };

      fetchBooks();
  }, []);


  return (
   <main>
    <h1>Tous les Livres</h1>
    <p>Bienvenue dans notre bibliothèque virtuelle où l'aventure littéraire ne connaît pas de limites ! Explorez notre vaste collection de livres qui couvre une variété de genres, d'auteurs renommés et d'histoires captivantes. Que vous soyez passionné de romans, de thrillers, de science-fiction, ou que vous cherchiez des œuvres classiques intemporelles,
        vous trouverez ici votre prochaine lecture inoubliable.</p>
<BarreDeRecherche/>
        <section>
            {books.map((book) => (
                <article key={book.id}>
                    <Link to={`/livre/${book.id}`}>
                   {book.url_img && <img src={book.url_img} alt={book.title} />}
                   </Link>
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                    <h3>{book.editor}</h3>
                    <h4>{book.dateOfPublication}</h4>
                    <p>{book.synopsis}</p>

                    </article>
            ))}
        </section>
   </main>

   
  )
}

export default Categories