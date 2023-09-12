import './App.css';
import { useEffect, useState } from 'react';
import fetchArticles from '../../apiCalls';
import CardContainer from '../CardContainer/CardContainer';
import refineData from '../../helperFunctions';
import {Route, Routes} from 'react-router-dom'
import ReactDOM from 'react-dom';

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

  return (
    <Routes>
      <Route path='/' element={<CardContainer newsItems={newsItems}/>}/>
      <Route path='/:id' element={<h1>her</h1>} />
    </Routes>
    
  );
}

export default App;
