import './CardContainer.css'
import Card from './Card/Card'
import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import Searchbar from '../Searchbar/Searchbar'
import backgroundVideo from '../../videos/background-video.mp4'

const CardContainer = ({itemsOfInterest, error, loading, handleSearch, searchValue}) => {
  const itemsCode = itemsOfInterest.map(newsItem => {
    return <Card item={newsItem} key={newsItem.id}/>
  })

  const videoSource = 'https://user-images.githubusercontent.com/122247155/267494885-d35ecedb-8f66-4801-8585-8bd9e7072120.mp4'
  
  return (
    <>
    {!error && !loading && <div>
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Searchbar searchValue={searchValue} handleSearch={handleSearch} />
      <div className='card-container'>
        {itemsCode}
      </div>
    </div>}
    {error && !loading && <Error />}
    {loading && <Loader />}
    </>
  )
}

export default CardContainer