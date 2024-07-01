import express from "express";
import { pool } from "./database.js";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my app!");
});

// Endpoint to handle /ping
app.get("/ping", async (req, res) => {
  try {
    const [result] = await pool.query(`SELECT NOW() as now`);
    return res.json(result[0]);
  } catch (error) {
    console.error("Error querying database:", error);
    return res.status(500).json({ error: "Database query failed" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Internal server error:", err);
  res.status(500).json({ error: "Internal server error" });
});

export default app;

