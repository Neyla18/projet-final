import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListeLivre from './ListeLivre';

const BarreDeRecherche = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  const search = (data) => {
    const lowercaseQuery = query.toLowerCase();
    return data.filter((item) => item.title.toLowerCase().includes(lowercaseQuery));
  };

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
    <div>
      <input type="text" placeholder="Le Conte du Faux jumeaux" onChange={(e) => setQuery(e.target.value)} />
      <ListeLivre data={search(books)} />
    </div>
  );
};

export default BarreDeRecherche;
