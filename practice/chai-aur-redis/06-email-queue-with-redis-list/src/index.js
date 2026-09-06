import express from "express";
import Redis from "ioredis";

const app = express();
app.use(express.json());

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

const EMAIL_QUEUE_KEY = "queue:emails";

app.post("/emails", async (req, res) => {
  const { to, subject, body } = req.body;
  if (!to || !subject || !body) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const job = {
    to,
    subject,
    body,
    createdAt: new Date().toISOString(),
  };
  await redis.lpush(EMAIL_QUEUE_KEY, JSON.stringify(job));
  res.status(200).json({ message: "Email job queued successfully" });
});

app.get("/emails/process-one", async (req, res) => {
  const rawJob = await redis.rpop(EMAIL_QUEUE_KEY);
  if (!rawJob) {
    return res.status(404).json({ message: "No email jobs in the queue" });
  }
  const job = JSON.parse(rawJob);
  res.status(200).json({ message: "Email job processed", job });
});

app.get("/emails/queue", async (req, res) => {
  const queueLength = await redis.llen(EMAIL_QUEUE_KEY);
  const jobs = await redis.lrange(EMAIL_QUEUE_KEY, 0, -1);
  res
    .status(200)
    .json({ queueLength, jobs: jobs.map((job) => JSON.parse(job)) });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
