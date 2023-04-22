import {useState} from 'react'
import { MdFavorite } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'
const BookItemCard = ({ imgSrc, name, rating, worth }) => {
    const [isFavorite, setFavorite] = useState(false)
    const [ratingValue, setRatingValue] = useState(Math.floor(rating))

    const handleRating = (count) => {
        setRatingValue(count)
        console.log(count)
    }
  return (
    <div className='bookItemCard'>
        <div className='imgBox'>
            <img src={imgSrc} alt='' />
        </div>
         <div className={`isFavorite ${isFavorite ? 'active':''}`}
         onClick={() => setFavorite(!isFavorite)}>
            <MdFavorite />            
        </div>
        <div className='bookItemContent'>
            <h3>{name} by Chimamanda Adechi</h3>
            <div className='bookRating'>
                {Array.apply(null, {length: 5}).map((e, i)=>{
                    return(
                    <span key={i} className={`rating ${ratingValue > i? 'orange': 'gray'}`} onClick={() => handleRating(i + 1)}>
                    <AiFillStar />
                    </span>
                    )
                })}
                <span className='reviewCount'>(No reviews yet)</span>
            </div>
            <div className='bookWorth'>
                <span>Worth: #</span>{worth}
            </div>
        </div>
    </div>
  )
}

export default BookItemCard