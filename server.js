const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

// Database connection
const pool = new Pool({
  user: "admin",
  host: process.env.PGHOST || "192.168.1.110",
  database: "test_achal_2",
  password: "smartvm",
  port: 5432,
});

// Endpoint to test database connection
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database Error");
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
