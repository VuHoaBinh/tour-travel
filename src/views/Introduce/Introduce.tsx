import { Container, Grid } from '@mui/material';

const Introduce = () => {
  return (
    <>
      <div className=' bg-[#FF6600] py-8 text-center text-[#FFF]'>
        <p className='mb-6 text-3xl font-extrabold '>MONA TRAVEL</p>
        <p>
          Chào mừng bạn đến với MONA TRAVEL, nơi mang đến trải nghiệm du lịch tuyệt vời và đẳng cấp. Chúng tôi tự hào là đối tác du lịch lý tưởng cho những người đam mê khám phá và muốn tận hưởng những chuyến phiêu lưu đặc sắc trên khắp thế giới
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
              Mục tiêu chính của MONA TRAVEL có thể là mang đến cho khách hàng những trải nghiệm du lịch không thể nào quên. Công ty có thể tập trung vào việc thiết kế các chuyến đi đa dạng, từ những kỳ nghỉ thư giãn đến các hành trình khám phá mạo hiểm.
            </p>
          </Grid>
          <Grid item xs={12} md={4} className='text-center'>
            <img
              src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/mission.png'
              className='mx-auto'
            />
            <p className='py-4 text-xl font-extrabold'>SỨ MỆNH</p>
            <p>
              Sứ mệnh của MONA TRAVEL có thể được hình dung như một tuyên bố toàn cầu, phản ánh cam kết và giá trị cốt lõi của công ty đối với khách hàng, cộng đồng, và ngành công nghiệp du lịch. 
            </p>
          </Grid>
          <Grid item xs={12} md={4} className='text-center'>
            <img
              src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/telescope.png'
              className='mx-auto'
            />
            <p className='py-4 text-xl font-extrabold'>TƯƠNG LAI</p>
            <p>
              Có thể MONA TRAVEL tập trung vào việc phát triển các chương trình du lịch bền vững và có trách nhiệm xã hội. Điều này bao gồm việc giảm thiểu ảnh hưởng đến môi trường, hỗ trợ cộng đồng địa phương và khuyến khích các hành trình thân thiện với môi trường.
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Introduce;
