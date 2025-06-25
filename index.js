import express from 'express';
import logsRouter from './routes/logsapiroutes.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
app.use(express.json());
app.use(errorHandler)


// Route for logs
app.use('/logs', logsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
