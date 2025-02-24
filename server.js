const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

const PORT = process.env.PORT || 3001; // Changed from 3000 to 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});