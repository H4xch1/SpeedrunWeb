const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/DataBase/');

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Absensi SMK Citra Negara Is Running... 🟢');
});

const PORT = process.env.PORT || 1;

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di port ${PORT}`);
});