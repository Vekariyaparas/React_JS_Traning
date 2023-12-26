import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// custom css 
import './style.css';
import './admincss.css';
// bts file here 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// slider cdn 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import customer page here 
import CustomerLayout from '../src/CustomerLayout';
import Shop from './Components/Customer/pages/Shop';
import About from './Components/Customer/pages/About';
import ShoppingCart from './Components/Customer/pages/ShoppingCart';
import Checkout from './Components/Customer/pages/Checkout';
import Contact from './Components/Customer/pages/Contact';
import Login from './Components/Customer/pages/Login';
import Register from './Components/Customer/pages/Register';


// import admin page here 
// import LoginPage from './Components/Admin/LoginPage';
import AdminLayout from './AdminLayout';
import AddSlider from './Components/Admin/pages/AddSlider';
import ManageSlider from './Components/Admin/pages/ManageSlider';
import UpdateSlider from './Components/Admin/pages/UpdateSliser';
import ManageContact from './Components/Admin/pages/ManageContact';
import ManageRegister from './Components/Admin/pages/ManageRegister';
import AddCategory from './Components/Admin/pages/AddCategory';
import ManageCategory from './Components/Admin/pages/ManageCategory';
import AddTrendyProducts from './Components/Admin/pages/AddTrendyProducts';
import ManageTrendyProducts from './Components/Admin/pages/ManageTrendyProducts';
import UpdateTrendyProduct from './Components/Admin/pages/UpdateTrendyProduct';
import AddArrivedProducts from './Components/Admin/pages/AddArrivedProducts';
import ManageArrivedProducts from './Components/Admin/pages/ManageArrivedProducts';
import UpdateArrivedProduct from './Components/Admin/pages/UpdateArrivedProduct';
import AddShopProduct from './Components/Admin/pages/AddShopProduct';
import ManageShopProduct from './Components/Admin/pages/ManageShopProduct';
import UpdateShopProduct from './Components/Admin/pages/UpdateShopProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

          {/* Customer page routing here  */}
        <Route path='/' element={<CustomerLayout />}></Route>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<ShoppingCart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        
        {/* Admin page routing here  */}
        {/* <Route path='/admin-login' element={<LoginPage/>}/> */}
        <Route path='/admin-dashboard' element={<AdminLayout />}></Route>
        <Route path='/admin-dashboard/add-slider' element={<AddSlider />}/>
        <Route path='/admin-dashboard/manage-slider' element={<ManageSlider />}/>
        <Route path='/updateslider/:id' element={<UpdateSlider />}/>
        <Route path='/admin-dashboard/manage-contact' element={<ManageContact />}/>
        <Route path='/admin-dashboard/manage-register' element={<ManageRegister />}/>
        <Route path='/admin-dashboard/add-category' element={<AddCategory />}/>
        <Route path='/admin-dashboard/manage-category' element={<ManageCategory />}/>
        <Route path='/admin-dashboard/add-trendy-products' element={<AddTrendyProducts />}/>
        <Route path='/admin-dashboard/manage-trendy-products' element={<ManageTrendyProducts />}/>
        <Route path='/admin-dashboard/updatetrendyproduct/:id' element={<UpdateTrendyProduct />}/>
        <Route path='/admin-dashboard/add-arrived-products' element={<AddArrivedProducts />}/>
        <Route path='/admin-dashboard/manage-arrived-products' element={<ManageArrivedProducts />}/>
        <Route path='/admin-dashboard/updatearriveproduct/:id' element={<UpdateArrivedProduct />}/>
        <Route path='/admin-dashboard/add-shop-products' element={<AddShopProduct />}/>
        <Route path='/admin-dashboard/manage-shop-products' element={<ManageShopProduct />}/>
        <Route path='/admin-dashboard/updateshopproduct/:id' element={<UpdateShopProduct />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
