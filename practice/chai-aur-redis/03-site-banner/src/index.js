import express from "express";
import Redis from "ioredis";

const app = express();
app.use(express.json());

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

const BANNER_KEY = "app:site:banner";

app.post("/banner", async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res
      .status(400)
      .json({ success: false, error: "Message is required" });
  }

  try {
    await redis.set(BANNER_KEY, message);

    res.status(200).json({
      success: true,
      message: "Banner message set successfully",
      data: message,
    });
  } catch (error) {
    console.error("Error setting banner message:", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to set banner message" });
  }
});

app.get("/banner", async (req, res) => {
  try {
    const response = await redis.get(BANNER_KEY);

    if (!response) {
      return res
        .status(404)
        .json({ success: false, message: "No data found", data: null });
    }

    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: response,
    });
  } catch (error) {
    console.log("Error from get banner:", error);
    res.status(500).json({
      success: false,
      error: "Failed to get banner message",
    });
  }
});

app.get("/banner/exists", async (req, res) => {
  try {
    const exists = await redis.exists(BANNER_KEY);

    res.status(200).json({ success: true, exists: Boolean(exists) });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to get banner key",
    });
  }
});

app.delete("/banner", async (req, res) => {
  try {
    await redis.del(BANNER_KEY);
    res.status(204).json({
      success: true,
      message: "Banner deleted successfully",
      data: null,
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on Port: 3000");
});
