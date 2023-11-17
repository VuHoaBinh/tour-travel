import {
  FacebookRounded,
  Google,
  HorizontalRule,
  LinkedIn,
  MailOutlined,
  Pinterest,
  Twitter,
} from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Card, CardContent, Container, Rating, Tab, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from 'components';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { privateRoute } from 'routes';
import { toursService } from 'services';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TourDetail = () => {
  const [value, setValue] = useState('1');

  const { id: tourID } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tourID]);

  const { data: allTours, isLoading } = useQuery({
    queryKey: ['toursService.getTours'],
    queryFn: () => toursService.getTours(),
  });

  const { data: tour } = useQuery({
    queryKey: ['toursService.getToursID', { tourID }],
    queryFn: () => toursService.getToursID({ id: tourID! }),
  });

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Spinner loading={isLoading}>
      <div>
        <div className='bg-[#FF6600]'>
          <Container maxWidth='lg' className='mb-6 py-8'>
            <p className='text-center text-[18px] font-extrabold text-[#fff]'>KHÁCH SẠN</p>
          </Container>
        </div>
        <Container maxWidth='lg' className='py-12'>
          <div className='flex flex-col gap-4 lg:flex-row'>
            <div className='lg:basis-3/5'>
              <Carousel>
                <div>
                  <img src={tour?.[0].img} />
                </div>
                <div>
                  <img src={tour?.[0].img} />
                </div>
                <div>
                  <img src={tour?.[0].img} />
                </div>
              </Carousel>
            </div>
            <div className='pl-2 lg:basis-2/5'>
              <p className='text-[28px] font-extrabold'>{tour?.[0].name}</p>
              <HorizontalRule fontSize='large' className='mt-2 text-[#0000001A]' />
              <p className='mb-2 text-2xl font-extrabold'>{tour?.[0].priceVND} ₫</p>
              <p className='mb-2'>{tour?.[0].description}</p>
              <button type='button' className='rounded-lg bg-[#E30050] px-5 py-3 font-extrabold text-[#FFF]'>
                ĐẶT NGAY
              </button>
              <div className='my-4 border border-[#ececec]'></div>
              <p className='text-xs'>Danh mục: </p>
              <div className='mt-3 flex gap-1 text-[#bbb8b8]'>
                <FacebookRounded className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
                <Twitter className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
                <MailOutlined className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
                <Pinterest className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
                <Google className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
                <LinkedIn className='rounded-[50%] border-2 border-[#bbb8b8] p-1' fontSize='large' />
              </div>
            </div>
          </div>

          <div className='my-5 border border-[#ececec]'></div>

          <TabContext value={value}>
            <TabList onChange={handleChange}>
              <Tab label='MÔ TẢ' value='1' />
              <Tab label='THÔNG TIN BỔ SUNG' value='2' />
              <Tab label='ĐÁNH GIÁ (0)' value='3' />
            </TabList>
            <TabPanel className='border-2 border-[#ececec]' value='1'>
              {tour?.[0].description}
            </TabPanel>
            <TabPanel className='border-2 border-[#ececec]' value='2'>
              <div className='flex text-sm'>
                <div className='basis-2/5 font-bold'>LOẠI GIƯỜNG</div>
                <div className='flex basis-3/5'></div>
              </div>
            </TabPanel>
            <TabPanel className='border-2 border-[#ececec]' value='3'>
              <p className='mb-3 text-xl font-extrabold'>Đánh giá</p>
              <p className='mb-8'>Chưa có đánh giá nào.</p>
              <Container maxWidth='lg' className='border-2 border-[#FF6600] py-6'>
                <p className='mb-[10px] text-xl font-extrabold'>
                  Hãy là người đầu tiên nhận xét “Đặt Phòng Khách Sạn Grand Hồ Tràm 5 Sao”
                </p>
                <p className='mb-2 text-sm font-extrabold'>Đánh giá của bạn</p>
                <Rating precision={0.5} />
                <p className='mb-2 mt-4 text-sm font-extrabold'>Nhận xét của bạn *</p>
                <TextField className='mb-4' multiline maxRows={6} rows={4} fullWidth />
                <div className='mb-4 flex gap-6'>
                  <div className='basis-1/2'>
                    <p className='text-sm font-extrabold'>Tên *</p>
                    <TextField fullWidth />
                  </div>
                  <div className='basis-1/2'>
                    <p className='text-sm font-extrabold'>Email *</p>
                    <TextField fullWidth />
                  </div>
                </div>
                <button
                  className='mb-6 rounded-lg bg-[#FF6600] px-5 py-3 text-sm font-extrabold text-[#fff]'
                  type='button'
                >
                  GỬI ĐI
                </button>
              </Container>
            </TabPanel>
          </TabContext>
          <div className='my-5 border border-[#ececec]'></div>
          <div>
            <h2 className='mb-5 text-xl font-extrabold'>Sản phẩm tương tự</h2>
            <Slider {...settings}>
              {allTours?.map((tour) => (
                <main>
                  <Card className='rounded-md hover:shadow-xl'>
                    <Link to={privateRoute.tourDetail.url({ id: tour.id })}>
                      <img src={tour.img} className='h-[250px] w-full' />
                      <CardContent className='h-[115px]'>
                        <p className='text-[10px] text-[#353535]'>{tour.region}</p>
                        <p className='text-sm'>{tour.name}</p>
                        <p className='text-sm font-extrabold'>{tour.priceVND} ₫</p>
                      </CardContent>
                    </Link>
                  </Card>
                </main>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </Spinner>
  );
};

export default TourDetail;
