import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Livres = () => {
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

    const handleDelete = async (id) => {
        try {
           await axios.delete(`http://localhost:5000/api/book/deleteBooks/${id}`);
           window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section>
            {books.map((book) => (
                <article key={book.id}>
                    {book.url_img && <img src={book.url_img} alt={book.title} />}
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                    <h3>{book.editor}</h3>
                    <h4>{book.dateOfPublication}</h4>
                    <p>{book.synopsis}</p>
                    <div>
                        <button className="Modifier">
                            <Link to={`/modifier/${book.id}`}>Modifier</Link>
                            </button>
                        <button onClick={() => handleDelete(book.id)} className="Supprimer">Supprimer</button>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default Livres;
