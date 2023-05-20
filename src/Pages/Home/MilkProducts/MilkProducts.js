import React, { useState } from 'react';
import Modal from './BookingModal/Modal';


const MilkProducts = ({ product }) => {

  const { image, productName, des, price } = product;

  const [openModal, setopenModal] = useState(false);

  const open = () => {
    setopenModal(true)
  }

  const close = () => {
    setopenModal(false)
  }






  return (

    <>
      {/* The button to open modal */}


      {/* Put this part before </body> tag */}


      <div className="card card-product bg-base-100 shadow-xl">
        <div className='products-card  relative'>
          <div className='absolute icon'>
            <img className="py-2" src="../../images/wish.svg" alt="" />
            <div className='many-icon'>
              <img className="py-2" src="../../images/prodcompare.svg" alt="" />
              <img className="py-2" src="../../images/view.svg" alt="" />
              <img className="py-2" src="../../images/add-cart.svg" alt="" />
            </div>
          </div>
        </div>
        <figure><img className='card-image img-fluid' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {productName}
            <div className="badge badge-secondary h-6">NEW</div>
          </h2>
          <p>{des}</p>
          <div className="card-actions justify-end mt-3">
            <div className="badge badge-outline ">Price : {price}</div>

            <label htmlFor="my-modal"
              onClick={open}
              className="button">Order Now</label>

            {
              openModal && <Modal
                close={close}
                product={product}
              ></Modal>
            }

          </div>
        </div>
      </div>

    </>








  );
};

export default MilkProducts;