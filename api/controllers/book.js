
import db from "../db.js"



//récupérer tous les livres


export const getBook = (req,res) => {

  const query ="SELECT * FROM book"
  db.query(query,(err,result)=>{
  if(err){
    console.log(err)
  }
  else{
    res.send(result)
  }
})
 ;}


 // récupérer les 3 nouveautés 


export const getNew = (req, res) => {
  const queryNewBook = "SELECT * FROM book ORDER BY dateOfPublication DESC LIMIT 3";
  db.query(queryNewBook, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
    } else {
      res.status(200).json(result);
    }
  });
};



export const getOne = (req, res) => {
  const bookId = req.params.id; 
  const queryBook = "SELECT * FROM book WHERE id = ?";
  
  db.query(queryBook, [bookId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Erreur lors de la récupération du livre" });
    } else {
      res.status(200).json(result);
    }
  });
};



  
  

// ajouter un nouveau livre



export const addBook = async (req, res) => {

  const query =
    "INSERT INTO book (title, author, dateOfPublication, editor, synopsis, genre_id, url_img) VALUES(?,?,?,?,?,?,?)";

  const values = [
    req.body.title,
    req.body.author,
    req.body.dateOfPublication,
    req.body.editor,
    req.body.synopsis,
    req.body.genre_id,
    req.body.url_img,
  ];

  console.log("Query:", query);
  console.log("Values:", values);

  db.query(query, values, (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
}




// supprimer le livre *
export const deleteBook = (req, res) => {
  const book = req.params.id;
  const query = "DELETE FROM book WHERE id = ?";
  
  db.query(query, [book], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
}




//modifier le livre
 
export const updateBook = (req, res) => {

  const bookId = req.params.id;
  const query =
    "UPDATE book SET `title`= ?, `author`= ?, `dateOfPublication`= ?, `editor`= ?, `synopsis`= ?, `genre_id`= ?, `url_img`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.author,
    req.body.dateOfPublication,
    req.body.editor,
    req.body.synopsis,
    req.body.genre_id,
    req.body.url_img,
  ];

  db.query(query, [...values, bookId], (err, data) => {
    if (err) {
      console.error("Error updating book:", err);
      return res.status(500).send(err); 
    }
    console.log("Book updated successfully:", data);
    return res.json(data);
  });
};

