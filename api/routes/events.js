import express from 'express';
import { 
    addEvents,
    allEvents,
    allNewEvents, 
    allPlaces,
    addPlaces, 
 
 } from '../controllers/events.js';

const router = express.Router();

router.post('/add', addEvents)
router.get('/all', allEvents);
router.get('/allNew', allNewEvents)
router.get('/allPlaces', allPlaces);
router.get('/addPlaces', addPlaces);

export default router;