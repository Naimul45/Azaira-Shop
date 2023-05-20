import React, { useContext } from 'react';
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import DashboardLeft from '../../Dasboard/DashboardLeft';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Loading/Loading';
import { Link } from 'react-router-dom';
import { BiMenu, BiLockAlt } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineReviews } from 'react-icons/md';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
const Review = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const { register, handleSubmit } = useForm();
  const { isLoading } = useQuery({
    queryKey: "",
    queryFn: "",
  });

  if (isLoading) {
    return <Loading></Loading>
  }

  const onSubmit = data => {
    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success("Your review has been successfull !!!")
      })
  }

  return (
    <div className="row mr-0 bg-base-200">
      <div className="col-2   bg-white">
        <DashboardLeft></DashboardLeft>
      </div>
      <div className="col-10">
        <div className='flex justify-between'>
          <p className="text-2xl font-bold text-secondary mb-3 mt-2">Review</p>
          <div className="dropdown dropdown-end lg:hidden block">
            <label tabIndex={0} className="btn m-1"><BiMenu className="text-3xl" /></label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <Link to="/dashboard"><button className="btn w-full mt-2 btn-active  btn-secondary "><BiLockAlt className='mr-2 text-xl' />Orderlist</button></Link>
              {
                isAdmin && <>
                  <Link to="/users"><button className="btn btn-active btn-secondary w-full mt-2"><FaUsers className='mr-2  text-xl' />All Users</button></Link>
                </>
              }
              {
                isAdmin && <>
                  <Link to="/services"><button className="btn btn-active w-full mt-2  btn-secondary "><AiOutlinePlus className='mr-2 text-xl' />Add Service</button></Link>
                </>
              }
              <Link to="/review">    <button className="btn btn-active w-full mt-2  btn-secondary "><MdOutlineReviews className='mr-2 text-xl' />Review</button></Link>

            </ul>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} type="text" placeholder="Your Name" className="input border-none w-full max-w-xs" /> <br /><br />
          <input type="text"{...register("photourl")} placeholder="Your PhotoURL" className="input border-none w-full max-w-xs" /> <br /><br />
          <input type="text" placeholder="Shop Name"{...register("shopname")} className="input border-none w-full max-w-xs" /> <br />
          <p className="text-lg font-semibold mb-2 mt-2">Review : Out Of 5</p>
          <select className="select w-80 "{...register("review")}>
            <option selected>5 Star</option>
            <option>4 Star</option>
            <option>3 Star</option>
            <option>2 Star</option>
            <option>1 Star</option>
          </select><br /><br />
          <textarea className="textarea w-80"{...register("description")} placeholder="Description"></textarea><br /><br />
          <input type="submit" className='btn btn-secondary bg-pink-600 w-80 border-none mb-4' />

        </form>

      </div>
    </div>
  );
};

export default Review;