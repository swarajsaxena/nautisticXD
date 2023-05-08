import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return <div className='p-4 flex items-center gap-4 w-full max-w-[1440px]'>
    <img src="./logo.svg" width={20} alt="" srcset="" />
    <div className='text-1xl font-extrabold tracking-tight'>NAUTISTIC XD</div>

    <div className='flex gap-4 items-center ml-auto'>
      <Link className='font-light hover:text-blueMain capitalize tracking-wider transition-all' to={'/'}>home</Link>
      <Link className='font-light hover:text-blueMain capitalize tracking-wider transition-all' to={'/test'}>test</Link>
      <Link className='font-light hover:text-blueMain capitalize tracking-wider transition-all' to={'/statistics'}>statistics</Link>
      <Link className='font-light hover:text-blueMain capitalize tracking-wider transition-all' to={'/login'}>login</Link>
    </div>
  </div>;
};

export default Navbar;
