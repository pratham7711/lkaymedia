// import Navbar from '../components/Navbar';
// import Banner from '../components/Banner';
// import ImageCarousal from '../components/ImageCarousal';
// import ClientCarousal from '../components/ClientCarousal';
// import Guides from '../components/Guides';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';

// const HomePage = () => {
//   return (
//     <div className="h-auto">
//       <Navbar />
//       <Banner />
//       <ImageCarousal />
//       <ClientCarousal />
//       <Guides />
//       <Contact />
//       <Footer/>
//     </div>
//   );
// };

// export default HomePage;


import { useState, useEffect } from 'react'
import { Instagram, Facebook, Twitter, Linkedin, Mail, Menu, X } from 'lucide-react'

export default function HomePage() {
  const [days, setDays] = useState('00')
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')
  const [email, setEmail] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Set the launch date (30 days from now)
  useEffect(() => {
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 30)
    
    const timer = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()
      
      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((difference % (1000 * 60)) / 1000)
      
      setDays(d.toString().padStart(2, '0'))
      setHours(h.toString().padStart(2, '0'))
      setMinutes(m.toString().padStart(2, '0'))
      setSeconds(s.toString().padStart(2, '0'))
      
      if (difference < 0) {
        clearInterval(timer)
      }
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email)
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-purple-950 to-indigo-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-[200px] -left-[200px] w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-fuchsia-600/10 blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Mobile menu button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-6 right-6 z-50 text-white p-2 rounded-full bg-purple-900/50 backdrop-blur-sm"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-md transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-xl">
          <a href="#" className="hover:text-purple-400 transition-colors">About Us</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Services</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Portfolio</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
          <div className="flex gap-6 mt-8">
            <a href="#" className="hover:text-purple-400 transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-purple-400 transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-purple-400 transition-colors"><Twitter size={24} /></a>
            <a href="#" className="hover:text-purple-400 transition-colors"><Linkedin size={24} /></a>
          </div>
        </div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fadeInUp">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            LkayMedia
          </h1>
        </div>

        {/* Main content */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 animate-fadeInUp opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Launching Soon
          </h2>

          {/* Countdown timer */}
          <div className="grid grid-cols-4 gap-4 mb-12 animate-fadeInUp opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col">
              <div className="relative">
                <div className="w-full aspect-square bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl flex items-center justify-center border border-purple-700/50 shadow-lg backdrop-blur-sm">
                  <span className="text-3xl md:text-5xl font-bold text-white">{days}</span>
                </div>
                <div className="absolute inset-0 bg-purple-500/10 rounded-xl animate-pulse"></div>
              </div>
              <span className="text-purple-300 mt-2">DAYS</span>
            </div>
            
            <div className="flex flex-col">
              <div className="relative">
                <div className="w-full aspect-square bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl flex items-center justify-center border border-purple-700/50 shadow-lg backdrop-blur-sm">
                  <span className="text-3xl md:text-5xl font-bold text-white">{hours}</span>
                </div>
                <div className="absolute inset-0 bg-purple-500/10 rounded-xl animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span className="text-purple-300 mt-2">HOURS</span>
            </div>
            
            <div className="flex flex-col">
              <div className="relative">
                <div className="w-full aspect-square bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl flex items-center justify-center border border-purple-700/50 shadow-lg backdrop-blur-sm">
                  <span className="text-3xl md:text-5xl font-bold text-white">{minutes}</span>
                </div>
                <div className="absolute inset-0 bg-purple-500/10 rounded-xl animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="text-purple-300 mt-2">MINUTES</span>
            </div>
            
            <div className="flex flex-col">
              <div className="relative">
                <div className="w-full aspect-square bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl flex items-center justify-center border border-purple-700/50 shadow-lg backdrop-blur-sm">
                  <span className="text-3xl md:text-5xl font-bold text-white">{seconds}</span>
                </div>
                <div className="absolute inset-0 bg-purple-500/10 rounded-xl animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
              <span className="text-purple-300 mt-2">SECONDS</span>
            </div>
          </div>

          <p className="text-lg text-purple-200 mb-8 max-w-xl mx-auto animate-fadeInUp opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            We're crafting something extraordinary. Our creative marketing solutions are coming soon.
          </p>

          {/* Email subscription form */}
          <div className="max-w-md mx-auto animate-fadeInUp opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            {isSubmitted ? (
              <div className="bg-purple-900/30 backdrop-blur-sm p-4 rounded-lg border border-purple-700/50">
                <p className="text-green-400">Thank you! We'll notify you when we launch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-700" size={18} />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full pl-10 py-2 bg-purple-900/30 border border-purple-700/50 rounded-md text-white placeholder:text-purple-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 backdrop-blur-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 px-4 rounded-md"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Social media links */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 text-white/70 hidden md:flex">
          <a href="#" className="hover:text-purple-400 transition-colors"><Instagram size={20} /></a>
          <a href="#" className="hover:text-purple-400 transition-colors"><Facebook size={20} /></a>
          <a href="#" className="hover:text-purple-400 transition-colors"><Twitter size={20} /></a>
          <a href="#" className="hover:text-purple-400 transition-colors"><Linkedin size={20} /></a>
        </div>
      </main>
    </div>
  )
}

