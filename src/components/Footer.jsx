// import YouTubeIcon from '../assets/YouTubeIcon';
// import FaceBookIcon from '../assets/FaceBookIcon';
import LinkedinIcon from '../assets/LinkedinIcon';
import InstagramIcon from '../assets/InstagramIcon';
import Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className=" h-[18rem] flex flex-col text-white">
      <div>
        <img
         src={Logo}
          alt=""
          className=" h-[6rem] w-auto"
        />
      </div>
      <div className="flex items-center justify-between p-3">
        <div className="flex flex-col items-start text-[#d6d6d6] text-lg">
          <p>Beats to Buzz,</p>
          <p>Tracks to Trends</p>
        </div>
        <div className="flex flex-col items-start text-[#dddddd] text-lg mr-[3rem] gap-2">
          <p className="text-white">Follow us:</p>
          <div className="flex w-[8rem]">
            {/* <YouTubeIcon /> */}
            {/* <FaceBookIcon /> */}
            <a target='_blank' rel="noopener noreferrer" className='mr-3' href='https://www.linkedin.com/company/lkaymedia/'><LinkedinIcon/></a>
            <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/lkaymedia/'><InstagramIcon /></a>
          </div>
        </div>
      </div>
      <div className='p-2'>
      <hr className="border-t-2 border-[#dedede] w-[100%]" />
      </div>
      
      <div className="flex items-center gap-2  justify-between p-2 text-[#d5d5d5] text-sm">
        <p>Copyright © 2024 Concertly. All Right Reserved</p>
        <div className="flex items-center justify-between w-[11rem]">
          <p>Security</p>
          <hr className="w-3 h-full border-l-2 border-[#cccccc] transform rotate-90" />

          <p>Privacy</p>
          <hr className="w-3 h-full border-l-2 border-[#d5d5d5] transform rotate-90" />
          <p>Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
