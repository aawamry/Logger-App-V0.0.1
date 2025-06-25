import { initEventsLogDB } from "../data/logsdatabase.js";
import { insertLogQuery } from '../data/queries.js';


export async function logEvent({
  type,
  subject,
  message,
  user_id = null,
  extra_data = null,
}) {
  const dbInstance = await initEventsLogDB();

  return new Promise((resolve, reject) => {
    dbInstance.run(
      insertLogQuery,
      [
        type,
        subject,
        message,
        user_id,
        JSON.stringify(extra_data),
      ],
      function (err) {
        if (err) {
          console.error('❌ Logger Error:', err.message);
          return reject(err);
        }
        console.log('📝 Event Logged:', event_message);
        resolve({ id: this.lastID });
      }
    );
  });
}
