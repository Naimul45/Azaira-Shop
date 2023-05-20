import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import RandomProducts from './RandomProducts';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Loading from '../Loading/Loading';
const RandomProductsInfo = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const { isLoading, data: randomproducts = [] } = useQuery({
    queryKey: ['randomproducts'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/randomproducts')
      const data = await res.json()
      return data
    }
  })
  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <>
      <h1 className='text-2xl py-3 ml-3 font-bold text-purple-700 '>Products</h1>
      <Carousel className='ml-4' responsive={responsive}>
        {
          randomproducts?.map(randomproduct => <RandomProducts
            key={randomproduct._id}
            product={randomproduct}
          ></RandomProducts>)
        }
      </Carousel>


    </>
  )
};

export default RandomProductsInfo;