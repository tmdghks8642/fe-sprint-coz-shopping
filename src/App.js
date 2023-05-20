import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Main from './pages/Main'
import Bookmark from './pages/Bookmark';
import ProductList from './pages/ProductList';
import { useState } from 'react';

function App() {
  let getItem = JSON.parse(localStorage.getItem('Items'))
 const [bookmarkitems, setBookmarkitems] = useState(getItem)

  return (
  <>  
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Main bookmarkitems={bookmarkitems} setBookmarkitems={setBookmarkitems}/>}/>
          <Route path='/products/list' element={<ProductList setBookmarkitems={setBookmarkitems}/>}/>
          <Route path='/bookmark' element={<Bookmark bookmarkitems={bookmarkitems} setBookmarkitems={setBookmarkitems}/>}/>
        </Routes>
      <Footer />
    </div>
  </>
  );
}

export default App;
