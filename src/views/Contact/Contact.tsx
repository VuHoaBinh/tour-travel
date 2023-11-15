import { Container, TextField } from '@mui/material';

const Contact = () => {
  return (
    <Container
      maxWidth='lg'
      className='flex justify-around pt-12'
      style={{
        background: `url('https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/02/bg-section-contact-1024x533.jpg') no-repeat center / cover`,
      }}
    >
      <div className=''>
        <img src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/02/contact-people.png' />
      </div>
      <div className='my-8 bg-[#FFDD00] px-14 py-6 text-center'>
        <p className='mb-3 text-2xl font-extrabold'>CONTACT US</p>
        <p className='mb-5'>Just pack and go! Let leave your travel plan to travel experts!</p>
        <form className='flex flex-col gap-4'>
          <TextField className='bg-[#FFFFFF33]' label='Họ và tên' />
          <TextField className='bg-[#FFFFFF33]' label='Email' />
          <TextField className='bg-[#FFFFFF33]' multiline rows={4} label='Nội dung' />
          <button
            type='button'
            className='mx-auto w-[50%] rounded-lg bg-[#3C3C3C] px-5 py-3 text-sm font-extrabold text-[#FFDD00]'
          >
            GỬI TIN NHẮN
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
