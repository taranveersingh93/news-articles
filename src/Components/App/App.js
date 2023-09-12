import './App.css';
import { useEffect, useState } from 'react';
import fetchArticles from '../../apiCalls';
import CardContainer from '../CardContainer/CardContainer';
import Card from '../CardContainer/Card/Card';
import refineData from '../../helperFunctions';

function App() {
  const [newsItems, setNewsItems] = useState([])
  useEffect(() => {
    fetchArticles()
    .then(res => res.json())
    .then(data => {
      const refinedData = refineData(data.articles)
      setNewsItems(refinedData)
    })
  }, [])

  useEffect(() => {
    // console.log(newsItems)
  }, [newsItems])

  return (
    <CardContainer newsItems={newsItems}/>
  );
}

export default App;
