import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = process.env.PORT || 3000;

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define a Todo interface
interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

// In-memory store for todos
let todos: Todo[] = [];

// Get all todos
app.get('/todos', (req: Request, res: Response) => {
  res.json(todos);
});

// Get a single todo by id
app.get('/todos/:id', (req: Request, res: Response) => {
  const todo = todos.find(t => t.id === req.params.id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// Create a new todo
app.post('/todos', (req: Request, res: Response) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newTodo: Todo = { id: uuidv4(), title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update an existing todo
app.put('/todos/:id', (req: Request, res: Response) => {
  const { title, completed } = req.body;
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  if (title !== undefined) {
    todo.title = title;
  }
  if (completed !== undefined) {
    todo.completed = completed;
  }
  res.json(todo);
});

// Delete a todo by id
app.delete('/todos/:id', (req: Request, res: Response) => {
  const index = todos.findIndex(t => t.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  const deletedTodo = todos.splice(index, 1)[0];
  res.json(deletedTodo);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
