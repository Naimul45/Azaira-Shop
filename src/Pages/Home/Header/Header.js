import React from 'react';


const Header = () => {
  return (
    <>
      <div className='py-3 row mr-0 w-full'>
        <div className='col-lg-6 carousel-img col-sm-12 relative mb-2 lg:mb-0'>
          <img src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F7c585aa4-e22b-11ea-9a3a-c45f6db42dc9.jpg?crop=4762%2C3175%2C119%2C79" className='rounded-3' alt="" />

          <div className='absolute des text-white '>
            <div className="pl-8">
              <h2 className='text-2xl font-bold '>This is <span className='text-sky-500'>Indian</span> <br /> Hunny</h2>
              <p className="text-xl text font-semibold">Price : 230 tk</p>
            </div>
          </div>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 ml-3 lg:ml-0 gap-2  col-sm-12 col-lg-6  '>
          <div className='container p-0 relative'>
            <img src="https://www.shutterstock.com/image-photo/honey-jar-honeycomb-on-black-260nw-1173412054.jpg" className='rounded-3' alt="" />
            <div className='absolute des text-white '>
              <div className="pl-8">
                <h2 className='text-2xl font-bold '>This is <span className='text-sky-500'>Indian</span> <br /> Hunny</h2>
                <p className="text-xl text font-semibold">Price : 230 tk</p>
              </div>
            </div>
          </div>
          <div className="container p-0 relative">
            <img src="https://www.shutterstock.com/image-photo/honey-bee-honeycomb-dipper-dry-260nw-1356483455.jpg
" alt="" className='rounded-3' />
            <div className='absolute des text-white '>
              <div className="pl-8">
                <h2 className='text-2xl font-bold '>This is <span className='text-sky-500'>Indian</span> <br /> Hunny</h2>
                <p className="text-xl text font-semibold">Price : 230 tk</p>
              </div>
            </div>
          </div>
          <div className="container p-0 relative">
            <img src="https://img.freepik.com/premium-photo/honey-drips-from-spoon-into-jar-black-background_222185-1240.jpg" alt="" className='rounded-3' />
            <div className='absolute des text-white '>
              <div className="pl-8">
                <h2 className='text-2xl font-bold '>This is <span className='text-sky-500'>Indian</span> <br /> Huney</h2>
                <p className="text-xl text font-semibold">Price : 230 tk</p>
              </div>
            </div>
          </div>
          <div className="container p-0 relative">
            <img src="https://img.freepik.com/premium-photo/honeycombs-jar-with-honey-dipper_185193-17672.jpg" alt="" className='rounded-3 img-fluid' />
            <div className='absolute des text-white '>
              <div className="pl-8">
                <h2 className='text-2xl font-bold '>This is <span className='text-sky-500'>Indian</span> <br /> Hunny</h2>
                <p className="text-xl text font-semibold">Price : 230 tk</p>
              </div>
            </div>
          </div>

        </div>

      </div >
    </>
  );
};

export default Header;