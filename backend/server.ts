import express from "express";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes.js";
import { initializeDatabase } from "./config/db.js";

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT || 3000);

  app.use(cors());
  app.use(express.json());
  app.use("/api", apiRoutes);

  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  await initializeDatabase();

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
