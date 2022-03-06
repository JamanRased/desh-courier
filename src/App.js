import './App.css';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Shared/Navbar/Menu';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Services from './Components/Services/Services';
import Booking from './Components/Booking/Booking';
import AddServices from './Components/Admin/AddServices/AddServices';
import Contact from './Components/Contact/Contact';
import Help from './Components/Help/Help';
import Blog from './Components/Blog/Blog';
import Admin from './Components/Admin/Admin/Admin';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Menu></Menu>
        <Routes>
        <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/home" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/services" element={<Services />}>
          </Route>
          <Route path="/booking/:serviceId" element={<Booking />}>
          </Route>
          <Route path="/addnewservice" element={<AddServices />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route path="/help" element={<Help />}>
          </Route>
          <Route path="/blog" element={<Blog />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
          <Route path="/adminDashboard" element={<Admin />}>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
