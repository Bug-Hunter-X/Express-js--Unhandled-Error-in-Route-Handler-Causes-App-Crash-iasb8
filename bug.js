const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Instead of throwing err, which crashes the app, send a 500 error
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(user);
  });
});