import Image1 from '../../assets/client1.png'
import Image2 from '../../assets/client2.png'
import Image4 from '../../assets/client4.png'
import Image5 from '../../assets/black17medianobg.png';
import Image3 from '../../assets/tribaltrapwhitelogo.webp';

const ClientCarousal = () => {

  return (
    <div className=" mt-[10rem] p-[2rem] flex items-center justify-between pl-[3rem] pr-[3rem] ">
      <img
        src={Image1}
        alt=""
        className='h-[5rem] w-[15rem]'
      />
      <img
        src={Image2}
        alt=""
        className='h-[5rem] w-[auto]'
      />
      <img
        src={Image4}
        alt=""
        className='h-[5rem] w-[auto]'
      />
      {/* <img
        src={Image5}
        alt=""
        className='h-[6rem] w-[auto]'
      /> */}
      <img
        src={Image3}
        alt=""
        className='h-[5rem] w-[auto]'
      />
    </div>

  );
};

export default ClientCarousal;
