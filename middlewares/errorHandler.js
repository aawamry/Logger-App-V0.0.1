import { logEvent } from '..utils/logger.js';

export default async function errorHandler(err, req, res, next) {
  console.error('❌ Uncaught Error:', err.message);

  await logEvent({
    event_type: 'error',
    event_subject: req.originalUrl,
    event_message: err.message,
    user_id: req.user?.id || null, // assuming auth middleware sets req.user
    extra_data: {
      stack: err.stack,
      method: req.method,
      body: req.body,
      query: req.query,
    }
  });

  res.status(500).json({ error: 'Internal Server Error' });
}
