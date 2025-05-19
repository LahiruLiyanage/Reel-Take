# ReelTake

A modern movie review platform built with Spring Boot and React, using a microservices architecture with separate backend and frontend components.

## Overview

ReelTake provides movie enthusiasts with a platform to discover, rate, and review films. The application combines a robust Spring Boot backend with MongoDB for data persistence and a responsive React frontend to deliver a seamless user experience.

## Features

- User authentication and profiles
- Movie browsing and searching
- Rating and review submission
- Personalized recommendations
- Responsive design for all devices

## Tech Stack

### Backend
- Java 21
- Spring Boot 3.x
- Spring Security
- Spring Data MongoDB
- MongoDB
- Maven

### Frontend
- React 18
- Redux for state management
- React Router
- Axios for API requests
- Styled Components
- Jest for testing

## Getting Started

### Prerequisites
- JDK 21+
- Node.js 16+
- npm 8+
- MongoDB

### Backend Setup
1. Clone the repository
   ```
   git clone https://github.com/yourusername/reeltake.git
   cd reeltake/backend
   ```

2. Configure database in `application.properties`
   ```
   spring.data.mongodb.host=localhost
   spring.data.mongodb.port=27017
   spring.data.mongodb.database=reeltake
   ```

3. Build and run the application
   ```
   ./mvnw spring-boot:run
   ```
   The backend will be available at `http://localhost:8080`

### Frontend Setup
1. Navigate to the frontend directory
   ```
   cd ../frontend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```
   The frontend will be available at `http://localhost:3000`

## API Documentation

API documentation is available at `http://localhost:8080/swagger-ui.html` when the backend is running.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) API for movie data
- All contributors and users of ReelTake

---

© 2025 ReelTake. All rights reserved.
