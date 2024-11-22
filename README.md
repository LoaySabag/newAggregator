# News Aggregator

Project Description:
The News Aggregator is a web-based platform built using React and microservices architecture. The application gathers and displays the latest technology news, allowing users to customize their feeds based on preferences. It also includes a feature for summarizing articles and sharing updates via multiple communication channels such as email or SMS. This project leverages modern web technologies to deliver a fast and scalable news platform.

---


## **Technologies Used:**
- **Frontend**:
React: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
Axios: A promise-based HTTP client for making requests to APIs.

- **Backend**:Node.js: A JavaScript runtime for building server-side applications.
Express.js: A web framework for Node.js, used for creating the API layer.
MongoDB: A NoSQL database used for storing user preferences and article data.

- **Microservices**: Docker: A tool used for creating, deploying, and running applications in containers.
RabbitMQ: A message broker for handling communication between microservices.

- **Others**: OpenAI API: Used for summarizing articles to provide concise content for the user.
Redis: Used for caching frequently accessed data to improve performance.

---

## **Getting Started:**
To get this project up and running locally, follow these steps:
Prerequisites
Before starting, make sure you have the following installed:
- **NodeJS**
- **MongoDB**(or use a cloud database like MongoDB Atlas)
- **Docker**
Steps to Run Locally
1.	Clone the repository:
git clone https://github.com/LoaySabag/newAggregator.git
cd newAggregator
2.	Install dependencies:
Install frontend dependencies:
cd frontend
npm install
Install backend dependencies:
cd ../backend
npm install
3.	Start Docker for microservices:
In the root of the project, run:
docker-compose up
This will set up and run the microservices using Docker.
4.	Start the frontend and backend:
•	Frontend:
cd frontend
npm start
•	Backend:
cd backend
npm start
5.	Visit http://localhost:3000 in your browser to access the application.


## ** Architecture**
This application follows a microservices architecture for better scalability and modularity. The backend is split into multiple services that communicate with each other via RabbitMQ.
### Components 
- **Frontend:**
-	**Built with React, the frontend handles displaying news articles, user preferences, and summaries.**
-	**Backend:**
-	**A Node.js/Express API serves the data to the frontend, including the latest articles, summaries, and user preferences.**
-	**News Aggregator Microservice:**
-	**Responsible for fetching and aggregating news articles from various sources using external APIs.**
-	**Summarization Microservice:**
-	**Uses the OpenAI API to summarize lengthy articles for the user.**
-	**User Preferences Microservice:**
-	**Stores and manages user preferences regarding topics, display settings, and communication channels.**
#### Communication Microservice:
Handles sending news updates to users via email, SMS, or other platforms.
This architecture ensures each service can be scaled independently, allowing for better performance and easier maintenance.

---

## **Usage:**

Once you have the application running locally, here’s how you can interact with it:
User Interface
-	**View News: The homepage displays the latest technology news. Users can filter news based on their interests.**
-	**Customize Feed: Users can select topics they want to follow and receive personalized news updates.**
-	**Summarized Articles: Clicking on an article will show the full text along with a summarized version.**
-	**Share News: Users can share articles via email or SMS.**
#### API Endpoints**
Here are some of the key API endpoints available for interacting with the backend:
-	**GET /news: Fetches the latest news articles.**
-	**GET /preferences: Retrieves user-specific preferences for news topics.**
-	**POST /preferences: Allows users to update their preferences.**
-	**POST /summarize: Sends an article for summarization.**
