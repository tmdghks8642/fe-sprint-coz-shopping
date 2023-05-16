import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Main from './pages/Main'
import Bookmark from './pages/Bookmark';
import ProductList from './pages/ProductList';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/products/list' element={<ProductList/>}/>
          <Route path='/bookmark' element={<Bookmark/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
