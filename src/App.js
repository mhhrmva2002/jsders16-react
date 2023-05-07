import './App.css';
import TaskOne from './components/TaskOne';
import TaskThree from './components/TaskThree';
import TaskTwo from './components/TaskTwo';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setPhotos(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <TaskOne />
      <TaskTwo />
      <TaskThree photos={photos} loading={loading}/>

    </>
  );
}

export default App;
