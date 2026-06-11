const express = require("express");

const PORT = 8000;
const app = express();

app.get("/menu", (req, res) => {
  res.status(200).json({ items: ["thali", "biryani"] });
});

app.post("/order", (req, res) => {
  const data = req.body;
  res.status(200).json({
    status: "received",
    order: data,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
