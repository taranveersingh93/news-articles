import './CardContainer.css'
import Card from './Card/Card'
import Error from '../Error/Error'
import Navbar from '../Navbar/Navbar'

const CardContainer = ({newsItems, error}) => {
  const itemsCode = newsItems.map(newsItem => {
    return <Card item={newsItem} />
  })
  return (
    <>
    {!error && <div className='card-container'>
        {itemsCode}
      </div>}
    {error && <Error />}
    </>
  )
}

export default CardContainer