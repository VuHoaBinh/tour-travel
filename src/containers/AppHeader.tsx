import { Close, Menu, ShoppingCart } from '@mui/icons-material';
import { AppBar, Container, Drawer, IconButton, Toolbar } from '@mui/material';
import { AppMenu } from 'containers';
import { useWindowSize } from 'hooks';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { privateRoute } from 'routes';

const AppHeader = () => {
  const location = useLocation();

  const { isScreenLG } = useWindowSize();
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    setOpenDrawer(false);
  }, [location.pathname]);
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenSign, setModalIsOpenSign] = useState(false);


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModalSign = () => {
    setModalIsOpenSign(true);
  };

  const closeModalSign = () => {
    setModalIsOpenSign(false);
  };

  return (
    <>
      <Drawer
        variant={isScreenLG ? 'temporary' : 'persistent'}
        anchor='left'
        open={isScreenLG ? openDrawer : false}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ style: { width: '250px', padding: '20px' } }}
      >
        <IconButton className='ml-auto p-0' onClick={() => setOpenDrawer(false)}>
          <Close fontSize='medium' />
        </IconButton>
        <div className='mt-5 flex flex-col gap-3 text-sm text-[#666666D9]'>
          <AppMenu />
        </div>
      </Drawer>
      
      <AppBar position='sticky' color='transparent' elevation={0} className='bg-paper-main'>
        <Container maxWidth='lg'>
          <Toolbar component={Container} maxWidth='xl' className='relative flex items-center px-0'>
            <IconButton onClick={() => setOpenDrawer(true)} className='absolute  lg:hidden'>
              <Menu />
            </IconButton>
            <IconButton className='absolute right-0 lg:hidden'>
              <ShoppingCart />
            </IconButton>
            <div className='mx-auto'>
              <Link to={privateRoute.home.path}>
                <img
                  src='https://mauweb.monamedia.net/lets-travel/wp-content/uploads/2018/12/logo_dark.png'
                  alt='Logo'
                />
              </Link>
            </div>

            <div className='hidden flex-1 items-center justify-end py-3 lg:flex'>
              <AppMenu />
            </div>
            
            <button 
              data-modal-target="#authentication-modal" data-modal-toggle="authentication-modal"
              className="mx-5 border-2 bg-[#3399FF] hover:bg-[#009900] text-white font-bold py-2 px-4 rounded-full" type="button"
              onClick={openModal}
              >
                Log in
            </button>
            {/* Modal */}
            <div
              id="authentication-modal"
              tabIndex={-1}
              aria-hidden="true"
              className={`${
                modalIsOpen ? '' : 'hidden'
              } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:max-w-md bg-[#FFFFFF] rounded-lg shadow-lg dark:bg-gray-700`}
            >
              <div className="relative">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Đăng nhập
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
                            <input type="email" name="email" id="email" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                    placeholder="example@sunnytravel.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" 
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <a href="#" className ="text-sm text-blue-700 hover:underline dark:text-blue-500"><i><u>Forgot your password?</u></i></a>
                        </div>
                        <button type="submit" className="w-1/4 ml-40 text-center bg-[#00FFFF] hover:bg-[#FF0000] border-3 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          onClick={() => setModalIsOpen(false)} >
                          Log in </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        <i>Not registered? </i><a href="#" className="text-blue-700 hover:underline dark:text-blue-500">  Create account</a>
                        </div>
                    </form>
                </div>
              </div>
            </div>


            <button className="border-2 bg-[#3399FF] hover:bg-[#009900] text-white font-bold py-2 px-4 rounded-full"
              onClick={openModalSign}>
                Sign up
            </button>

            <div
              id="authentication-modal"
              tabIndex={-1}
              aria-hidden="true"
              className={`${
                modalIsOpenSign ? '' : 'hidden'
              } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:max-w-md bg-[#FFFFFF] rounded-lg shadow-lg dark:bg-gray-700`}
            >
              <div className="relative">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Đăng kí 
                  </h3>
                  <button
                    type="button"
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                    onClick={() => setModalIsOpenSign(false)}
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
                            <input type="email" name="email" id="email" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                    placeholder="example@sunnytravel.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div>
                            <label htmlFor="re-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Re-password</label>
                            <input type="password" name="re-password" id="password" placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <button type="submit" className="w-1/4 ml-40 text-center bg-[#00FFFF] hover:bg-[#FF0000] border-3 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          onClick={() => setModalIsOpenSign(false)} >
                          Sign up 
                        </button>
                    </form>
                </div>
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      
    </>
  );
};

export default AppHeader;
