import { Star } from '@mui/icons-material';
import { Button, Container, Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';
import { toursService } from 'services';
import SliderImg from './Slider';
import TourismCities from './TourCity';

const Home = () => {

  const { data: tours } = useQuery({
    queryKey: ['toursService.getTours'],
    queryFn: () => toursService.getTours(),
  });

  const { data: attractiveTours } = useQuery({
    queryKey: ['toursService.getAttractiveTours'],
    queryFn: () => toursService.getAttractiveTours(),
  });

  // modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //tour
  const [selectedTour, setSelectedTour] = useState({
    place: '',
  });

  const handleTourClick = () => {
    const tourElement = document.querySelector('.relative') as HTMLElement | null; 
    if (tourElement) {
      const placeElement = tourElement.querySelector('[data-value="place"]') as HTMLElement | null;
      const place = placeElement?.innerText || '';
  
      const tourInfo = {
        place: place,
      };
  
      setSelectedTour(tourInfo);
      openModal();
    }
  };

  //valid
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidFullName, setIsValidFullName] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);


  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    const isValid = emailPattern.test(newEmail);
    setIsValidEmail(isValid);
  };

  const handleFullNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    const NamePattern = /^[a-zA-Z\s]+$/;
    const isValid = NamePattern.test(newName);
    setIsValidFullName(isValid);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPhone = event.target.value;
    const PhonePattern = /^0[0-9]{10}$/;
    const isValid = PhonePattern.test(newPhone);
    setIsValidPhone(isValid);
  };
  const handleSubmit = () => {
    if (isValidEmail && isValidFullName && isValidPhone) {
      alert("Booking oke oke!!!!");
      closeModal();
    } else {
      console.error('Invalid email format');
    }
  };

  return (
    <div>
      <SliderImg />
      <Container maxWidth='lg' className='px-4 lg:p-0'>
        <div className='py-20 text-center'>
          <p className='mb-3 text-2xl font-bold lg:text-3xl'>CÁC TOUR HẤP DẪN</p>
          <p className='text-sm text-[#B2B2B2]'>Chào mừng bạn đến với các tour</p>
        </div>
        <Grid className='mb-8' container spacing={4}>
          <Grid item xs={12} sm={3} >
            <div className='relative overflow-hidden  hover:bg-center'
            onClick={handleTourClick}>
              <div
                style={{
                  backgroundImage: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/Sapa.jpg)`,
                  transition: 'transform 0.5s',
                }}
                className='py-12 pl-3 rounded-xl bg-center bg-no-repeat bg-cover font-bold text-[#FFF] transform scale-95 hover:scale-100'
              >
                <div className='translate-y-10'>
                  <p className='text-xl font-bold' data-value="place">Sapa</p>
                  <p className='py-2 text-sm'>
                    <span className='text-[#FFFFFF]'>3N2D</span>
                    <span className='text-[#FFFFFF]'> - 1 triệu / người</span>
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden="true"
          className={`${
            modalIsOpen ? '' : 'hidden'
          } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:max-w-md bg-[#FFFFFF] rounded-lg shadow-lg dark:bg-gray-700 z-30`}
        >
          <div className="relative">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Form điền thông tin đặt tour
              </h3>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
                onClick={() => setModalIsOpen(false)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 md:p-5">
                <form className="space-y-4" action="#">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input 
                          type="email" 
                          name="email" 
                          id="email" 
                          className={`bg-gray-50 border ${isValidEmail ? 'border-gray-300' : 'border-red-500'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
                          placeholder="example@sunnytravel.com"
                          required
                          onChange={handleEmailChange}
                        />
                        {!isValidEmail && (
                          <p className="text-red-500 text-sm mt-1">Please enter a email address.</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your full name: </label>
                        <input 
                          type="text" 
                          name="fullName" 
                          id="fullName" 
                          placeholder="Vu Hoa Binh" 
                          className={`bg-gray-50 border ${isValidFullName ? 'border-gray-300' : 'border-red-500'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required`}
                          onChange={handleFullNameChange}
                        />
                        {!isValidFullName && (
                          <p className="text-red-500 text-sm mt-1">Please enter a full name.</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone number: </label>
                        <input 
                          type="text" 
                          name="phone" 
                          id="phone" 
                          placeholder="123 123 1234" 
                          className={`bg-gray-50 border ${isValidPhone ? 'border-gray-300' : 'border-red-500'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required`} 
                          onChange={handlePhoneChange}
                        />
                        {!isValidPhone && (
                          <p className="text-red-500 text-sm mt-1">Please enter a full name.</p>
                        )}
                    </div>
                    <div>
                        <label className ="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your tour: </label>
                        <input type="text" value={`Place: ${selectedTour.place}`}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" disabled />
                    </div>
                    <button type="submit" className="w-1/4 ml-40 text-center bg-[#00FFFF] hover:bg-[#FF0000] border-3 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={handleSubmit} >
                      Booking </button>
                    
                </form>
              </div>
            </div>
        </div>
        {/* <Grid container spacing={4} justifyContent='space-between'>
          {tours?.slice(0, 6).map((tour) => (
            <Grid key={tour.id} item xs={12} sm={6} md={4}>
              <div
                style={{
                  background: `url(${tour.img}) no-repeat top / cover`,
                }}
                className='px-auto relative py-48 text-center text-[#FFF]'
              >
                <div className='absolute top-0 z-20 h-full w-full bg-[#00000066]'>
                  <div className='mt-[30%]'>
                    <p className='text-2xl font-bold'>{tour.title}</p>
                    <div className='pt-4 text-[#FFD700]'>
                      <Star fontSize='small' />
                      <Star fontSize='small' />
                      <Star fontSize='small' />
                      <Star fontSize='small' />
                      <Star fontSize='small' />
                    </div>
                    <p className='py-4'>Giá tour: ${tour.price}</p>
                    <Button className='rounded-2xl bg-[#FF6600] text-xs'>XEM NGAY</Button>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid> */}
      </Container>
      <div className='py-16'>
        <div
          style={{
            background: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/tour_slider_phuquoc-1-1024x258.jpg) no-repeat top / cover`,
          }}
          className='px-auto py-20 text-center text-[#FFF]'
        >
          <p className='font-bold lg:text-2xl'>Giảm giá 30%</p>
          <div className='py-4 text-[#FFD700]'>
            <Star fontSize='medium' className='h-[13px] w-[17px] lg:h-[20px] lg:w-[22px]' />
            <Star fontSize='medium' className='h-[13px] w-[17px] lg:h-[20px] lg:w-[22px]' />
            <Star fontSize='medium' className='h-[13px] w-[17px] lg:h-[20px] lg:w-[22px]' />
            <Star fontSize='medium' className='h-[13px] w-[17px] lg:h-[20px] lg:w-[22px]' />
            <Star fontSize='medium' className='h-[13px] w-[17px] lg:h-[20px] lg:w-[22px]' />
          </div>
          <p className='text-3xl text-[#00FFFF] font-bold lg:text-[46px]'>NGHỈ DƯỠNG TẠI PHÚ QUỐC</p>
          <p className='py-4 text-xs lg:text-base'>Từ 5/12 đến 12/12</p>
          <Button className='rounded-2xl bg-[#FF6600] text-xs'>XEM NGAY</Button>
        </div>
      </div>
      <Container maxWidth='lg'>
        <div className='py-16 text-center'>
          <p className='text-3xl font-bold'>NHỮNG TOUR HÚT KHÁCH</p>
          <p className='text-[#B2B2B2]'>Tìm địa điểm tham quan tại các thành phố tại Việt Nam</p>
        </div>
        <Grid className='mb-8' container spacing={4}>
          <Grid item xs={12} sm={3} >
            <div className='relative overflow-hidden  hover:bg-center'>
              <div
                style={{
                  backgroundImage: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/Sapa.jpg)`,
                  transition: 'transform 0.5s',
                }}
                className='py-12 pl-3 rounded-xl bg-center bg-no-repeat bg-cover font-bold text-[#FFF] transform scale-95 hover:scale-100'
              >
                <div className='translate-y-10'>
                  <p className='text-xl font-bold'>Sapa</p>
                  <p className='py-2 text-sm'>
                    <span className='text-[#FFFFFF]'>1000 hoạt động</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='relative overflow-hidden  hover:bg-center'>
              <div
                style={{
                  backgroundImage: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/Sapa.jpg)`,
                  transition: 'transform 0.5s',
                }}
                className='py-12 pl-3 rounded-xl bg-center bg-no-repeat bg-cover font-bold text-[#FFF] transform scale-95 hover:scale-100'
              >
                <div className='translate-y-10'>
                  <p className='text-xl font-bold'>Sapa</p>
                  <p className='py-2 text-sm'>
                    <span className='text-[#FFFFFF]'>1000 hoạt động</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='relative overflow-hidden  hover:bg-center'>
              <div
                style={{
                  backgroundImage: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/offers_slide_3.jpg)`,
                  transition: 'transform 0.5s',
                }}
                className='py-12 pl-3 rounded-xl bg-center bg-no-repeat bg-cover font-bold text-[#FFF] transform scale-95 hover:scale-100'
              >
                <div className='translate-y-10'>
                  <p className='text-xl font-bold'>Phú Quốc</p>
                  <p className='py-2 text-sm'>
                    <span className='text-[#FFFFFF]'>1000 hoạt động</span>
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} >
            <div className='relative overflow-hidden  hover:bg-center'>
              <div
                style={{
                  backgroundImage: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/mientay.jpg)`,
                  transition: 'transform 0.5s',
                }}
                className='py-12 pl-3 rounded-xl bg-center bg-no-repeat bg-cover font-bold text-[#FFF] transform scale-95 hover:scale-100'
              >
                <div className='translate-y-10'>
                  <p className='text-xl font-bold'>Miền Tây</p>
                  <p className='py-2 text-sm'>
                    <span className='text-[#FFFFFF]'>1000 hoạt động</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='relative overflow-hidden  hover:bg-center'>
              <div
                style={{
                  backgroundImage: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/0002786_du-lich-quang-binh-bien-nhat-le-phong-nha-bai-da-nhay-1024x684.jpeg)`,
                  transition: 'transform 0.5s',
                }}
                className='py-12 pl-3 rounded-xl bg-center bg-no-repeat bg-cover font-bold text-[#FFF] transform scale-95 hover:scale-100'
              >
                <div className='translate-y-10'>
                  <p className='text-xl font-bold'>Quảng Bình</p>
                  <p className='py-2 text-sm'>
                    <span className='text-[#FFFFFF]'>1000 hoạt động</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='relative overflow-hidden  hover:bg-center'>
              <div
                style={{
                  backgroundImage: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/du-lich-sai-gon-cover.jpg)`,
                  transition: 'transform 0.5s',
                }}
                className='py-12 pl-3 rounded-xl bg-center bg-no-repeat bg-cover font-bold text-[#FFF] transform scale-95 hover:scale-100'
              >
                <div className='translate-y-10'>
                  <p className='text-xl font-bold'>Sài Gòn</p>
                  <p className='py-2 text-sm'>
                    <span className='text-[#FFFFFF]'>1000 hoạt động</span>
                  </p>
                </div>
              </div>
            </div>
            

          </Grid>
          <Grid item xs={12} sm={3} >
            <div className='relative overflow-hidden  hover:bg-center'>
              <div
                style={{
                  backgroundImage: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/1533266023094_1613204-1024x681.jpg)`,
                  transition: 'transform 0.5s',
                }}
                className='py-12 pl-3 rounded-xl bg-center bg-no-repeat bg-cover font-bold text-[#FFF] transform scale-95 hover:scale-100'
              >
                <div className='translate-y-10'>
                  <p className='text-xl font-bold'>Đà Nẵng</p>
                  <p className='py-2 text-sm'>
                    <span className='text-[#FFFFFF]'>1000 hoạt động</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='relative overflow-hidden  hover:bg-center'>
              <div
                style={{
                  backgroundImage: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/Sapa.jpg)`,
                  transition: 'transform 0.5s',
                }}
                className='py-12 pl-3 rounded-xl bg-center bg-no-repeat bg-cover font-bold text-[#FFF] transform scale-95 hover:scale-100'
              >
                <div className='translate-y-10'>
                  <p className='text-xl font-bold'>Sapa</p>
                  <p className='py-2 text-sm'>
                    <span className='text-[#FFFFFF]'>1000 hoạt động</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='relative overflow-hidden  hover:bg-center'>
              <div
                style={{
                  backgroundImage: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/Sapa.jpg)`,
                  transition: 'transform 0.5s',
                }}
                className='py-12 pl-3 rounded-xl bg-center bg-no-repeat bg-cover font-bold text-[#FFF] transform scale-95 hover:scale-100'
              >
                <div className='translate-y-10'>
                  <p className='text-xl font-bold'>Sapa</p>
                  <p className='py-2 text-sm'>
                    <span className='text-[#FFFFFF]'>1000 hoạt động</span>
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} >
            <div className='relative overflow-hidden  hover:bg-center'>
              <div
                style={{
                  backgroundImage: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/Hue.jpg)`,
                  transition: 'transform 0.5s',
                }}
                className='py-12 pl-3 rounded-xl bg-center bg-no-repeat bg-cover font-bold text-[#FFF] transform scale-95 hover:scale-100'
              >
                <div className='translate-y-10'>
                  <p className='text-xl font-bold'>Huế</p>
                  <p className='py-2 text-sm'>
                    <span className='text-[#FFFFFF]'>1200 hoạt động</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='relative overflow-hidden  hover:bg-center'>
              <div
                style={{
                  backgroundImage: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/HaLong.jpg)`,
                  transition: 'transform 0.5s',
                }}
                className='py-12 pl-3 rounded-xl bg-center bg-no-repeat bg-cover font-bold text-[#FFF] transform scale-95 hover:scale-100'
              >
                <div className='translate-y-10'>
                  <p className='text-xl font-bold'>Vịnh Hạ Long</p>
                  <p className='py-2 text-sm'>
                    <span className='text-[#FFFFFF]'>1230 hoạt động</span>
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          
        </Grid>
      </Container>

      <TourismCities />
    </div>
  );
};

export default Home;
