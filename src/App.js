import './App.css';
import According from './Components/According/According';
import Footer from './Components/Footer/Footer';
import Memories from './Components/Memories/Memories';
import Plan from './Components/Plan/Plan';
import Banner from './Components/Shared/Navbar/Banner/Banner';
import Menu from './Components/Shared/Navbar/Menu';
function App() {
  return (
    <div className="App">

      <Menu></Menu>
      <Banner></Banner>
      <Memories></Memories>
      <Plan></Plan>
      <According></According>
      <Footer></Footer>
    </div>
  );
}

export default App;
