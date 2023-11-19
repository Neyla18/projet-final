import express, { Router }  from "express";
import { getBook, addBook, getNew, updateBook,deleteBook, getOne} from "../controllers/book.js";



const router = express.Router();

router.get('/all', getBook)


router.get('/allNew', getNew)
router.get('/getOne/:id', getOne)
router.post("/addBook", addBook);
router.delete('/deleteBooks/:id', deleteBook);
router.put('/updateBook/:id', updateBook);

export default router;