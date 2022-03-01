import './App.css';
import Footer from './Components/Footer/Footer';
import Memories from './Components/Memories/Memories';
import Banner from './Components/Shared/Navbar/Banner/Banner';
import Menu from './Components/Shared/Navbar/Menu';
function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Banner></Banner>
      <Memories></Memories>
      <Footer></Footer>
    </div>
  );
}

export default App;
