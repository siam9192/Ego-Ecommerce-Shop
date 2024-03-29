import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { PiShoppingBagOpenBold } from 'react-icons/pi';
import { TiStarFullOutline, TiStarHalfOutline } from 'react-icons/ti';
import Rating from 'react-rating';

const SliderCard = ({product,index,divIndex}) => {
    const [hover,setHover] = useState(false)
    const handleHover = (value)=>{
         setHover(value)
    }
    
    return (
        <div className={`flex flex-col space-y-3 font-rubik px-5 py-2 hover:shadow-lg  min-w-[300px] overflow-hidden bg-white absolute h-fit transition-transform ease-in-out duration-200`} style={{left:`${index*300}px`,transform:`translateX(-${divIndex*100}%)`}} onMouseEnter={()=>handleHover(true)} onMouseLeave={()=>handleHover(false)}>
           <div className='flex justify-center items-center flex-grow'>
           <img src={product.image} alt="" className='w-60'/>
           </div>
            <h1 className='text-xl text-gary-900 text-center'>{product.productName.slice(0,40)}</h1>
            <div className={`text-xl text-[#FF385c] flex justify-center items-center ${hover?'opacity-0':''}`}>
                          <Rating
         initialRating={4}
         emptySymbol={<TiStarHalfOutline></TiStarHalfOutline>}
         fullSymbol={<TiStarFullOutline></TiStarFullOutline>}
         readonly
       />
 </div>
 <h1 className={`text-xl text-black text-center ${hover?'opacity-0':''}`}>${product.pricing.price}</h1>
 <div className={`w-full flex justify-center items-center gap-2 text-black absolute transition-all duration-300 ease-out ${!hover?'-bottom-9' : 'bottom-8'}`}>
                         <div className='bg-gray-200 p-2 rounded-full text-xl'>
                               <PiShoppingBagOpenBold></PiShoppingBagOpenBold>
                           </div>
                         <div className='bg-gray-200 p-2 rounded-full text-xl'>
                       <FiHeart></FiHeart>
                           </div>
                           <div className='bg-gray-200 p-2 rounded-full text-xl'>
                               <IoSearch></IoSearch>
                           </div>
                         </div>
        </div>
    );
}

export default SliderCard;
