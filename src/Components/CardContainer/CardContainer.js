import './CardContainer.css'
import Card from './Card/Card'
import Error from '../Error/Error'
import Navbar from '../Navbar/Navbar'
import Loader from '../Loader/Loader'

const CardContainer = ({newsItems, error, loading}) => {
  const itemsCode = newsItems.map(newsItem => {
    return <Card item={newsItem} />
  })
  return (
    <>
    {!error && !loading && <div className='card-container'>
        {itemsCode}
      </div>}
    {error && !loading && <Error />}
    {loading && <Loader />}
    </>
  )
}

export default CardContainer