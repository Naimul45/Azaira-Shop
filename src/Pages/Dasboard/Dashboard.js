import React, { useContext, useState } from 'react';
import DashboardLeft from './DashboardLeft';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';
import { BiMenu, BiLockAlt } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineReviews } from 'react-icons/md';

import { Link } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import toast from 'react-hot-toast';
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);


  const { refetch, isLoading, data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
      const data = res.json()
      // console.log(data)
      return data

    }
  });

  const handleDeleteOrder = (order) => {

    console.log('id vaia', order)

    fetch(`http://localhost:5000/bookings/${order._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('shoptoken')}`
      },

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success('order deleted successfully !!')
        refetch()
      })

  }





  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className='row mr-0'>
      <div className='col-2 bg-base-200 pl-5 pb-2 pt-2'>
        <DashboardLeft></DashboardLeft>
      </div>
      <div className='col-10 bg-base-200 pt-2'>
        <div className="flex justify-between">
          <h2 className="text-2xl py-2 text-secondary font-semibold lg:pl-0 pl-2">Orderlist</h2>

          <div className="dropdown dropdown-end lg:hidden block">
            <label tabIndex={0} className="btn m-1"><BiMenu className="text-2xl" /></label>
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
        <div className="overflow-x-auto bg-white">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                orders?.map((order, i) => <tr>
                  <th>{i + 1}</th>
                  <td>{order.name}</td>
                  <td>{order?.email}</td>
                  <td>{order?.productName}</td>
                  <td>{order?.quantity}</td>
                  <td>{order?.unitprice}</td>
                  <td><button
                    onClick={() =>
                      handleDeleteOrder(order)
                    }

                    className='btn btn-sm btn-danger'>DELETE</button></td>
                </tr>)
              }

            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
};

export default Dashboard;