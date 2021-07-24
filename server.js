const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// --- --- ---
// API routes
// --- --- ---
app.use('/api/v1', require('./api/v1'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
