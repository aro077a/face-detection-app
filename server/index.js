const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const PORT = process.env.PORT || 3000;
dotenv.config({ path: './config/config.env' });

app.use(express.static(publicPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
