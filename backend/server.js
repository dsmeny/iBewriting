import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "ok", data: "api response" });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
