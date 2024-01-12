
import React from 'react';
import Container from '../../Resuse/Container/Container';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const FeaturedBrand = () => {
    const brands = [{image:'/images/Brands/1.jpg',heading:'Shop Cyclops Sale'},{image:'/images/Brands/2.jpg',heading:'Shop Cyclops Sale'},{image:'/images/Brands/1.jpg',heading:'Shop Cyclops Sale'},{image:'/images/Brands/1.jpg',heading:'Shop Cyclops Sale'}]
    return (
        <div className='mt-5 font-rubik'>
            <Container>
                <div className=' font-rubik bg-white'>
               <div className='py-2 px-4 pb-4 border-b-2 border-l-4 border-l-black flex justify-between items-center'>
               <h1 className=' uppercase text-3xl text-black'>Featured Brands</h1>
                <div className='flex items-center gap-[2px]'>
                <div className='bg-gray-200 text-black px-4 py-2' ><FaArrowLeftLong></FaArrowLeftLong></div>
                <div className='bg-gray-200 text-black px-4 py-2' ><FaArrowRightLong></FaArrowRightLong></div>
               </div>
               </div>
              <div>
            <div className='pt-5 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    brands.map((brand,item)=>{
                       return <div>
                        <img src={brand.image} alt="" />
                        <h1 className='text-xl text-black py-2'>{brand.heading}</h1>
                       </div>
                    })
                }
              </div>
              </div>
              </div>
              </Container>
              </div>
    );
}

export default FeaturedBrand;
