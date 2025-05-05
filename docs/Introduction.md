---
slug : /
---

#  Lake Monitoring System
## Why Use the Lake Monitoring System?
The **Lake Monitoring System** is utilized to ensure the sustainability and health of freshwater ecosystems. By continuously monitoring critical water quality parameters, it aids in detecting pollution, identifying trends, and enabling timely interventions to prevent ecological damage.

### What beats other similar systems?
- **Real-time Data Collection:** Essential for immediate detection of changes in water quality, enabling proactive measures.
Data gathered through various sensors installed all over the lake collected and preprocessed at node.

-**Scalability:** Provides scalable architecture that can be scaled to many number of operation sites based on need and demand or reduce the number of deployments.

- **Alerts & Notifications:** Critical for prompt responses to hazardous conditions, preventing long-term damage and manage abnormal conditions.Alerts or notifications can be sent over WhatsApp, Telegram or E-mail.

- **REST API & MQTT Support:** Ensures compatibility with existing systems, fostering seamless integration and scalability.

### Why such features in NammaLakes?
These features were chosen to address the core challenges in lake monitoring:
- **Real-time monitoring** ensures up-to-date information, crucial for dynamic ecosystems.
- **Visualization tools** like dashboards and maps enhance decision-making by presenting data intuitively.
- **Alerts** focus on safety and quick action, minimizing risks to aquatic life and human health.
- **Integration capabilities** future-proof the system, allowing it to evolve with technological advancements in a seemless manner .
By focusing on these targeted features, the system delivers a comprehensive, efficient, and user-friendly solution for lake monitoring.

The **Lake Monitoring System** is an advanced IoT-based solution designed to monitor and analyze real-time water quality parameters such as **temperature, pH**. This project helps researchers, environmentalists, and government agencies track lake health efficiently.

##  Features
-  **Real-time Data Collection** from multiple sensors.
-  **Interactive Dashboard** for visualization.
-  **Alerts & Notifications** for abnormal conditions.
-  **Map Integration** for sensor locations.
-  **REST API & MQTT** support for seamless integration.

##  Tech Stack
- **Frontend:** React (Docusaurus for documentation)
- **Backend:** FastAPI
- **Database:** PostgreSQL
- **IoT:** ESP32 / Raspberry Pi
- **Deployment:** Docker, AWS

##  Installation
1. **Clone the repository:**
```bash
git clone https://github.com/NammaLakes/nammalakes.git
cd nammalakes
```

2. **Install Python packages:**
```bash
cd backend
poetry install
```

3. **Spin up containers (RabbitMQ, DB, API):**

```bash
sudo docker compose up --build
```

4. **For the dashboard:**

```bash
cd dashboard
npm install
npm run dev
```

5. **And for documentation:**

```bash
cd docs
npm install
npm run start
```
