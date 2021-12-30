import './App.css';
import About from './components/About';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Showcase from './components/Showcase';
import Team from './components/Team';
// import Slider from './components/Slider';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

function App() {
  return (
    <>
      <Navbar/>
      <Showcase/>
      {/* <Slider/> */}
       <About/>
       <Team/>
       <ImageSlider slides={SliderData} />;
       <Newsletter/>
       <ContactPage/>
       <Footer/>
    </>
  );
}

export default App;
