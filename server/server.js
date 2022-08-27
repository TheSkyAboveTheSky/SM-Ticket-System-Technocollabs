const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

PORT = process.env.PORT || 3001;

app.use('/user',require('./routes/user'));
app.use('/task',require('./routes/task'));
app.use('/auth',require('./routes/auth'));
app.use('/timeline',require('./routes/timeline'));

app.listen(PORT , () => {
  console.log(`Listening on port ${PORT}\n To Stop listening press Ctrl+C\n`);
})