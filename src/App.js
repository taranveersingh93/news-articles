import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [newsItems, setNewsItems] = useState([])
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us', {
      method: 'GET',
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    }).then(res => res.json())
    .then(data => {console.log(data)})
  }, [])

  return (
<h1>test</h1>
  );
}

export default App;
