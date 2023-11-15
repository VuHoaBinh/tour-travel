import { Contact } from 'views/Contact';
import { Home } from 'views/Home';
import { Introduce } from 'views/Introduce';
import { News } from 'views/News';
import { Tour, TourDetail } from 'views/Tour';

const privateRoute = {
  home: {
    path: '/',
    name: 'TRANG CHỦ',
    component: Home,
  },
  intro: {
    path: '/introduce',
    name: 'GIỚI THIỆU',
    component: Introduce,
  },
  tours: {
    path: '/tours',
    name: 'TOUR TRONG NƯỚC',
    component: Tour,
  },
  news: {
    path: '/news',
    name: 'TIN TỨC',
    component: News,
  },
  contact: {
    path: '/contact',
    name: 'LIÊN HỆ',
    component: Contact,
  },
  tourDetail: {
    path: '/tourDetail/:id',
    url: ({ id }: { id: number }) => `/tourDetail/${id}`,
    name: 'KHÁCH SẠN',
    component: TourDetail,
  },
};

export default privateRoute;
