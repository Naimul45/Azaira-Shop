import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("logout successfully !!")
      })
      .catch(() => { })
  }
  return (
    <>
      <div className="marquee">
        <Marquee>
          <div className='text-xl font-bold text-center p-2  text-white linear'>
            <span>At First Take My Salam.</span>Welcome To Our Azaira Shop.Thank You For Visiting Our Website
          </div>
        </Marquee>
      </div>
      <div>
        <div>
          <div className="d-flex  pr-4 header">
            <Link to="/" className='anchor text-white'><h1 className='lg:ml-0 ml-[-120px]  text-xl font-bold text-center'>Azaira <br /> Shop</h1></Link>

            <div className='lg:block hidden'>
              <div className="input-group" style={{ width: '800px' }}>
                <input type="text" className="form-control" placeholder="Search Poduct Here..." aria-label="Search Poduct Here..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2"><BsSearch className="fs-4" /></span>
              </div>
            </div>



            {/* <div className="flex items-center justify-center">
              <RiShoppingCart2Line className="text-4xl ml-4 font-bold text-white mr-1" />
              <Link to="/cart" className='ancor'>
                <h1 className="text-lg font-bold text-white">Shop</h1></Link>
            </div> */}
            <div className='flex items-center'>
              {

                user ? <>
                  <Link to="/login"><BiUser className="text-4xl ml-2 mr-1 text-white" /></Link>
                  <Link to="/login" onClick={() => handleLogOut()} className='text-white text-lg font-bold ancor'>Logout</Link>
                </>
                  :
                  <>
                    <Link to="/login"><BiUser className="text-4xl ml-2 mr-1 text-white" /></Link>
                    <Link to="/login" className='text-white text-lg font-bold ancor'>Login</Link>
                  </>
              }

            </div>


            <div>

            </div>

          </div>
          <div className="header pl-3 lg:hidden block">
            <div className='flex mr-3'>
              <input type="text" placeholder="Search Product Here ..." className="input input-bordered w-[300px]" /><BiSearch className=" searchvai" />
            </div>
          </div>
        </div>
      </div>
      <div className='third flex  justify-between items-center '>
        <div className="dropdown lg:hidden block">
          <label tabIndex={0} className="btn m-1"><GiHamburgerMenu className='text-2xl text-white mt-2' /></label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/" className=' ancor  text-lg font-bold mx-2'>Home</Link></li>
            <li>
              <Link to="/addingservice" className='ancor  text-lg font-bold mx-2'>Services</Link>
            </li>
            <li>
              <Link to="/home" className=' ancor  text-lg font-bold mx-2'>Blogs</Link>
            </li>
            <li><Link to="/dashboard" className=' ancor  text-lg font-bold mx-2'>Dashboard</Link></li>
            <li>
              <Link to="/contact" className='text-black text-lg font-bold mx-2 ancor '>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="link lg:block hidden">
          <Link to="/" className='text-white ancor  text-lg font-bold mx-2'>Home</Link>
          <Link to="/addingservice" className='ancor text-white text-lg font-bold mx-2'>Services</Link>
          <Link to="/home" className=' ancor text-white text-lg font-bold mx-2'>Blogs</Link>
          <Link to="/dashboard" className=' ancor text-white text-lg font-bold mx-2'>Dashboard</Link>
          <Link to="/contact" className='text-white text-lg font-bold mx-2 ancor '>Contact</Link>

        </div>

        <div className='mb-3'>
          <div className="avatar">

          </div>
          <div className="avatar flex ">
            <h1 className='text-white text-lg pr-3 font-bold'>{user?.displayName}</h1>
            <div className="w-10 rounded-full mb-1 mr-2">
              <img src={user?.photoURL} alt="" />
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Navbar;