import express from "express";
import Redis from "ioredis";

const app = express();
app.use(express.json());

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

function getKey(phone) {
  return `otp:${phone}`;
}

function generateOtp() {
  return Math.floor(10000 + Math.random() * 90000);
}

app.post("/otp", async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res
        .status(400)
        .json({ success: false, error: "Phone is required" });
    }
    const otp = generateOtp();
    await redis.set(getKey(phone), otp, "EX", 30);

    res
      .status(200)
      .json({ success: true, message: "Otp sent successfully", data: { otp } });
  } catch (error) {
    console.log("Error from generate otp:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.post("/otp-verify", async (req, res) => {
  try {
    const { phone, otp } = req.body;
    if (!phone || !otp) {
      return res
        .status(400)
        .json({ success: false, error: "Phone and otp are required" });
    }

    const existingOtp = await redis.get(getKey(phone));
    if (!existingOtp) {
      return res
        .status(404)
        .json({ success: false, error: "Invalid otp or expired" });
    }

    if (existingOtp !== otp) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid otp or expired" });
    }
    await redis.del(getKey(phone));
    res
      .status(200)
      .json({
        success: true,
        message: "Otp verified successfully",
        data: null,
      });
  } catch (error) {
    console.log("Error from verify otp:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.get("/:phone/ttl", async (req, res) => {
  try {
    const { phone } = req.params;
    const ttl = await redis.ttl(getKey(phone));

    res.status(200).json({
      success: true,
      message: "TTL fetched successfully",
      data: { ttl },
    });
  } catch (error) {
    console.log("Error from fetch TTL:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
