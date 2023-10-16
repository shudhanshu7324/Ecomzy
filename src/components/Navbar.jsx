import {FaShoppingCart} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const {cart} = useSelector((state) => state);

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
            <div className='relative'>
          <FaShoppingCart className='text-2xl'/>
          {
            cart.length > 0 && <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
          }
          </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
