﻿# News Aggregation Microservices

A microservice-based system that aggregates news and technology updates based on user preferences, uses AI for summarization, and sends notifications through preferred channels.

---

## **System Architecture**
This project consists of the following services:
1. **User Service**: Manages user registration and preferences.
2. **News Service**: Fetches and processes news based on preferences.
3. **Notification Service**: Sends notifications via email, Telegram.
4. **API Gateway (Optional)**: Routes requests to appropriate services.

---

## **Technologies Used**
- **Backend**: Node.js, Express.js
- **Containerization**: Docker, Docker Compose
- **Communication**: Dapr (HTTP and message queues)
- **Notifications**: Nodemailer, Telegram API, Slack Webhooks
- **AI Summarization**: OpenAI API (Optional: Semantic Kernel, LangChain)
- **Database**: In-memory database (extendable to MongoDB or Redis)

---

## **Setup Instructions**

### **Prerequisites**
- [Docker](https://www.docker.com/get-started)
- Node.js (for local testing)
- API Keys:
  - [NewsData.io](https://newsdata.io/)
  - Telegram Bot Token (for Telegram notifications)

---

### **Running the Project**

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd project-root
