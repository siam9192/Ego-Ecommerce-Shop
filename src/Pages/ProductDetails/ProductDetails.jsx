import React, { useState } from 'react';
import Container from '../../Components/Resuse/Container/Container';
import Rating from 'react-rating';
import { TiStarFullOutline, TiStarHalfOutline } from 'react-icons/ti';
import { IoCheckmarkOutline } from "react-icons/io5";
const ProductDetails = () => {
    const [tabIndex,setTabIndex] = useState(0);
    const tabs = ['description','more information','reviews','report'];

    const handleTab = (index) =>{
        setTabIndex(index)
    }
    return (
        <div className='bg-[#f5f5f5] py-10 font-rubik'>
          <Container>
          <div className='flex'>
                <div className='w-[20%]'></div>
                <div className='w-[80%] space-y-6'>
                   <div className='bg-white p-10 flex '>
                    <div className='w-[40%]'>
                        <div><img src="https://magento2.magentech.com/themes/sm_ego/pub/media/catalog/product/cache/edad1ca0d9fba3902e48b2d7d42dae6e/i/p/ipad-pro-2019_1.jpg" alt="" /></div>
                    </div>
                    <div className='w-[60%] space-y-4'>
                <h1 className='text-black text-xl'>Config product Apple 128GB - White</h1>
                <Rating
         initialRating={4}
         emptySymbol={<TiStarHalfOutline></TiStarHalfOutline>}
         fullSymbol={<TiStarFullOutline></TiStarFullOutline>}
         readonly
       />
       <h1 className='text-2xl text-black font-semibold'>$600.00</h1>
       <div className='flex items-center gap-3'><p className='flex items-center gap-2 text-green-500'><IoCheckmarkOutline> <span className='text-black'>In Stock</span>
</IoCheckmarkOutline> </p></div>
<p className='text-[14px] text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam animi, maiores beatae exercitationem aliquam pariatur excepturi cumque odio vel voluptates non in sit eaque eveniet ipsam fugiat nemo, iusto ut minima ipsum? Maxime quis, harum tempora atque alias voluptates nostrum facere rerum provident cupiditate iste. Aliquid repellat a eius magnam quidem. Minus voluptatibus quasi, eveniet earum nisi quo dignissimos dolores.</p>
<div className='flex items-center gap-8'>
    <h1>QTY</h1> <div className='flex items-center gap-3'>
        <div className='flex items-center gap-1'>
            <button className='px-4 py-2 text-white text-xl bg-black'>+</button>
            <input type="text" value={1} className='w-32 border p-3 text-center text-black outline-none' readOnly />
            <button className='px-4 py-2 text-white text-xl bg-black'>-</button>
        </div>
        <div className={`px-4 py-3 bg-[#ff2424] text-white uppercase hover:cursor-pointer`} >Add to cart</div>
    </div>
</div>
                    </div>
                   </div>
                   <div className='bg-white p-10 px-5  '>
                <div className='flex items-center gap-3'>
                  {
                    tabs.map((item,index)=>{
                        return   <div className={`px-4 py-3 ${tabIndex===index ? 'bg-[#ff2424] text-white':'bg-[#f5f5f5] text-black'} uppercase hover:cursor-pointer`} onClick={()=>handleTab(index)}>{item}</div>
                    })
                  }
                   
                </div>
                   </div>
                </div>

            </div>
          </Container>
       </div>
    );
}

export default ProductDetails;
