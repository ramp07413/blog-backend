import express from 'express';
import { createCard, getCards, getCard, updateCard, deleteCard } from './controllers/card.controller.js';

const router = express.Router();

router.post('/cards', createCard);
router.get('/cards', getCards);
router.get('/cards/:id', getCard);
router.put('/cards/:id', updateCard);
router.delete('/cards/:id', deleteCard);

export default router;
