import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = React.forwardRef((props, ref) => {
  const form = useRef();
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [showMessage, setShowMessage] = React.useState(0);
  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!email.trim() || !email.includes('@')) {
      setShowMessage(-1);
      setTimeout(() => setShowMessage(0), 3000);
      return;
    }

    
    if (!message.trim()) {
      setShowMessage(-2);
      setTimeout(() => setShowMessage(0), 3000);
      return;
    }
    

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      ).then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setEmail('');
          setMessage('');
          setShowMessage(1);
          setTimeout(() => setShowMessage(0), 3000); // Hide after 3 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div ref={ref} className="mt-[5rem] h-auto flex items-center justify-center">
      <div className=" w-[100%] p-[3rem] flex flex-col gap-2 items-center justify-center  text-white bg-[#2B2B2B]">
        <span className="text-[2.5rem] font-bold">
          Drop us a{' '}
          <span className="text-transparent bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
            message
          </span>
          , and we&apos;ll turn
          <br />
        </span>
        <span className=" text-[2.5rem] font-bold ">
          your music into a
          <span className="text-transparent bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text">
            {' '}
            social media sensation.
          </span>
        </span>
        <p className="text-lg text-[#cfcfcf] mt-[1rem]">
          Let us amplify your voice and transform it into a social media
          sensation.
        </p>
        <p className="text-lg text-[#cbcbcb]">
          Our team ensures your work gets the attention it deserves.
        </p>
        <form ref={form} className='w-[80%] mt-[1rem] flex flex-col items-center'>
          <input type="email" name="email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mb-8 bg-[#3A393A] w-[80%] p-3 text-[#e9e9e9]' placeholder='Email' />
          <input type="text" name="message" value={message}
            onChange={(e) => setMessage(e.target.value)} className='mb-10 bg-[#3A393A] w-[80%] h-20 p-3 text-[#eaeaea]' placeholder="Message" />
          <button type="submit" onClick={sendEmail} className='w-[40%] h-[3.5rem] bg-gradient-to-r from-[#74D4ED] via-[#A7A8FF] to-[#DAB4FF] font-bold transform transition-transform duration-300 hover:scale-105'>Get Started</button>
        </form>


        {(showMessage === 1) && (
          <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-5 rounded-lg shadow-md">
            Thank you for leaving a message! Our team will contact you shortly.
          </div>
        )}

        {(showMessage === -1) && (
          <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-5 rounded-lg shadow-md">
            Please provide a valid email.
          </div>
        )}

        {(showMessage === -2) && (
          <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-5 rounded-lg shadow-md">
            Please write a message.
          </div>
        )}


      </div>
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;
