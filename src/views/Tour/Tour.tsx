import { HorizontalRule } from '@mui/icons-material';
import { Card, CardContent, Container, Grid, Pagination, Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { privateRoute } from 'routes';
import { toursService } from 'services';

const Tour = () => {
  const [page, setPage] = useState(1);
  const limit = 6;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const { data: allTours } = useQuery({
    queryKey: ['toursService.getTours'],
    queryFn: () => toursService.getTours(),
  });

  const { data: tours } = useQuery({
    queryKey: ['toursService.getTour', { page, limit }],
    queryFn: () => toursService.getTour({ page: page, limit: limit }),
  });

  let pages = Math.ceil(allTours?.length! / limit);

  return (
    <div>
      <div className='bg-[#FF6600]'>
        <Container maxWidth='lg' className='mb-6 py-8'>
          <p className='text-center text-[18px] font-extrabold text-[#fff]'>TOUR</p>
        </Container>
      </div>
      <Container maxWidth='lg' className='flex flex-col gap-5 py-8 lg:flex-row'>
        <div className='lg:basis-1/4'>
          <p className='font-extrabold'>NHỮNG TOUR KHÁC</p>
          <HorizontalRule className='mt-4 text-[#0000001A]' />
          <div className='py-4'>
            <div className='flex flex-row gap-3 border-b border-[#ececec] py-2'>
              <div className='basis-1/4'>
                <img src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/offers_slide_2-300x300.jpg' />
              </div>
              <div className='basis-3/4 text-sm'>
                Du Lịch Phú Quóc - Nam Đảo 3 ngày 2 đêm dịp Noel & Tết Dương Lịch 2018
                <p className='mt-1 font-extrabold'>4.999.000₫</p>
              </div>
            </div>
            <div className='flex flex-row gap-3 border-b border-[#ececec] py-2'>
              <div className='basis-1/4'>
                <img src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/offers_slide_1-300x300.jpg' />
              </div>
              <div className='basis-3/4 text-sm'>
                Beach Resort Phan Thiết Khuyến Mãi Mùa Đông
                <p className='my-1 font-extrabold'>2.999.000₫</p>
              </div>
            </div>
            <div className='flex flex-row gap-3 border-b border-[#ececec] py-2'>
              <div className='basis-1/4'>
                <img src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/sea_tour_img_1-300x300.jpg' />
              </div>
              <div className='basis-3/4 text-sm'>
                Du Lịch Côn Đảo 2 ngày 1 đêm bay từ Sài Gòn
                <p className='my-1 font-extrabold'>5.299.000₫</p>
              </div>
            </div>
            <div className='flex flex-row gap-3 border-b border-[#ececec] py-2'>
              <div className='basis-1/4'>
                <img src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/Sapa-300x300.jpg' />
              </div>
              <div className='basis-3/4 text-sm'>
                Du Lịch Đà Lạt 2018 giá tốt khởi hành từ Sài Gòn
                <p className='my-1 font-extrabold'>14.999.000₫</p>
              </div>
            </div>
            <div className='flex flex-row gap-3 py-2'>
              <div className='basis-1/4'>
                <img src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/Phoco_hoian-300x300.jpg' />
              </div>
              <div className='basis-3/4 text-sm'>
                Du Lịch Hội An - Quảng Nam khởi hành từ TP.HCM giá tốt
                <p className='my-1 font-extrabold'>59.900.000₫</p>
              </div>
            </div>
          </div>
        </div>
        <Grid container spacing={3} className='lg:basis-3/4'>
          {tours?.map((tour) => {
            return (
              <Grid item xs={6} sm={4}>
                <Link to={privateRoute.tourDetail.url({ id: tour.id })}>
                  <Card className='rounded-md hover:shadow-xl'>
                    <img src={tour.img} className='h-[250px] w-full' />
                    <CardContent className='h-[115px]'>
                      <p className='text-[10px] text-[#353535]'>{tour.region}</p>
                      <p className='text-sm'>{tour.name}</p>
                      <p className='text-sm font-extrabold'>{tour.priceVND} ₫</p>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <Stack spacing={2}>
              <Pagination
                className='mx-auto'
                shape='rounded'
                count={pages}
                size='small'
                page={page}
                onChange={handleChange}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Tour;
