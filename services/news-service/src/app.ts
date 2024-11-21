import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import newsRoutes from "./routes/newsRoutes";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/news", newsRoutes);

// Dapr subscription endpoint
app.get("/dapr/subscribe", (req, res) => {
  const subscriptions = [
    {
      pubsubname: "pubsub",
      topic: "newsrequests",
      route: "news/newsrequests",
    },
  ];
  res.json(subscriptions);
});

export default app;
