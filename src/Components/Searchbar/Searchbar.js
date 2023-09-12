import crossIcon from '../../images/cross (1).png'
import searchIcon from '../../images/search (1).png'
import './Searchbar.css'

const Searchbar = ({handleSearch, searchValue}) => {
  return (
    <div className='search-container'>
      <input
      className='searchbar'
      name='searchbar'
      placeholder='Search for a keyword'
      type='text'
      value={searchValue}
      onChange={(e) => {handleSearch(e.target.value)}} />
      <div className='cross-container'>
        <img
          src={crossIcon}
          name='cross-icon'
          className='cross-icon'
          onClick={() => {handleSearch('')}} />
      </div>
    </div>
  )
}

export default Searchbar