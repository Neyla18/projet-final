
import db from "../db.js"


//récupérer les 3 premiers evénements 
export const allNewEvents = (req,res)=>{
    const queryAllNewEvents = "SELECT * FROM events ORDER BY date_time DESC LIMIT 3";
 db.query(queryAllNewEvents,(err,result)=>{
 if(err){
   console.log(err)
 }
 else{
   res.send(result)
 }
})
}


// récupérer tous les événements
export const allEvents = (req,res)=>{
    const queryAllEvents = "SELECT * FROM events"
 db.query(queryAllEvents,(err,result)=>{
 if(err){
   console.log(err)
 }
 else{
   res.send(result)
 }
})
}

// récupérer le lieu de l'événement

export const allPlaces = (req,res)=>{
    const queryAllPlaces = "SELECT * FROM events"
 db.query(queryAllPlaces,(err,result)=>{
 if(err){
   console.log(err)
 }
 else{
   res.send(result)
 }
})
}

// insérer le lieu de l'événement 



export const addPlaces = (req,res)=>{
    const query = "INSERT INTO place(`title`) VALUES (?)";
 db.query(query,(err,result)=>{
 if(err){
   console.log(err)
 }
 else{
   res.send(result)
 }
})
}

// insérer l'événement


export const addEvents = (req,res)=>{
    const query =
    "INSERT INTO events (title, date_time, location, description,typeOfEvents, place_id) VALUES(?,?,?,?,?,?,?)";

const values = [
  req.body.title,
  req.body.date_time,
  req.body.location,
  req.body.description,
  req.body.typeOfEvents,
  req.place_id,
  ];

  console.log("Query:", query);
  console.log("Values:", values);

  db.query(query, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
});
}


//suprimer l'événement
export const deleteEvents = (req, res) => {
    const event = req.params.id;
    const query = "DELETE FROM events WHERE id = ?";
    
    db.query(query, [event], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  }

  

  //mettre à jour l'événement 
  export const updateEvents = (req, res) => {
    const eventId = req.params.id;
    const query =
     "UPDATE events SET `title`= ?, `date_time`= ?, `location`= ?, `description`= ?, `typeOfEvents`= ?, `place_id`= ? WHERE id = ?";
  
    const values = [
      req.body.title,
      req.body.date_time,
      req.body.location,
      req.body.description,
      req.body.typeOfEvents,
      req.body.place_id,
 
    ];
  
    db.query(query, values, (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  };
  