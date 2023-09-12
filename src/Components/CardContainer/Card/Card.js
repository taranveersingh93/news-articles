import './Card.css'
import backIcon from '../../../images/back-icon (1).png'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link to={`/${item.id}`}>
      <div className='card'>
        <img className='card-img' src={item.image}/>
        <div className='card-text'>
          <h2>{item.title}</h2>
          <img className='back-icon' src={backIcon} />
        </div>
      </div>
    </Link>
  )
}

export default Card;