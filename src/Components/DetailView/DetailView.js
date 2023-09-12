import { useParams } from 'react-router-dom'
import './DetailView.css'
import { useState, useEffect } from 'react'

const DetailView = ({newsItems}) => {
  const [itemOfInterest, setItemOfInterest] = useState({})
  const itemID = useParams().id

  useEffect(() => {
    setItemOfInterest(newsItems[itemID])
  }, [newsItems])

  useEffect(() => {
    console.log(itemOfInterest)
  }, [itemOfInterest])

  
}

export default DetailView