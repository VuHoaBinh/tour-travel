import { InfiniteSlider } from 'components';
import { useRef } from 'react';

const SliderImg = () => {
  const slider = useRef<InfiniteSlider>(null);
  const images = [
    'https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/ba-na-hill.jpg',
    'https://vietnam.travel/sites/default/files/styles/top_banner/public/2021-05/Phu%20Quoc%20family%20guide.jpg',
    'https://cdn.forevervacation.com/uploads/media/images/uploaded_images/1674639365.jpg',
    'https://cdn.forevervacation.com/uploads/media/images/uploaded_images/1674639468.jpeg'
    ];
  return (
    <div>
      <InfiniteSlider
        ref={slider}
        {...{
          autoplaySpeed: 3000,
          autoplay: true,
          dots: false,
          arrows: false,
        }}
      >
        {images.map((image,item) => (
          <div className='relative'>
            <img
              className='h-[80vh] w-full'
              src={image}
              alt={`Slider Image ${item  + 1}`}
            />
            <div className='absolute top-0 z-20 h-[80vh] w-full bg-[#00000066]'></div>
            <div className='absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transform text-center text-[#FFF]'>
              <div className='whitespace-nowrap text-3xl font-extrabold lg:text-5xl'>
                WELCOME TO <span className='text-[#FF6600]'>SUNNY</span> TRAVEL
              </div>
              <p className='py-4 text-base font-extrabold lg:text-2xl'>Chuyên tổ chức các tour du lịch trong nước</p>
            </div>
          </div>
        ))}
        
      </InfiniteSlider>
      <div className='relative z-30'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 bg-[#00000066] text-center border-orange-500'>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <i className="fa-solid fa-location-arrow w-4 h-4 text-[black] dark:text-gray-400 mr-2"></i>
              <input
                type="text"
                className="bg-black-50 border border-orange-500 text-orange-900 text-lg rounded-lg block w-full p-3"
                placeholder="Bạn muốn đi đâu?"
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="Date"
                className="bg-black-50 border border-orange-500 text-orange-900 text-lg rounded-lg block w-full p-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderImg;
