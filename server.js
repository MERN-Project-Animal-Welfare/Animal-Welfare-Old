// server.js
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.post('/login', (req, res) => {
  // TODO: Implement login logic
  res.json({ message: 'Login endpoint reached' });
});

app.post('/register', (req, res) => {
  // TODO: Implement registration logic
  res.json({ message: 'Registration endpoint reached' });
});

app.get('/api/pets', (req, res) => {
  // In a real application, this data would come from a database
  const pets = [
    { id: 1, name: 'Buddy', species: 'Dog', breed: 'Golden Retriever', age: 3, description: 'Friendly and energetic' },
    { id: 2, name: 'Whiskers', species: 'Cat', breed: 'Tabby', age: 2, description: 'Playful and affectionate' },
    { id: 3, name: 'Rocky', species: 'Dog', breed: 'German Shepherd', age: 5, description: 'Loyal and protective' },
    { id: 4, name: 'Mittens', species: 'Cat', breed: 'Siamese', age: 1, description: 'Curious and talkative' }
  ];
  
  console.log(JSON.stringify(pets));
  res.json(pets);
});

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
