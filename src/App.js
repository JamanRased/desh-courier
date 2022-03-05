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
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Menu></Menu>
        <Routes>
         
          <Route path="/home" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/services" element={<Services />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
