const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to get user data ...
  if (!userData) {
    return res.status(404).send('User not found'); // Correct handling
  }
  res.send(userData); 
});

app.get('/users', (req, res) => {
  // ... some database operation to get user data ...
  if (userData.length === 0) {   //Error: incorrect empty array check
    return res.status(404).send('No users found');
  }
  res.send(userData);
});

// ... rest of the Express app ...