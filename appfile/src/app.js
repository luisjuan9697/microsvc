import express from "express";
import path from "path";
import { fileURLToPath } from "url"; // Import fileURLToPath

import { pool } from "./database.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Define __dirname for ES Modules

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Welcome route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
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
