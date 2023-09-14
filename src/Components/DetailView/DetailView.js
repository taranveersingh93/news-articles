import { useParams } from 'react-router-dom'
import './DetailView.css'
import { useState, useEffect } from 'react'
import { humanizeDate } from '../../helperFunctions'
import { Link } from 'react-router-dom'
import Error from '../Error/Error'
import backButton from '../../images/back-icon (1).png'
import Loader from '../Loader/Loader'

const DetailView = ({newsItems, error, loading}) => {
  const [itemOfInterest, setItemOfInterest] = useState({})
  const itemID = useParams().id
  const [renderState, setRenderState] = useState(false)

  useEffect(() => {
    setItemOfInterest(newsItems[itemID])
  }, [newsItems])

  useEffect(() => {
    console.log(itemOfInterest)
    if (!itemOfInterest?.description) {
      setRenderState(false)
    } else {
      setRenderState(true)
    }
  }, [itemOfInterest])

  useEffect(() => {
    console.log(renderState, loading)
  }, [renderState, loading])

  
  return (
    <>
      {renderState && !error && <div className='details-view'>
        <Link to='/' className='backLink'>
          <img className='back-button' src={backButton}/>
        </Link>
        <img src={itemOfInterest.image} className='details-img'/>
        <div className='text-box'>
          <p className='details-date'>{humanizeDate(itemOfInterest.date)}</p>
          <h2 className='details-title'>{itemOfInterest.title}</h2>
          <p className='details-article'>{itemOfInterest.description}</p>
        </div>
        <p className='details-source'>Source: {itemOfInterest.source}</p>
        <p className='author'>Author: {itemOfInterest.author? itemOfInterest.author: 'N/A'}</p>
      </div>}
      {error && !loading && <Error />}
      {!renderState && !loading && <Error />}
      {loading && <Loader />}
    </>
  )
}

export default DetailView