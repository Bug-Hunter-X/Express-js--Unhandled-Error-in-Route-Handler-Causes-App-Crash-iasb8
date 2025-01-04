const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Error fetching user:', err); // Log the error for debugging
      return res.status(500).json({ error: 'Failed to fetch user' }); // Send a user-friendly error response
    }
    res.json(user);
  });
});
//For better error handling, consider using a centralized error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});