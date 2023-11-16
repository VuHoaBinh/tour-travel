import { Container, Grid } from '@mui/material';

const TourismCities = () => {
  return (
    <Container maxWidth='lg'>
      <div className='py-16 text-center'>
        <p className='text-3xl font-bold'>CÁC THÀNH PHỐ DU LỊCH</p>
        <p className='text-[#B2B2B2]'>Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc.</p>
      </div>
      <Grid className='mb-8' container spacing={4}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  background: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/Sapa.jpg) no-repeat center / cover`,
                }}
                className='py-12 pl-3 font-bold text-[#FFF]'
              >
                <p className='text-3xl font-bold'>Sapa</p>
                <p className='py-2 text-sm'>
                  Giá: <span className='text-[#FF6600]'>300$</span> / người
                </p>
                <button className='rounded-2xl bg-[#FF6600] px-3 py-1 text-[9px]'>XEM NGAY</button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  background: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/HaLong.jpg) no-repeat center / cover`,
                }}
                className='py-12 pl-3 font-bold text-[#FFF]'
              >
                <p className='text-3xl font-bold'>Sapa</p>
                <p className='py-2 text-sm'>
                  Giá: <span className='text-[#FF6600]'>300$</span> / người
                </p>
                <button className='rounded-2xl bg-[#FF6600] px-3 py-1 text-[9px]'>XEM NGAY</button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  background: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/thuong_truong_thoi_tiet-10_18_10_725.jpg) no-repeat center / cover`,
                }}
                className='py-12 pl-3 font-bold text-[#FFF]'
              >
                <p className='text-3xl font-bold'>Hà Nội</p>
                <p className='py-2 text-sm'>
                  Giá: <span className='text-[#FF6600]'>200$</span> / người
                </p>
                <button className='rounded-2xl bg-[#FF6600] px-3 py-1 text-[9px]'>XEM NGAY</button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  background: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/0002786_du-lich-quang-binh-bien-nhat-le-phong-nha-bai-da-nhay-1024x684.jpeg) no-repeat center / cover`,
                }}
                className='py-12 pl-3 font-bold text-[#FFF]'
              >
                <p className='text-3xl font-bold'>Quảng Bình</p>
                <p className='py-2 text-sm'>
                  Giá: <span className='text-[#FF6600]'>300$</span> / người
                </p>
                <button className='rounded-2xl bg-[#FF6600] px-3 py-1 text-[9px]'>XEM NGAY</button>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              background: ` #BEBEBE33 url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/360px-Vietnam_map.png) no-repeat top / cover`,
            }}
            className='h-full p-8 text-[#000]'
          >
            <p className='text-3xl font-bold'>Miền bắc</p>
            <p className='py-4 text-sm'>
              Chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Chúng
              ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập
              trung vào yếu tố trình bày văn bản.
            </p>
            <p className='text-sm font-bold'>Các thành phố:</p>
            <ul className='my-3 list-inside list-disc text-xs'>
              <li className='mb-1'>Hà Nội</li>
              <li className='mb-1'>Sa Pa</li>
              <li className='mb-1'>Hạ Long</li>
              <li className='mb-1'>Điện Biên</li>
              <li className='mb-1'>Quảng Bình</li>
              <li className='mb-1'>Thanh Hóa</li>
            </ul>
          </div>
        </Grid>
      </Grid>

      <Grid className='mb-16' container spacing={4}>
        <Grid item xs={12} md={6}>
          <div
            style={{
              background: ` #BEBEBE33 url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/360px-Vietnam_map.png) no-repeat bottom / cover`,
            }}
            className='h-full p-8 text-[#000]'
          >
            <p className='text-3xl font-bold'>Miền nam</p>
            <p className='py-4 text-sm'>
              Chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Chúng
              ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập
              trung vào yếu tố trình bày văn bản.
            </p>
            <p className='text-sm font-bold'>Các thành phố:</p>
            <ul className='my-3 list-inside list-disc text-xs'>
              <li className='mb-1'>Đà Lạt</li>
              <li className='mb-1'>Nha Trang</li>
              <li className='mb-1'>TP.HCM</li>
              <li className='mb-1'>Cần Thơ</li>
              <li className='mb-1'>Phú Quốc</li>
              <li className='mb-1'>Phan Thiết</li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  background: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/1533266023094_1613204-1024x681.jpg) no-repeat center / cover`,
                }}
                className='py-12 pl-3 font-bold text-[#FFF]'
              >
                <p className='text-3xl font-bold'>Cần Thơ</p>
                <p className='py-2 text-sm'>
                  Giá: <span className='text-[#FF6600]'>200$</span> / người
                </p>
                <button className='rounded-2xl bg-[#FF6600] px-3 py-1 text-[9px]'>XEM NGAY</button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  background: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/dalat.jpg) no-repeat center / cover`,
                }}
                className='py-12 pl-3 font-bold text-[#FFF]'
              >
                <p className='text-3xl font-bold'>Đà Lạt</p>
                <p className='py-2 text-sm'>
                  Giá: <span className='text-[#FF6600]'>300$</span> / người
                </p>
                <button className='rounded-2xl bg-[#FF6600] px-3 py-1 text-[9px]'>XEM NGAY</button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  background: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/du-lich-sai-gon-cover.jpg) no-repeat center / cover`,
                }}
                className='py-12 pl-3 font-bold text-[#FFF]'
              >
                <p className='text-3xl font-bold'>Sài Gòn</p>
                <p className='py-2 text-sm'>
                  Giá: <span className='text-[#FF6600]'>300$</span> / người
                </p>
                <button className='rounded-2xl bg-[#FF6600] px-3 py-1 text-[9px]'>XEM NGAY</button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  background: `url(https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/offers_slide_3.jpg) no-repeat center / cover`,
                }}
                className='py-12 pl-3 font-bold text-[#FFF]'
              >
                <p className='text-3xl font-bold'>Phú Quốc</p>
                <p className='py-2 text-sm'>
                  Giá: <span className='text-[#FF6600]'>300$</span> / người
                </p>
                <button className='rounded-2xl bg-[#FF6600] px-3 py-1 text-[9px]'>XEM NGAY</button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TourismCities;
