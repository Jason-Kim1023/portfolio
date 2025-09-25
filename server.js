const express = require("express");
const path = require("path");

// server used to serve the React app
const app = express();

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
