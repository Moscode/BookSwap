import {useEffect} from 'react'

const MenuCard = ({menutype}) => {
  useEffect(()=>{
    const booksSortMenu = document.querySelectorAll(".sortTab p")
    function addActiveClass(){
        booksSortMenu.forEach(n => n.classList.remove("active"))
        this.classList.add("active");
    }
    booksSortMenu.forEach(n => {
      return(
        n.addEventListener("click", addActiveClass)
      )
    })
  }, [])
  return (
    <div className='sortByPrice'>
        <h3>{menutype}</h3>
        <div className='price'>
            <p>Sort By:</p>
            <div className="sortTab">
                <p className='tab active'>Relevance</p>
                <p className='tab'>Price - Low To High</p>
                <p className='tab'>Price - High To Low</p>
            </div>
        </div>
    </div>
  )
}

export default MenuCard