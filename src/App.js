import { useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import MenuContainer from './components/MenuContainer'
import BannerContent from './components/BannerContent'
import MenuCard from './components/MenuCard'
import MenuCategory from './components/MenuCategory'

import bannerimage from './assets/bannerimage.jpg'
import lawsOfPower from './assets/selfhelpgenre.png'
import alchemy from './assets/questfictiongenre.jpg'
import hundredYears from './assets/magicalrealismgenre.jpg'
import americanah from './assets/romancegenre.jpg'

import {AiFillHome} from 'react-icons/ai'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import {MdFavorite} from 'react-icons/md'
import {FiSettings} from 'react-icons/fi'
import BookItemCard from './components/BookItemCard';

function App() {

  //const [bookCategories, setbookCategories] = useState(
    //{
      //selfHelp: false,
      //romance: false
    //}
  //)

  useEffect(()=>{
    const menuLi = document.querySelectorAll("#menu li");
    const categoriesCards = document.querySelector('.rowContainer').querySelectorAll('.rowMenuCategory')
    function setMenuAnimation(){
      menuLi.forEach(n => n.classList.remove("active"))
      this.classList.add("active")
    }

    function setCategoriesCards (){
      categoriesCards.forEach(n => n.classList.remove('active'))
      this.classList.add('active')
    }
    categoriesCards.forEach(n => n.addEventListener('click', setCategoriesCards))
    menuLi.forEach(n => n.addEventListener('click', setMenuAnimation));
  }, [])

  return (
    <div className='App'>
      {/*Header Section */}
        <Header />
      {/*Main Section */}
      <main>
        <div className='mainContainer'>
          <div className="banner">
            <img src={bannerimage} alt="banner" />
            <BannerContent discount={70} link={"#"}/>
          </div>
          <div className='bookContainer'>
            <div className='bookSort'>
              <MenuCard menutype={"Books"}/>
            </div>
            <div className='rowContainer'>
              <div>
                <MenuCategory imgSrc={lawsOfPower} genre={"Self-Help"} activeCategory={true} />
              </div>
              <div>
                <MenuCategory imgSrc={alchemy} genre={"Quest"} />
              </div>
              <div>
                <MenuCategory imgSrc={hundredYears} genre={"Magical Realism"} />
              </div>
              <div>
                <MenuCategory imgSrc={americanah} genre={"Romance"} />
              </div>
            </div>
            <div className='bookItemContainer'>
              <BookItemCard imgSrc={americanah} name={"Americah"} rating={0} worth={2500}/>
              <BookItemCard imgSrc={americanah} name={"Americah"} rating={0} worth={2500}/>
              <BookItemCard imgSrc={americanah} name={"Americah"} rating={0} worth={2500}/>
              <BookItemCard imgSrc={americanah} name={"Americah"} rating={0} worth={2500}/>
              <BookItemCard imgSrc={americanah} name={"Americah"} rating={0} worth={2500}/>
            </div>
          </div>
          <div className='rightMenu'>
          </div>
        </div>
      </main>
      {/*Footer Section */}
      <footer>
        <ul id='menu'>
          {/* Home Menu */}
          <MenuContainer link={"#"} icon={<AiFillHome />} content="Home" activeHome/>
          {/* Chat Menu */}
          <MenuContainer link={"#"} icon={<BsFillChatLeftTextFill />} content="Chat"/>
          {/* Favorite Menu */}
          <MenuContainer link={"#"} icon={<MdFavorite />} content="Favorite"/>
          {/* Settings Menu */}
          <MenuContainer link={"#"} icon={<FiSettings />} content="Settings"/>
          
          <div className="indicator"></div>
        </ul>
      </footer>
    </div>
  );
}

export default App;
