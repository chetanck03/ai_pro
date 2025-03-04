import express, { Request, Response, NextFunction } from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { connectDB } from "./db";

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging Middleware for API Requests
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Start Server
(async () => {
  try {
    log("Starting server initialization...");

    // Connect to MongoDB
    log("Connecting to MongoDB...");
    await connectDB();
    log("MongoDB connection established");

    // Register Routes
    log("Setting up routes...");
    registerRoutes(app);
    log("Routes registered successfully");

    // Error Handling Middleware
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      console.error("Server error:", err);
      res.status(status).json({ message });
    });

    // Setup Vite for Development or Static Files for Production
    if (app.get("env") === "development") {
      log("Setting up Vite in development mode...");
      await setupVite(app);
      log("Vite setup complete");
    } else {
      log("Setting up static serving for production...");
      serveStatic(app);
      log("Static serving setup complete");
    }

    // Create HTTP Server
    const server = createServer(app);

    log(`Attempting to start server on port ${port}...`);
    server.listen(port, "127.0.0.1", () => {
      log(`🚀 Server is running on http://127.0.0.1:${port}`);
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
})();
