import './App.css';
import { useEffect, useState } from 'react';
import fetchArticles from '../../apiCalls';
import CardContainer from '../CardContainer/CardContainer';
import {refineData} from '../../helperFunctions';
import {Route, Routes} from 'react-router-dom'
import DetailView from '../DetailView/DetailView';
import Navbar from '../Navbar/Navbar';

function App() {
  const [newsItems, setNewsItems] = useState([])
  const [error, setError] = useState(true)

  useEffect(() => {
    fetchArticles()
    .then(data => {
      const refinedData = refineData(data.articles)
      setNewsItems(refinedData)
      setError(false)
    })
    .catch(() => {
      setError(true)
    })
  }, [])

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<CardContainer error={error} newsItems={newsItems}/>}/>
      <Route path='/:id' element={<DetailView newsItems={newsItems} />}/>
    </Routes>
    </>
    
  );
}

export default App;
