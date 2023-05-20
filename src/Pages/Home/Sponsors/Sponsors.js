import React from 'react';
import Marquee from 'react-fast-marquee';

const Sponsors = () => {
  return (
    <div className='spons py-5 px-3'>
      <Marquee className='flex  justify-between items-center brand'>
        <img className='px-4' src="../../images/brand-01.png" alt="" />
        <img className='px-4' src="../../images/brand-02.png" alt="" />
        <img className='px-4' src="../../images/brand-03.png" alt="" />
        <img className='px-4' src="../../images/brand-04.png" alt="" />
        <img className='px-4' src="../../images/brand-05.png" alt="" />
        <img className='px-4' src="../../images/brand-06.png" alt="" />
        <img className='px-4' src="../../images/brand-07.png" alt="" />
        <img className='px-4' src="../../images/brand-08.png" alt="" />
      </Marquee>

    </div>
  );
};

export default Sponsors;