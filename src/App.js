import './App.scss';
import Header from './components/header/Header';
import Service from './components/service/Service';
import transform from './assets/images/desktop/image-transform.jpg'
import standOut from './assets/images/desktop/image-stand-out.jpg'
import Feature from './components/feature/Feature';
import GraphicDesign from './assets/images/desktop/image-graphic-design.jpg'
import Photography from './assets/images/desktop/image-photography.jpg'
import Testimonial from './components/testimonial/Testimonial';
import Emily from './assets/images/image-emily.jpg'
import Thomas from './assets/images/image-thomas.jpg'
import Jennie from './assets/images/image-jennie.jpg'
import Display1 from './assets/images/desktop/image-gallery-milkbottles.jpg'
import Display2 from './assets/images/desktop/image-gallery-orange.jpg'
import Display3 from './assets/images/desktop/image-gallery-cone.jpg' 
import Display4 from './assets/images/desktop/image-gallery-sugarcubes.jpg'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Service index='1' title='Transform your brand' img={transform} description='We are a full-service creativerr agency specializing in helping brands grow fast. Engage your clinets through compelling visuals that do most of the marketing for you.' color='rgba(255, 209, 1, 0.55)' />
      <Service index='2' title='Stand out to the right audience' img={standOut} description='Using a collaborative formula of designers, researchers photographers, videographers, and copywriters, we will build and extend your brand in digital places.' color='rgba(255, 125, 109, 0.55)' />
      <div className="featureBox">
        <Feature title='Graphic Design' description='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client attention' img={GraphicDesign} />
        <Feature title='Photography' description='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.' img={Photography} />
      </div>
      <div className="testimonials">
        <h3>CLIENT TESTIMONIALS</h3>
        <div>
          <Testimonial name='Emily R.' position='Marketing Director' description='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.' img={Emily} />
          <Testimonial name='Thomas S.' position='Cheif Oprating Officer' description="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience." img={Thomas} />
          <Testimonial name='Jennie F.' position='Business Owner' description='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!' img={Jennie} />
        </div>
      </div>
      <div className="display">
        <img src={Display1} alt="display" />
        <img src={Display2} alt="display" />
        <img src={Display3} alt="display" />
        <img src={Display4} alt="display" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
