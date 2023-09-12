import './CardContainer.css'
import Card from './Card/Card'

const CardContainer = ({newsItems}) => {
  const itemsCode = newsItems.map(newsItem => {
    return <Card item={newsItem} />
  })
  return (
    <div className='card-container'>
      {itemsCode}
    </div>
  )
}

export default CardContainer