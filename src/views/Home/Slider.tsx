import { InfiniteSlider } from 'components';
import { useRef } from 'react';

const SliderImg = () => {
  const slider = useRef<InfiniteSlider>(null);

  return (
    <div>
      <InfiniteSlider
        ref={slider}
        {...{
          autoplaySpeed: 5000,
          autoplay: true,
          dots: false,
          arrows: false,
        }}
      >
        {[1, 2].map((item) => (
          <div className='relative'>
            <img
              className='h-[80vh] w-full'
              src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/ba-na-hill.jpg'
            />
            <div className='absolute top-0 z-20 h-[80vh] w-full bg-[#00000066]'></div>
            <div className='absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transform text-center text-[#FFF]'>
              <div className='whitespace-nowrap text-3xl font-extrabold lg:text-5xl'>
                CÔNG TY <span className='text-[#FF6600]'>MONA</span> TRAVEL
              </div>
              <p className='py-4 text-base font-extrabold lg:text-2xl'>Chuyên tổ chức các tour du lịch trong nước</p>
            </div>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
};

export default SliderImg;
