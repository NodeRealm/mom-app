# Family Hub Backend

This is a minimal Express.js server that provides stubbed endpoints for
family tracking features like tasks, meals, hygiene logs, schedules and
period tracking.

```
GET /api/tasks      - list tasks
POST /api/tasks     - add a task
GET /api/meals      - list meal records
POST /api/meals     - add a meal record
GET /api/hygiene    - list hygiene logs
POST /api/hygiene   - add a hygiene log
GET /api/schedule   - list schedule entries
POST /api/schedule  - add a schedule entry
GET /api/period     - list period logs
POST /api/period    - add a period log
```

Run the server locally:

```
npm install
node server.js
```

The data is stored in memory so it resets on every restart. Use this as
a starting point for a more robust implementation.
