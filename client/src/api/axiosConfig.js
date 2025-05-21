import axios from 'axios';

// Connect to local Spring Boot app
const instance = axios.create({
    baseURL: 'http://localhost:8080', // Your local Spring Boot server port
    headers: {
        "Content-Type": "application/json"
    }
});

export default instance;