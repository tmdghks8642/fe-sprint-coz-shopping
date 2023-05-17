import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Main from './pages/Main'
import Bookmark from './pages/Bookmark';
import ProductList from './pages/ProductList';
import { useEffect, useState } from 'react';

function App() {
 const [Bookmarkitems, SetBookmarkitems] = useState([])
 let getItem = JSON.parse(localStorage.getItem('Items'))

 useEffect(()=>{
  SetBookmarkitems(getItem)
 },[])


  return (
  <>  
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Main Bookmarkitems={Bookmarkitems} SetBookmarkitems={SetBookmarkitems}/>}/>
          <Route path='/products/list' element={<ProductList SetBookmarkitems={SetBookmarkitems}/>}/>
          <Route path='/bookmark' element={<Bookmark SetBookmarkitems={SetBookmarkitems}/>}/>
        </Routes>
      <Footer/>
    </div>
  </>
  );
}

export default App;
