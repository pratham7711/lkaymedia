import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ImageCarousal from '../components/ImageCarousal';
import ClientCarousal from '../components/ClientCarousal';
import Guides from '../components/Guides';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="h-auto">
      <Navbar />
      <Banner />
      <ImageCarousal />
      <ClientCarousal />
      {/* <Guides /> */}
      {/* <Contact /> */}
      {/* <Footer/> */}
    </div>
  );
};

export default HomePage;
