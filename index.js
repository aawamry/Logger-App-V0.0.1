import express from 'express';
import logsRouter from './routes/logs.js';
import { logEvent } from './utils/logger.js';

const app = express();
app.use(express.json());

// POST route to simulate event logging
app.post('/simulate-event', async (req, res) => {
  const { event_type, event_subject, event_message, user_id, extra_data } = req.body;

  try {
    const result = await logEvent({ event_type, event_subject, event_message, user_id, extra_data });
    res.status(201).json({ message: 'Event logged', id: result.id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to log event' });
  }
});

// Route for logs
app.use('/logs', logsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
