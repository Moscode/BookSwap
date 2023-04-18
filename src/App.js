import { useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import MenuContainer from './components/MenuContainer'
import BannerContent from './components/BannerContent'
import MenuCard from './components/MenuCard'

import bannerimage from './assets/bannerimage.jpg'

import {AiFillHome} from 'react-icons/ai'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import {MdFavorite} from 'react-icons/md'
import {FiSettings} from 'react-icons/fi'


function App() {

  useEffect(()=>{
    const menuLi = document.querySelectorAll("#menu li");
    function setMenuAnimation(){
      menuLi.forEach(n => n.classList.remove("active"))
      this.classList.add("active")
    }
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
          <div className='rowContainer'></div>
          <div className='bookItemContainer'></div>
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
