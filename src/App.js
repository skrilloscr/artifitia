import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Wishlist from './pages/Wishlist';
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';
import Header from './navbar/Header';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        
      </Routes>
    </>
  );
}

export default App;
