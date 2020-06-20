const dotenv = require('dotenv');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config({ path: './config/config.env' });

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
