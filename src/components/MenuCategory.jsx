import {FaGreaterThan} from 'react-icons/fa'

const MenuCategory = ({imgSrc, genre, activeCategory}) => {
  return (
    <div className={`rowMenuCategory ${activeCategory ? 'active': ''}`}>
        <div className='cardImg'>
            <img src={imgSrc} alt="" />
        </div>
        <h3>{ genre }</h3>
        <i className='genreToggle'>
          <FaGreaterThan />
        </i>
    </div>
  )
}

export default MenuCategory