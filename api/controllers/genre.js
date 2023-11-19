import db from "../db.js"
// séléctionnner tous les genres des livres 
  
  export const getGenre = (req, res) => {
    const queryAllGenre ="SELECT * FROM book_genre"
    db.query(queryAllGenre,(err,result)=>{
    if(err){
      console.log(err)
    }
    else{
      res.send(result)
    }
  })
}
  

  
  
 export  const addGenre = (req, res) => {
    const query = "INSERT INTO book_genre(`title`) VALUES (?)";
    
    const values = [req.body.title];
     db.query(query,values, (err, result) => {
       if (err) {
         console.log(err);
         res.status(500).send("Une erreur s'est produite lors de l'insertion.");
       } else {
         res.status(201).json('inserted successfully'),result;
       }
     });
  
    };
  
  