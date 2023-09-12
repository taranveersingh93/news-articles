import { useParams } from 'react-router-dom'
import './DetailView.css'
import { useState, useEffect } from 'react'
import { humanizeDate } from '../../helperFunctions'
import { render } from '@testing-library/react'
import Error from '../Error/Error'

const DetailView = ({newsItems}) => {
  const [itemOfInterest, setItemOfInterest] = useState({})
  const itemID = useParams().id
  const [renderState, setRenderState] = useState(false)

  useEffect(() => {
    setItemOfInterest(newsItems[itemID])
  }, [newsItems])

  useEffect(() => {
    if (!itemOfInterest?.id) {
      setRenderState(false)
    } else {
      setRenderState(true)
    }
  }, [itemOfInterest])

  
  return (
    <>
      {renderState && <div className='details-view'>
        <img src={itemOfInterest.image} className='details-img'/>
        <div className='text-box'>
          <p className='details-date'>{humanizeDate(itemOfInterest.date)}</p>
          <h2 className='details-title'>{itemOfInterest.title}</h2>
          <p className='details-article'>{itemOfInterest.description}</p>
        </div>
        <p className='details-source'>Source: {itemOfInterest.source}</p>
        <p className='author'>Author: {itemOfInterest.author? itemOfInterest.author: 'N/A'}</p>
      </div>}
      {!renderState && <Error />}
    </>
  )
}

export default DetailView