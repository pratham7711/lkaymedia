import './App.css'
import { HeroParallaxDemo} from './components/demo/HeroParallaxDemo'
import Footer from './components/ui/Footer'
import lkaymedialogo from './assets/lkaymedialogo.jpg';
import CountUp from './components/ui/CountUp';
import Header from './components/ui/Header';
import video from './assets/bgvideo.mp4';
import { useRef } from 'react';
import ClientCarousel from './components/ClientCarousel';
import HowItWorks from './components/ui/HowItWorks';

const StatCard = ({ start, end, label, suffix }) => (
  <div className="flex flex-col items-center justify-center text-center w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="flex items-center justify-center text-4xl font-bold text-black mt-8">
      <CountUp start={start} end={end} duration={3} /> <h2 className="ml-1">{suffix}</h2>
    </div>
    <p className="text-gray-400 tracking-wider mt-1">{label}</p>
  </div>
);

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <Header scrollToContact={scrollToContact}/>
    <HeroParallaxDemo/>
    <div className="relative mt-screen pt-20 bg-white flex flex-col md:flex-row items-start justify-between">
      <div className="flex flex-col md:flex-row md:flex-wrap w-full md:w-2/3">
        <div className="flex flex-col items-center md:items-start w-full">
          <p className="text-gray-500 uppercase tracking-wide text-center md:text-left">CAMPAIGNS STATS</p>
          <h1 className="text-5xl font-bold text-black mt-2 relative pb-1 text-center md:text-left">
            'Lkay Media'
            <span className="absolute bottom-0 left-0 w-1/4 border-b-2 border-black"></span>
          </h1>
        </div>
        <StatCard start={0} end={5.5} label="VIEWS" suffix="B+" />
        <StatCard start={0} end={620} label="ENGAGEMENT" suffix="M+" />
        <StatCard start={0} end={500} label="CAMPAIGNS" suffix="+" />
        <StatCard start={0} end={300} label="CREATORS" suffix="+" />
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md">
          <img
            src="/path/to/laptop-image.jpg"
            alt="Laptop"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <video
              src="/path/to/video.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>
    </div>

    <HowItWorks/>

    <div className="flex flex-col md:flex-row items-center justify-between w-full bg-black p-8 shadow-lg mt-20 text-lg text-gray-200 font-sans space-y-8 md:space-y-0">
      <div className="flex-1 flex items-center justify-center">
        <img
          src={lkaymedialogo}
          alt="Descriptive Alt Text"
          className="rounded-full object-cover max-w-full h-auto"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-center p-8 text-gray-300">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-4 leading-10">
          We boost your music by featuring it in TikTok and Instagram Reels with various Influencers. Our packages ensure a certain number of views,
          helping your music reach new fans and encouraging other creators
          to use your track. Plus, our videos stay online forever, bringing
          in more views and streams even after your campaign ends.
        </p>
        <a
          href="/get-started"
          className="px-6 py-3 mt-8 bg-white text-gray-900 font-bold rounded transition-colors hover:bg-gray-200"
        >
          Get Started
        </a>
      </div>
    </div>

    <ClientCarousel />

    <div ref={contactRef} className="bg-black px-8 md:px-60 py-10 w-full mx-auto shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Contact Us</h2>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3  rounded focus:outline-none focus:ring-2 focus:ring-gray-500 text-white bg-gray-800"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3  rounded focus:outline-none focus:ring-2 focus:ring-gray-500 text-white bg-gray-800"
          required
        />
        <textarea
          placeholder="Your Message"
          className="p-3  rounded focus:outline-none focus:ring-2 focus:ring-gray-500 text-white bg-gray-800"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-gray-800 text-white font-bold py-2 rounded hover:bg-gray-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
    <Footer />
    </>
  )
}

export default App
