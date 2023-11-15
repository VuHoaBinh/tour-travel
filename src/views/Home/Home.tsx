import { Star } from '@mui/icons-material';
import { Button, Container, Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
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

  return (
    <div>
      <SliderImg />
      <Container maxWidth='lg' className='px-4 lg:p-0'>
        <div className='py-16 text-center'>
          <p className='mb-3 text-2xl font-bold lg:text-3xl'>CÁC TOUR HẤP DẪN</p>
          <p className='text-sm text-[#B2B2B2]'>Chào mừng bạn đến với các tour</p>
        </div>
        <Grid container spacing={4} justifyContent='space-between'>
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
        </Grid>
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
          <p className='text-3xl font-bold lg:text-[46px]'>NGHỈ DƯỠNG TẠI PHÚ QUỐC</p>
          <p className='py-4 text-xs lg:text-base'>Từ 5/12 đến 12/12</p>
          <Button className='rounded-2xl bg-[#FF6600] text-xs'>XEM NGAY</Button>
        </div>
      </div>
      <Container maxWidth='lg'>
        <div className='py-16 text-center'>
          <p className='text-3xl font-bold'>NHỮNG TOUR HÚT KHÁCH</p>
          <p className='text-[#B2B2B2]'>Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc.</p>
        </div>
      </Container>
      <Grid container className='pb-16'>
        {attractiveTours?.map((tour) => {
          return (
            <Grid key={tour.id} item xs={12} sm={6} md={4}>
              <div
                style={{
                  background: `url(${tour.img}) no-repeat top / cover`,
                }}
                className='px-auto link py-28 text-center text-[#FFF]'
              >
                <p className='text-2xl font-bold'>{tour.title}</p>
                <p className='py-4'>{tour.travelTime}</p>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <TourismCities />
    </div>
  );
};

export default Home;
