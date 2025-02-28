import Image1 from '../../assets/client1.png';
import Image2 from '../../assets/client2.png';
import Image4 from '../../assets/client4.png';
import Image3 from '../../assets/tribaltrapwhitelogo.webp';

const images = [Image1, Image2, Image4, Image3];

const ClientCarousal = () => {
  return (
    <div className="mt-40 text-center overflow-hidden relative">
      <h1 className="text-transparent h-16 bg-gradient-to-r from-[#74D4ED] via-[#A7A8FF] to-[#DAB4FF] bg-clip-text text-5xl font-bold my-12">
        Our Clients
      </h1>
      <div className="w-full overflow-hidden relative">
        <div className="flex w-[200%] animate-scroll">
          {[...images, ...images,...images].map((image, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <img src={image} alt={`Client ${index + 1}`} className="h-20 max-w-64 mr-6 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCarousal;
