import './Card.css'
import backIcon from '../../../images/back-icon (1).png'

const Card = ({item}) => {
  console.log(item)
  return (
    <div className='card'>
      <img className='card-img' src={item.image}/>
      <div className='card-text'>
        <h2>{item.title}</h2>
        <img className='back-icon' src={backIcon} />
      </div>
    </div>
  )
}

export default Card;