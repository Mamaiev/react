import React, {useState} from 'react';
import axios from "axios";
import './css/App.css';
import PhotoList from "./components/PhotoList";
import Map from "./components/Map";

function App() {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        const response = await axios.get('http://localhost:8080/all',);
        setPosts(response.data)
    }

    return(
        <div>
            <button onClick={fetchPosts}>GET ALL DATA</button>
            <div>
                <PhotoList photos={posts}/>
            </div>
            <Map/>
        </div>
    );
}

export default App;