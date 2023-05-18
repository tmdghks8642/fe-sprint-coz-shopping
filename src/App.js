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
 const [Bookmarkitems, SetBookmarkitems] = useState(getItem)

  return (
  <>  
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Main Bookmarkitems={Bookmarkitems} SetBookmarkitems={SetBookmarkitems}/>}/>
          <Route path='/products/list' element={<ProductList SetBookmarkitems={SetBookmarkitems}/>}/>
          <Route path='/bookmark' element={<Bookmark Bookmarkitems={Bookmarkitems} SetBookmarkitems={SetBookmarkitems}/>}/>
        </Routes>
      <Footer />
    </div>
  </>
  );
}

export default App;
