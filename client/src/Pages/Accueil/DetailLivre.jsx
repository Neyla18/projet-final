import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailLivre = () => {
  const { id } = useParams();

  const [book, setBook] = useState({});

  useEffect(() => {
    const fetchBook = async (bookId) => {
      try {
        const response = await axios.get(`http://localhost:5000/api/book/getOne/${bookId}`);
        setBook(response.data[0]); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchBook(id);
  }, [id]); 
  return (
    <section>
  
      {book.url_img && <img src={book.url_img} alt={book.title} />}
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                    <h3>{book.editor}</h3>
                    <h4>{book.dateOfPublication}</h4>
                    <p>{book.synopsis}</p>
    </section>
  );
}

export default DetailLivre;
