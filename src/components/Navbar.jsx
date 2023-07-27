import {FaShoppingCart} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return(
    <div>
      <div className="h-20 flex flex-row justify-between bg-black">
        <NavLink to={'/'}>
        <img src='../logo.png' alt="cart-logo" className='lg:h-14 md:h-10 h-8 ml-10 mt-3'/>
        </NavLink>
        <div className='flex flex-row gap-5 items-center mr-10 text-white'>
          <NavLink to={'/'}>
          <p>Home</p>
          </NavLink>
          <NavLink to={'/cart'}>
          <FaShoppingCart/>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
