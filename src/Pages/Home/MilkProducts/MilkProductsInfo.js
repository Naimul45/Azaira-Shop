import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import Loading from '../../Loading/Loading';


import MilkProducts from './MilkProducts';

const MilkProductsInfo = () => {
  // const [milkProducts, setMilkProducts] = useState([]);
  const [products, setProducts] = useState({});


  // const { user } = useContext(AuthContext);
  // console.log('user vai :', user)

  const { isLoading, data: milkProducts = [] } = useQuery({
    queryKey: ["milkproducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products")
      const data = await res.json()
      return data

    }
  })
  // const { isLoading, data: milkProducts = [] } = useQuery({

  //   queryKey: ["milkProducts"],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/products`)

  //       // ?email=${user?.email}
  //       // , {
  //       //   headers: {
  //       //     authorization: `bearer ${localStorage.getItem('shoptoken')}`
  //       //   }}
  //       ;
  //     const data = await res.json();
  //     console.log("data", data)
  //     return data

  //   },
  // })
  if (isLoading) {
    return <Loading></Loading>
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/products?email=${user?.email}`, {
  //     headers: {
  //       authorization: `bearer ${localStorage.getItem('shoptoken')}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log(data)
  //       setMilkProducts(data)

  //     })
  // }, [])
  return (
    <div>
      <h1 className="text-2xl font-bold text-purple-600 py-3 ml-3">Our Milk Products</h1>

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 sec-2  p-3">


        {
          milkProducts &&
          milkProducts?.map(milkProduct => <MilkProducts
            key={milkProduct._id}
            product={milkProduct}
            setProducts={setProducts}
          ></MilkProducts>)
        }

      </div>


    </div>
  );
};

export default MilkProductsInfo;