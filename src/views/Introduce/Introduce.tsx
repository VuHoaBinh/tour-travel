import { Container, Grid } from '@mui/material';

const Introduce = () => {
  return (
    <>
      <div className=' bg-[#FF6600] py-8 text-center text-[#FFF]'>
        <p className='mb-6 text-3xl font-extrabold '>MONA TRAVEL</p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut <br />{' '}
          laoreet dolore magna aliquam erat volutpat.
        </p>
      </div>
      <Container maxWidth='lg' className='my-16'>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} className='text-center'>
            <img
              src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/target.png'
              className='mx-auto'
            />
            <p className='py-4 text-xl font-extrabold'>MỤC TIÊU</p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className='text-center'>
            <img
              src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/mission.png'
              className='mx-auto'
            />
            <p className='py-4 text-xl font-extrabold'>SỨ MỆNH</p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className='text-center'>
            <img
              src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/telescope.png'
              className='mx-auto'
            />
            <p className='py-4 text-xl font-extrabold'>TƯƠNG LAI</p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat.
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Introduce;
