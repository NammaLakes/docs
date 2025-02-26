# NammaLakes Documentation  

This repository contains the **Docusaurus-powered documentation** for the **NammaLakes** project, an IoT-based lake monitoring system.  

## Table of Contents  
- [Introduction](#introduction)  
- [Getting Started](#getting-started)  
- [Project Structure](#project-structure)  
- [System Architecture](#system-architecture)  
- [System Design](#system-design)  
- [Implementation](#implementation)  
- [Testing](#testing)  
- [Deployment](#deployment)  

## Introduction  

**NammaLakes** is an **IoT-based lake monitoring system** that tracks water quality, pollution levels, and environmental changes in real time. The system integrates **IoT sensors, cloud storage, and a web-based dashboard** to help authorities monitor water bodies effectively.  

This documentation provides an overview of the **architecture, implementation, and deployment** of the system.  

## Getting Started
Follow these steps to set up and run NammaLakes locally.  
 **Install Docusaurus**  
Run the following command to install Docusaurus:  
npx create-docusaurus@latest my-website classic  
**Or with Yarn:**  
yarn create docusaurus my-website classic  
 **Start the Development Server**  
Navigate to the project directory and run:  
cd my-website  
npm run start  
This will start a local development server at http://localhost:3000/.  

**Useful Commands:**  
Clone the repository:  
git clone https://github.com/NammaLakes/NammaLakes.git  

**Navigate into the project directory:**  
cd NammaLakes  

**Install dependencies:**  
npm install  

## Project Structure

**The NammaLakes repository is structured as follows:**  


/NammaLakes  
│── docs/                    # Documentation files (Markdown)  
│── src/                     # Custom components  
│── static/                  # Static assets  
│── docusaurus.config.ts      # Docusaurus configuration  
│── sidebars.ts               # Sidebar structure  
│── package.json              # Project dependencies  
│── README.md                 # Documentation overview  
## Useful Commands:  
**List all files in the project:**  
ls -R  

**Open project folder in VS Code:**  
code .  

## System Architecture  
**The NammaLakes system consists of the following key components:**  
**Frontend:** React + Docusaurus  
**Backend:** FastAPI / Node.js (Express)  
**Database:** PostgreSQL / MongoDB  
**IoT Devices:** ESP32 / Raspberry Pi  
**Deployment:** Docker, AWS/GCP  

**Key Features:**  
- Real-time data collection from multiple sensors.  
- Alerts & notifications for abnormal conditions.  
- Map integration for sensor locations.  
- REST API & MQTT for seamless integration.  

 ##  System Design  
The system consists of multiple IoT sensors deployed across lakes, communicating with a centralized backend that processes and visualizes the data.  
**IoT Sensors:** Measure parameters like pH, turbidity, temperature.  
**Edge Processing:** Data is filtered before transmission.  
**Cloud Backend:** Stores and processes sensor data.  
**Dashboard:** Interactive web UI for visualization.  

## 5. Implementation  
The implementation involves:  
Setting up IoT devices and configuring MQTT for communication.  
Developing the backend with FastAPI/Express.js for data ingestion.  
Designing the database schema in PostgreSQL/MongoDB.  
Building the frontend using React + Docusaurus for visualization.  
Deploying the system on AWS/GCP with Docker.  
**Useful Commands:**  
Run backend server locally:  
npm run dev  
Run database migrations:  
npx prisma migrate dev  

## 5.Testing  
To ensure the system runs smoothly, we perform:  
**Unit Testing:** Verify individual components (backend & frontend).  
**Integration Testing:** Ensure seamless data flow between devices & backend.  
**Performance Testing:** Measure system responsiveness under heavy loads.    
**Security Testing:** Identify vulnerabilities in data transmission.  

## 6. Deployment  
The system is containerized with Docker and deployed on AWS/GCP using:  
Docker Compose for managing multiple services.  
CI/CD pipelines with GitHub Actions.  
Cloud databases for high availability.  
Scalable API endpoints using AWS Lambda/FastAPI.  