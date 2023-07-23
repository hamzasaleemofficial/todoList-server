import express  from 'express'
const router = express.Router();
import  { addTodo , getAllTodos, toggleDoneTodo , updatedTodo , deleteTodo }  from '../contollers/todoController.js';

router.post('/todos', addTodo);
router.get('/todos', getAllTodos);
router.get('/todos/:id',toggleDoneTodo);
router.put('/todos/:id',updatedTodo);
router.delete('/todos/:id',deleteTodo);

export default router;

