import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      {/*Header Section */}
        <Header />
      {/*Main Section */}
      <main>
        <div className='mainContainer'>
          <div className='rightMenu'>
          </div>
        </div>
      </main>
      {/*Footer Section */}
      <footer>
        <ul id='menu'>
        
        </ul>
      </footer>
    </div>
  );
}

export default App;
