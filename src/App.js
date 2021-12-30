import './App.css';
import About from './components/About';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Team from './components/Team';
// import ImageSlider from './components/ImageSlider';
// import { SliderData } from './components/SliderData';
import Homepage from './Homepage';

function App() {
  return (
    <>
      <Navbar/>
      <Homepage/>
       <About/>
       <Team/>
       {/* <ImageSlider slides={SliderData} />; */}
       <Newsletter/>
       <ContactPage/>
       <Footer/>
    </>
  );
}

export default App;
