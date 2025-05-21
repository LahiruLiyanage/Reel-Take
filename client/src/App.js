import './App.css';
import api from './api/axiosConfig';
import {useEffect, useState} from "react";

function App() {

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {

        try {

            const response = await api.get(`/api/v1/movies`);

            console.log(response.data);

            setMovies(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovies();
    },[])

    return (
        <div className="App">
            <h1>Hello React</h1>
        </div>
    );
}

export default App;
