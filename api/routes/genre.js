import express from 'express';
import {getGenre, addGenre} from '../controllers/genre.js'



const router = express.Router();

router.get('/all', getGenre);
router.post('/all', addGenre);



export default router;