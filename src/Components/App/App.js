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
  const [itemsOfInterest, setItemsOfInterest] = useState([])
  const [searchValue, setSearchValue] = useState("")
  
  useEffect(() => {
    setItemsOfInterest(newsItems.filter(item => matchSearch(searchValue, item)))
  }, [newsItems, searchValue])
  
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
  
    const matchSearch = (keyword, item) => {
      return item.title.toLowerCase().includes(keyword.toLowerCase())
    }
    
    const handleSearch = searchText => {
      setSearchValue(searchText)
    }
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<CardContainer
        handleSearch={handleSearch}
        searchValue={searchValue}
        itemsOfInterest={itemsOfInterest}
        loading={loading}
        error={error}
        newsItems={newsItems}/>}/>
      <Route path='/:id' element={<DetailView loading={loading} error={error} newsItems={newsItems} />}/>
    </Routes>
    </>
    
  );
}

export default App;
