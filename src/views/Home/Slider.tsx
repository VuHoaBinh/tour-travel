import { InfiniteSlider } from 'components';
import { useEffect, useRef, useState } from 'react';
import "./Slider.scss";

const SliderImg = () => {
  const [isItemVisible, setIsItemVisible] = useState(false);

  const slider = useRef<InfiniteSlider>(null);
  const images = [
    'https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/ba-na-hill.jpg',
    'https://vietnam.travel/sites/default/files/styles/top_banner/public/2021-05/Phu%20Quoc%20family%20guide.jpg',
    'https://innoviet.com/upload/2020/Blog/best-places-to-travel-by-tour-guide/rice-terraces-innoviet-best-places-to-visit-by-tour-guide.jpg',
    'https://cdn.htmlForevervacation.com/uploads/media/images/uploaded_images/1674639468.jpeg'
  ];

  const toggleItemVisibility = () => {
    setIsItemVisible(!isItemVisible);
  };
  
  useEffect(() => {
    const handleClickOutside = () => {
      if (
        isItemVisible
        // && !event.target.closest('.item')
      ) {
        setIsItemVisible(isItemVisible);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isItemVisible]);


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
            <div className='absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transhtmlForm text-center text-[#FFF]'>
              <div className='whitespace-nowrap text-3xl font-extrabold lg:text-5xl'>
                WELCOME TO <span className='text-[#FF6600]'>SUNNY</span> TRAVEL
              </div>
              <p className='py-4 text-base font-extrabold lg:text-2xl'>Chuyên tổ chức các tour du lịch trong nước</p>
            </div>
          </div>
        ))}
        
      </InfiniteSlider>
      <div className='relative z-30 container'>
          <form className="absolute w-full mx-auto translate-x-1/4 -translate-y-1/2">
            <div className="flex items-center border-orange-950 border-400 py-2">
              <input className="appearance-none block bg-gray-200 w-1/3 text-gray-700 rounded-xl py-3 px-12 mb-3 border-20 border-orange-900" 
                type="text" 
                placeholder="Bạn muốn đi đâu?"
              />
              <button
              className={`appearance-none block bg-[#FFFFFF] w-1/3 text-gray-700 rounded-xl py-3 px-12 mb-3 border-20 border-orange-900 numberCustomer ${isItemVisible ? 'active' : ''}`}
              type="button"
              onClick={toggleItemVisibility}
              >
                <div className="box-title-user flex items-center">
                <i className="fa fa-users pr-10 pl-2"></i>
                <span className="count-people count-adult">1</span> người lớn, {""}
                <span className="count-people count-child"> 0 </span> trẻ em,{""}
                <span className="count-people count-infant"> 0 </span> em bé{""}
                <span className="caret"></span>
              </div>
              </button>
              
              {isItemVisible  && (
                  <div className="absolute top-16 z-30 bg-[#FFFFFF] w-1/4 rounded-xl py-3 px-6 mb-3 border-20 border-orange-900 item">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label className="title-people">
                                        <div className="title-box flex items-center">
                                            <i className="fa fa-male"></i>
                                            <span>Người lớn (từ 12 tuổi)</span>
                                        </div>
                                    </label>
                                </td>
                                <td>
                                    <div className="box-people type-adult">
                                        <input name="Adult" id="nguoilon_vi" className="htmlForm-control" value="1" type="hidden"/>
                                        <div className="btn-group flex items-center" role="group">
                                            <button type="button" className="type-button type-minus"><i className="fa fa-minus"></i></button>
                                            <span className="btn-value btn-value-adult">1</span>
                                            <button className="button type-button type-plus"><i className="fa fa-plus"></i></button>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="treem_vi" className="title-people">
                                        <div className="title-box flex items-center">
                                            <i className="fa fa-child"></i>
                                            <span>Trẻ em (từ 2 - 11 tuổi)</span>
                                        </div>
                                    </label>
                                </td>
                                <td>
                                    <div className="box-people type-child">
                                        <input className="Child htmlForm-control" id="treem_vi" value="0" type="hidden"/>
                                        <div className="btn-group flex items-center" role="group">
                                            <button type="button" className="type-button type-minus"><i className="fa fa-minus"></i></button>
                                            <span className="btn-value btn-value-child">0</span>
                                            <button type="button" className="type-button type-plus"><i className="fa fa-plus"></i></button>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="embe_vi" className="title-people">
                                        <div className="title-box flex items-center">
                                            <i className="fa fa-baby"></i>
                                            <span>Em bé (Dưới 2 tuổi)</span>
                                        </div>
                                    </label>
                                </td>
                                <td>
                                    <div className="box-people type-infant">
                                        <input name="Infant" id="embe_vi" className="htmlForm-control" value="0" type="hidden"/>
                                        <div className="btn-group flex items-center" role="group">
                                            <button type="button" className="type-button type-minus"><i className="fa fa-minus"></i></button>
                                            <span className="btn-value btn-value-infant">0</span>
                                            <button type="button" className="type-button type-plus"><i className="fa fa-plus"></i></button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
              )}
              <button className="bg-teal-500 border-orange-900 text-sm border-20 text-[#FFFFFF] mb-2.5 py-4 px-4 rounded bg-[#3399FF] font-bold text-center" 
                type="button"
              >
                Tìm kiếm
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default SliderImg;
