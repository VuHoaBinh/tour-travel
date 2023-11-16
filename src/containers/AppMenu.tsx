import { Link } from 'react-router-dom';
import { privateRoute } from 'routes';

type MenuProps = {
  path: string;
  name?: string;
};

const MenuItem = ({ path, name }: MenuProps) => {
  return (
    <Link to={path} className='hover:text-[#FF6600]'>
      <div className='text-black px-5 text-xs font-extrabold'>{name}</div>
    </Link>
  );
};

const AppMenu = () => {
  return (
    <>
      <MenuItem {...privateRoute.home} />
      <MenuItem {...privateRoute.intro} />
      <MenuItem {...privateRoute.tours} />
      <MenuItem {...privateRoute.news} />
      <MenuItem {...privateRoute.contact} />
    </>
  );
};

export default AppMenu;
