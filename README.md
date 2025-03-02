# NammaLakes Documentation  

This repository contains the **Docusaurus-powered documentation** for the **NammaLakes** project, an IoT-based lake monitoring system.  

## Table of Contents  
- [Introduction](#introduction)  
- [Getting Started](#getting-started)  
- [Project Structure](#project-structure)  
- [System Architecture](#system-architecture)  
- [System Design](#system-design)  


## Introduction  

**NammaLakes** is an **IoT-based lake monitoring system** that tracks water quality, pollution levels, and environmental changes in real time. The system integrates **IoT sensors, cloud storage, and a web-based dashboard** to help authorities monitor water bodies effectively.  

This documentation provides an overview of the **architecture, implementation, and deployment** of the system.  

## Getting Started
Follow these steps to set up and run NammaLakes locally.    
 **Start the Development Server**  
Navigate to the project directory and run:
```
npm i
npm run start      
```  

This will start a local development server at http://localhost:3000/.  

**Useful Commands:**  
Clone the repository: 
``` 
git clone https://github.com/NammaLakes/NammaLakes.git  
```
**Navigate into the project directory:**  
```
cd NammaLakes  
```
**Install dependencies:**
```  
npm install 
```

## Project Structure

**The NammaLakes repository is structured as follows:**  

```
/NammaLakes  
│── docs/                    # Documentation files (Markdown)  
│── src/                     # Custom components  
│── static/                  # Static assets  
│── docusaurus.config.ts      # Docusaurus configuration  
│── sidebars.ts               # Sidebar structure  
│── package.json              # Project dependencies  
│── README.md                 # Documentation overview  
```

## System Architecture  
**The NammaLakes system consists of the following key components:**  
**Frontend:** React+Vite (Dashboard), Docusaurus (Documentation)
**Backend:** FastAPI  
**Database:** PostgreSQL
**IoT Devices:** ESP8266 (NodeMCU) / Raspberry Pi  
**Deployment:** Docker, AWS/GCP  

**Key Features:**  
- Real-time data collection from multiple sensors.  
- Alerts & notifications for abnormal conditions.  
- Map integration for sensor locations.  
- REST API & MQTT for seamless integration.  

 ## System Design  
The system consists of multiple IoT sensors deployed across lakes, communicating with a centralized backend that processes and visualizes the data.  
**IoT Sensors:** Measure parameters like pH, turbidity, temperature.  
**Edge Processing:** Data is filtered before transmission.  
**Cloud Backend:** Stores and processes sensor data.  
**Dashboard:** Interactive web UI for visualization.  