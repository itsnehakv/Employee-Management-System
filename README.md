# StaffSync | Employee Management System

<div align="center"><a href="https://employee-management-system-itsnehakv.vercel.app" alt="StaffSync Live Dashboard"><img src="https://img.shields.io/badge/StaffSync_Live_Dashboard_↗-505081?style=for-the-badge" /></a>
 <br />
  <br />
  <br />
<p align="center">
    <kbd><b>PLATFORM WALKTHROUGH</b></kbd>
  </p>

  <img src="readmeassets/StaffSyncDemo.gif" width="900" alt="RetainAI Demo" />
</div>


## *Employee Management Platform*

**StaffSync** is a full-stack Employee Management System built with **Spring Boot, React, and MySQL** that enables organizations to manage employee records through a clean, responsive interface.
While the application itself is a **CRUD system**, the main goal of this project was to **practice modern full-stack architecture**, including:
- Backend development using **Spring Boot**
- **Containerization with Docker**
- **Cloud database integration (Aiven MySQL)**
- **CI/CD deployment pipelines using Vercel and Render**
This project represents my **first full-stack application built with the Spring ecosystem**, focusing on **maintainability, deployment automation, and real-world development workflows**.

### *Business Impact*
Manual record-keeping and local data storage create significant operational risks. This platform provides a centralized, cloud-integrated dashboard that eliminates data loss and ensures high accessibility. By implementing Dockerized deployment and automated CI/CD pipelines, the project demonstrates a 100% reduction in manual server configuration, allowing HR teams to focus on people rather than infrastructure stability.
<br>
<br>
<br> 
<div align="center">
<h4>• Core Implementation •</h4>
  
[![Spring Boot](https://img.shields.io/badge/Backend-SpringBoot-6DB33F?style=for-the-badge&logo=springboot)](https://spring.io/projects/spring-boot) •
[![React](https://img.shields.io/badge/Frontend-React-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/) • 
[![MySQL](https://img.shields.io/badge/Database-Aiven_MySQL-4479A1?style=for-the-badge&logo=mysql)](https://aiven.io/) •
[![Docker](https://img.shields.io/badge/Containerization-Docker-2496ED?style=for-the-badge&logo=docker)](https://www.docker.com/)
[![Render](https://img.shields.io/badge/Backend_Deployment-Render-46E3B7?style=for-the-badge)](https://render.com/)
[![Vercel](https://img.shields.io/badge/Frontend_Deployment-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

</div>
<div align="center">
<h5>• Languages •</h5>

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) 
![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

</div>

# Key Features

- **Employee CRUD Operations**  
  Add, update, and delete employee records through a RESTful backend.
- **Dynamic Employee Roster**  
  Displays employee data in a responsive table powered by React state management.
- **Form Validation & User Feedback**  
  Client-side validation with alert notifications for user actions.
- **Cloud Database Integration**  
  The application is deployed using a distributed cloud setup: the React frontend is hosted on **Vercel**, the Spring Boot backend runs on **Render**, and persistent data is stored in a **managed MySQL database on Aiven**.
# Tech Stack

| Category | Technology | Implementation |
|---|---|---|
| **Frontend** | React (Vite) | Single Page Application for employee management |
| **Frontend Styling** | Tailwind CSS | Responsive and modern UI styling |
| **Networking** | Axios | Asynchronous REST communication |
| **Backend** | Spring Boot | REST API layer for CRUD operations |
| **ORM** | Spring Data JPA + Hibernate | Object-relational mapping for MySQL |
| **Utilities** | Lombok | Reduces boilerplate code for entity models |
| **Database** | Aiven MySQL | Managed cloud relational database |
| **Containerization** | Docker | Backend packaged into portable container |
| **Deployment** | Render + Vercel | Cloud hosting with CI/CD integration |

---
