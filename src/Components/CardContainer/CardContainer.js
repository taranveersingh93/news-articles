import './CardContainer.css'
import Card from './Card/Card'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import Searchbar from '../Searchbar/Searchbar'

const CardContainer = ({itemsOfInterest, error, loading, handleSearch, searchValue}) => {
  const itemsCode = itemsOfInterest.map(newsItem => {
    return <Card item={newsItem} />
  })

  return (
    <>
    {!error && !loading && <Searchbar searchValue={searchValue} handleSearch={handleSearch} />}
    {!error && !loading && <div className='card-container'>
        {itemsCode}
      </div>}
    {error && !loading && <Error />}
    {loading && <Loader />}
    </>
  )
}

export default CardContainer