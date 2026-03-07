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
## Tech Stack

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

## System Architecture

1. **User Interaction Layer:**  
   Users interact with the application through a responsive **React (Vite)** frontend. The interface allows employees to be created, updated, viewed, and deleted through structured forms and a dynamic roster view. **React Router** manages client-side navigation, while **Axios** handles asynchronous HTTP requests to the backend API.
2. **API Communication Layer:**  
   The frontend communicates with the backend through a set of RESTful endpoints exposed by a **Spring Boot** application. These endpoints process incoming requests, perform validation, and coordinate the necessary database operations for employee record management.
3. **Application Logic & Persistence Layer:**  
   Business logic is implemented within the **Spring Boot service layer**, using **Spring Data JPA** and **Hibernate** for object-relational mapping. This abstraction allows Java entities to be seamlessly mapped to relational database tables while simplifying CRUD operations and maintaining clean separation between the API and persistence layers.
4. **Cloud Data Storage:**  
   All employee data is persisted in a **managed MySQL database hosted on Aiven**. The backend connects to the database using a secure **JDBC connection**, ensuring reliable data storage and retrieval within a cloud-managed relational database environment.
5. **Containerization & Deployment:**  
   The backend service is packaged into a **Docker container**, enabling consistent runtime environments across development and deployment. The containerized Spring Boot application is hosted on **Render**, while the React frontend is deployed on **Vercel**. Both platforms are connected to the GitHub repository, enabling **automatic CI/CD deployments** whenever new changes are pushed.
---
## UI Evolution & Platform Upgrades

This project originally began in **October 2025** as my first implementation of a full-stack **Spring Boot CRUD application** using a local MySQL database and a basic frontend interface.  
During later iterations, I significantly upgraded both the **user interface** and the **infrastructure architecture**, introducing containerization, cloud deployment, and a more refined UI/UX layer.

These improvements reflect a transition from a **local prototype** to a **cloud-ready full stack system**.

<br>

<div align="center">

| Initial Version (Oct 2025) | Upgraded Version |
|---|---|
| <img src="" width="450"/> | <img src="new-ui.png" width="450"/> |
| Basic Bootstrap-style interface with minimal styling. | Modernized UI with improved layout, color system, and component consistency. |

</div>

<br>

### Key Improvements

**User Interface Enhancements**
- Redesigned the layout with a more structured **staff dashboard interface**.
- Improved visual hierarchy for the **employee roster table**.
- Added a refined **color palette and component styling** for buttons and actions.
- Enhanced navigation flow for **employee creation and updates**.
- Introduced a more polished **search bar and action controls**.

**Infrastructure & Platform Upgrades**
- Migrated from **local MySQL** to **Aiven managed MySQL** for cloud-based persistence.
- Implemented **Docker containerization** for the Spring Boot backend to standardize runtime environments.
- Deployed the **React frontend to Vercel** and the **Spring Boot backend to Render**.
- Enabled **CI/CD style deployment pipelines** through Git-based automatic builds.

**Engineering Impact**
- Transitioned the project from a **locally running prototype** to a **cloud-deployed full stack application**.
- Practiced **containerization and deployment workflows**, which are critical for real-world backend engineering.
- Improved maintainability and scalability by separating **frontend, backend, and database services**.

## Challenges Faced During Development

### 1. Dockerizing a Spring Boot Application
**The Problem** :- During containerization, the backend container failed to start because the **MySQL JDBC driver was not being recognized within the container environment.
Although the project ran correctly locally, the Docker environment produced errors such as:
<br/>
``Cannot load driver class: com.mysql.cj.jdbc.Driver`` <br/>
**The Solution**:-
- Verified dependency packaging within the Spring Boot build.
- Ensured the **JAR file bundled all dependencies correctly**.
- Rebuilt the container with proper `Dockerfile` configuration.
- Driver configuration.
- Started running Aiven MySQL database and fixed wrong database specification issue in AIVEN_MYSQL_URI specification.

## Local Development Setup
#### Backend (Spring Boot)
1. cd ems-backend
2. mvn clean install
3. mvn spring-boot:run

#### Frontend (React)
1. cd ems-frontend
2. npm install
3. npm run dev

#### Docker Setup
1. docker build -t staffsync-backend .
2. docker run -p 8080:8080 staffsync-backend

## References

1. [Dependency 'mysql:mysql-connector-java:8.0.29' not found](https://stackoverflow.com/questions/72580794/dependency-mysqlmysql-connector-java8-0-29-not-found) | 2. [Deploying SpringBoot application in Render](https://medium.com/@pmanaktala/deploying-a-spring-boot-application-on-render-4e757dfe92ed)

---
<div align="center">
  
Made by **Neha K Vallappil** •
[LinkedIn](https://www.linkedin.com/in/nehakvallappil)
</div>
