import React from 'react';

const Section2 = () => {
  return (
    <>
      <div className='sec-2 py-3 px-3'>
        <div className='flex justify-between gap-3 px-3 flex-wrap mt-4'>
          <div className='flex justify-between items-center gap-3'>
            <img src="../../images/service.png" alt="" />
            <div >
              <h1 className='text-lg font-bold'>Free Shipping</h1>
              <p className=" font-semibold">From all orders over $5</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-3'>
            <img src="../../images/service-02.png" alt="" />
            <div >
              <h1 className='text-lg font-bold'>Daily Surprise Offers</h1>
              <p className=" font-semibold">Save upto 25% off</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-3'>
            <img src="../../images/service-03.png" alt="" />
            <div >
              <h1 className='text-lg font-bold'>Support 24/7</h1>
              <p className=" font-semibold">Shop with an expert</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-3'>
            <img src="../../images/service-04.png" alt="" />
            <div >
              <h1 className='text-lg font-bold'>Affordable Prices</h1>
              <p className=" font-semibold">Get Factory Default Price</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-3'>
            <img src="../../images/service-05.png" alt="" />
            <div >
              <h1 className='text-lg font-bold'>Secure Payments</h1>
              <p className=" font-semibold">100% Protected Payment</p>
            </div>
          </div>
        </div>


        <div className='products  grid lg:grid-cols-4 grid-cols-2  container-1 mt-16 '>
          <div className='lg:flex block items-center  '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgoNwi4xN1Dq4n6EdMofwvoJ9VrYnGR_vZNi2dWWx-CICFgS8uviFxYXbTLI17xZb5sY&usqp=CAU" alt="" className='py-2' />
            <div className='ml-4'>
              <h1 className='text-lg font-bold'>Lays</h1>
              <p className=" font-semibold">Price : 15 tk</p>
            </div>
          </div>
          <div className='lg:flex block items-center  '>
            <img src="https://d3o0ecz6febi2h.cloudfront.net/product_variances/images/2020/sep/1/20/26423ee1-7690-40c1-aca1-0594f5d846ce.lg.jpg" className='py-2' alt="" />
            <div >
              <h1 className='text-lg font-bold pl-3'>Photato Crackers</h1>
              <p className=" font-semibold pl-3">Price : 10 tk</p>
            </div>
          </div>
          <div className='lg:flex block  items-center  '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm9tV5U2zTU2xuCl5TNir-znJb-D83AJ1FsQ&usqp=CAU" alt="" className='py-2' />
            <div >
              <h1 className='text-lg font-bold pl-3'>Tom's</h1>
              <p className=" font-semibold pl-3">Price : 15 tk</p>
            </div>
          </div>
          <div className='lg:flex block  items-center  '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2It2mNxBkqO5St5hP8WU5GgSwG66DuQZWA&usqp=CAU" alt="" className='py-2' />
            <div >
              <h1 className='text-lg font-bold pl-3'>Buffalo Chicken Dip</h1>
              <p className=" font-semibold pl-3">Price : 20 tk</p>
            </div>
          </div>
          <div className='lg:flex block  items-center  '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnlgrC-V-G1BhgVQKoUeDBRgtTBUVrZ_8Qw&usqp=CAU" alt="" className='py-2' />
            <div >
              <h1 className='text-lg font-bold pl-3'>Cape Code </h1>
              <p className=" font-semibold pl-3">Price : 15 tk</p>
            </div>
          </div>
          <div className='lg:flex block  items-center  '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRm6OwePZg3_vqeT73ZD7HwEykdEfnr1Optw&usqp=CAU" alt="" className='py-2' />
            <div >
              <h1 className='text-lg font-bold pl-3'>UTZ Red Hot</h1>
              <p className=" font-semibold pl-3">Price : 15 tk</p>
            </div>
          </div>
          <div className='lg:flex block  items-center  '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7AiqZVSKdikKsc1iu2SlHddkW9YuesEflrQ&usqp=CAU" alt="" className='py-2' />
            <div >
              <h1 className='text-lg font-bold pl-3'>Hawailan</h1>
              <p className=" font-semibold pl-3">Price : 15 tk</p>
            </div>
          </div>
          <div className='lg:flex block  items-center  '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFT0Dk12UrjZkhk6Wsa-zpechtoKo9WkkDw&usqp=CAU" alt="" className='py-2 ' />
            <div >
              <h1 className='text-lg font-bold pl-3'>Ruffles</h1>
              <p className=" font-semibold pl-3">Price : 15 tk</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Section2;