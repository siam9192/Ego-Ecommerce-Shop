
import React from 'react';
import Container from '../../Resuse/Container/Container';

const ShopByBrands = () => {
    const brands = ['/images/Sponsered/1.jpg','/images/Sponsered/2.jpg','/images/Sponsered/3.jpg','/images/Sponsered/4.jpg','/images/Sponsered/6.jpg','/images/Sponsered/.jpg']
    return (
        <div className='mt-5'>
        <Container>
            <div className=' font-rubik bg-white'>
           <div className='py-2 px-4 pb-4 border-b-2 border-l-4 border-l-black flex justify-between items-center'>
           <h1 className=' uppercase text-3xl text-black'>Shop By Brands</h1>
           </div>
           <div className='pt-5 flex flex-wrap'>
           {
                    brands.slice(0,4).map((brand,index)=>{
                        return  <img src={brand} alt="" className='w-52'/>
                    })
                }
           </div>
           </div>
         
           </Container>
        </div>
    );
}

export default ShopByBrands;
