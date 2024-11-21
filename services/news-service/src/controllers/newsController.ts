import { Request, Response } from "express";
import { DaprClient, CommunicationProtocolEnum, HttpMethod } from "@dapr/dapr";
import { fetchNews, sendNews } from "../services/newsService";

const daprPort = process.env.DAPR_HTTP_PORT ?? "3500";
const daprClient = new DaprClient(
  "127.0.0.1",
  daprPort,
  CommunicationProtocolEnum.HTTP
);

export const requestNews = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;

    // Publish a message to the newsrequests topic
    await daprClient.pubsub.publish("pubsub", "newsrequests", { userId });

    res.status(202).json({
      message:
        "Request accepted. News will be sent via your preferred channel.",
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to process news request", details: error });
  }
};

export const processNewsRequest = async (req: Request, res: Response) => {
  const { userId } = req.body.data;

  try {
    // Invoke user-service to get user details
    const userResponse = await daprClient.invoker.invoke(
      "user-service",
      `users/${userId}`,
      HttpMethod.GET
    );
    const user = userResponse as any;

    const { preferences, communicationChannel, email } = user;

    // Fetch news based on preferences
    const newsArticles = await fetchNews(preferences);

    // Send news via communication channel
    await sendNews(communicationChannel, email, newsArticles);

    res.status(200).send();
  } catch (error) {
    console.error("Error processing news request:", error);
    res.status(500).send();
  }
};
