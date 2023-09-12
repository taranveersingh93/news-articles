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
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
    .then(data => {
      const refinedData = refineData(data.articles)
      setNewsItems(refinedData)
      setLoading(false)
      setError(false)
    })
    .catch(() => {
      setLoading(false)
      setError(true)
    })
  }, [])

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<CardContainer loading={loading} error={error} newsItems={newsItems}/>}/>
      <Route path='/:id' element={<DetailView loading={loading} error={error} newsItems={newsItems} />}/>
    </Routes>
    </>
    
  );
}

export default App;
