import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import CategoryOne from './Pages/CategoryOne';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Categories from './Pages/Categories';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/Ecommerce_Frontend_Assets/Assets/banner_mens.png'
import women_banner from './Components/Assets/Ecommerce_Frontend_Assets/Assets/banner_women.png'
import kid_banner from './Components/Assets/Ecommerce_Frontend_Assets/Assets/banner_kids.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/sliding' element={<CategoryOne banner={men_banner}category = 'sliding'/>} />
          <Route path='/bulletproof' element={<CategoryOne banner={women_banner} category = 'bulletproof'/>} />
          <Route path='/normal' element={<CategoryOne banner={kid_banner} category = 'normal'/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/login' element={<LoginSignUp />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
