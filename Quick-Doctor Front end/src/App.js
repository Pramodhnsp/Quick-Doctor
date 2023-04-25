import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup  from './Components/Signup';
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Forgotpassword from './Components/Forgotpassword';
import Login from './Components/Login';
import Resetpassword from './Components/Resetpassword';
import UserNavbar from './Components/UserNavbar';
import Doctor from './Components/Doctor';
import Merchant from './Components/Merchant';
import SelectedDoctor from './Components/SelectedDoctor';
import Selectedmerchant from './Components/Selectedmerchant';
import Userdashboard from './Components/Userdashboard';
import Appointments from './Components/Appointments';
import MerchantgCart from './Components/MerchantCart';
import UserHome from './Components/UserHome';
import Home from './Components/Home';
import Payment from './Components/Payment';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import Protect from './Components/Protect';
import DoctorSignup from './Components/DoctorSignup';
import MerchantSignup from './Components/MerchantSignup';
import Navbar from './Components/Navbar';
import DoctorHome from './Components/DoctorHome';
import DoctorNavbar from './Components/DoctorNavbar';
import MerchantHome from './Components/MerchantHome';
import MerchnatNavbar from './Components/MerchnatNavbar';
import AddProduct from './Components/AddProduct';
import DoctorAppointments from './Components/DoctorAppointments';
import ProductsToDoctors from './Components/ProductsToDoctors';
import UserCart from './Components/UserCart';
import MerchantOrders from './Components/MerchantOrders';
import Blob from './Components/Blob';

function App() {

  return (

   <div className="App">   
     <BrowserRouter>
     <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/Forgotpassword' element={<Forgotpassword/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Resetpassword' element={<Resetpassword/>}/>
        <Route path='/Usernavbar' element={<UserNavbar/>}/>
        <Route path='/Doctor' element={ <Protect child={<Doctor/>} ></Protect>}/>
        <Route path='/Merchant' element={ <Protect child={<Merchant/>}/>}/> 
        <Route path='/SelectedDoctor' element={ <Protect child={<SelectedDoctor/>}/>}/>
        <Route path='/Selectedmerchant' element={ <Protect child={<Selectedmerchant/>}/>}/>
        <Route path='/Userdashboard' element={ <Protect child={<Userdashboard/>}/>}/>
        <Route path='/Appointments'  element={ <Protect child={<Appointments/>}/>}/>
        <Route path='/MerchantgCart' element={ <Protect child={<MerchantgCart/>}/>}/>
        <Route path='/UserHome' element={ <Protect child={<UserHome/>}/>}/>
        <Route path='/Payment' element={ <Protect child={<Payment/>}/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/DoctorSignup' element={<DoctorSignup/>}/>
        <Route path='/MerchantSignup' element={<MerchantSignup/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/DoctorHome' element={<Protect child={<DoctorHome/>}/>}/>
        <Route path='/DoctorNavbar' element={<DoctorNavbar/>}/>
        <Route path='/MerchantHome' element={ <Protect child={<MerchantHome/>}/>}/>
        <Route path='/MerchantNavbar' element={<MerchnatNavbar/>}/>
        <Route path='/AddProduct' element={ <Protect child={<AddProduct/>}/>}/>
        <Route path='/DoctorAppointments' element={ <Protect child={<DoctorAppointments/>}/>}/>
        <Route path='/ProductsToDoctors' element={<Protect child={<ProductsToDoctors/>} />}/>
        <Route path='/UserCart' element={<Protect child={<UserCart/>}/>}/>
        <Route path='/MerchantOrders' element={<Protect child={<MerchantOrders/>}/>}/>
        <Route path='/blob' element={<Blob/>}/>
     </Routes> 
     </BrowserRouter>
     <Footer/>
    </div> 
  );
}

export default App;
