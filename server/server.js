const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const hebrewCommandRouter = require('./routes/hebrewCommands');
const { initializeDatabase } = require('./database/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/api', hebrewCommandRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'שגיאה בשרת' });
});

app.use('*', (req, res) => {
  res.status(404).json({ error: 'נתיב לא נמצא' });
});

initializeDatabase()
  .then(() => {
    console.log('Database initialized successfully');
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });