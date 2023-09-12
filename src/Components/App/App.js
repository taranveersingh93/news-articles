import './App.css';
import { useEffect, useState } from 'react';
import fetchArticles from '../../apiCalls';

function App() {
  const [newsItems, setNewsItems] = useState([])
  useEffect(() => {
    fetchArticles()
    .then(res => res.json())
    .then(data => {setNewsItems(data.articles)})
  }, [])

  useEffect(() => {
    console.log(newsItems)
  }, [newsItems])

  return (
<h1>test</h1>
  );
}

export default App;
