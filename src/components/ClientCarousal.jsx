import Image1 from '../../assets/client1.png'
import Image2 from '../../assets/client2.png'
import Image4 from '../../assets/client4.png'
// import Image5 from '../../assets/black17medianobg.png';
import Image3 from '../../assets/tribaltrapwhitelogo.webp';

const ClientCarousal = () => {

  return (
    <div>
      <h1 className="text-transparent mt-[10rem] h-[4rem] bg-[linear-gradient(90deg,_#74D4ED_43.35%,_#A7A8FF_50.76%,_#C994DF_67.5%,_#DAB4FF_77.93%)] bg-clip-text text-5xl font-bold my-12 align-center text-center">
      Our Clients
    </h1>
    <div className=" mt-[2rem] p-[2rem] flex items-center justify-between pl-[3rem] pr-[3rem] ">
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
    </div>
  );
};

export default ClientCarousal;
