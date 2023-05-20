import React from 'react';
import { useQuery } from '@tanstack/react-query';
import DiscountProducts from './DiscountProducts';

const CakeProducts = () => {
  const { isLoading, refetch, data: cakes = [] } = useQuery({
    queryKey: ["cakes"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/cake")
      const data = await res.json()
      return data

    }
  })
  return (

    <>
      <h1 className='text-2xl font-bold title'>Special Offers</h1>

      <div className='py-3 w-full flex flex-col lg:flex-row px-3'>
        <div className="w-full mb-2 lg:mb-0 lg:w-3/12 bg-teal-500 p-2 mr-3 rounded-3">
          <h1 className="text-2xl font-bold text-white py-2">Discount</h1>
          <p className='text-lg font-semibold text-white pb-2'>Who doesn't want to get a discount this summer? And we brought you 10% discount on every product.</p>
          <img className='rounded-4 mt-4' src="https://jooinn.com/images/special-offer-character-shows-bargain-offering-or-discount.jpg" alt="" />
          <p className='text-lg font-semibold text-white pb-2 mt-4'>Who doesn't want to get a discount this summer? And we brought you 10% discount on every product..</p>

        </div>
        <div className='grid lg:grid-cols-4 grid-cols-1 lg:ml-1 ml-0 gap-2 w-full'>

          {
            cakes?.map(cake => <DiscountProducts
              key={cake._id}

              cake={cake}
              refetch={refetch}
            ></DiscountProducts>)
          }
        </div>












      </div>
    </>
  );
};

export default CakeProducts;