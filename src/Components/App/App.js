import './App.css';
import { useEffect, useState } from 'react';
import fetchArticles from '../../apiCalls';
import CardContainer from '../CardContainer/CardContainer';
import {refineData} from '../../helperFunctions';
import {Route, Routes} from 'react-router-dom'
import ReactDOM from 'react-dom';
import DetailView from '../DetailView/DetailView';

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
      <Route path='/:id' element={<DetailView newsItems={newsItems} />}/>
    </Routes>
    
  );
}

export default App;
