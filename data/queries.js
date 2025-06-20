export const createEventsLogTable = () => `
  CREATE TABLE IF NOT EXISTS logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    user_id TEXT,
    extra_data TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

export const getAllLogsQuery = `SELECT * FROM logs ORDER BY created_at DESC`;

export const insertLogQuery = `
  INSERT INTO logs (type, subject, message, user_id, extra_data)
  VALUES (?, ?, ?, ?, ?)
`;

export const getLogByIdQuery = `SELECT * FROM logs WHERE id = ?`;
