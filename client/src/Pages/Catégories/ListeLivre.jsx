import React from 'react';

const ListeLivre = ({ data }) => {
  if (data.length === 0) {
    return <p>Aucun livre correspond à votre recherche</p>;
  }

  return (
    <section>
      {data.map((item) => (
        <article key={item.id}>
          {item.url_img && <img src={item.url_img} alt={item.title} />}
          <h2>{item.title}</h2>
          <h3>{item.author}</h3>
          <h3>{item.editor}</h3>
          <h4>{item.dateOfPublication}</h4>
          <p>{item.synopsis}</p>
        </article>
      ))}
    </section>
  );
};

export default ListeLivre;
