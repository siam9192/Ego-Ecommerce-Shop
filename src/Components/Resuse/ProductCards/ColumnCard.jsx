import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { PiShoppingBagOpenBold } from 'react-icons/pi';
import { TiStarFullOutline, TiStarHalfOutline } from 'react-icons/ti';
import Rating from 'react-rating';

const ColumnCard = ({product,index}) => {
    const [hover,setHover] = useState(false)
    const handleHover = (value)=>{
         setHover(value)
    }
    return (
        <div className={`flex flex-col space-y-3 font-rubik p-5 hover:shadow-lg relative h-full overflow-hidden bg-white `}  onMouseEnter={()=>handleHover(true)} onMouseLeave={()=>handleHover(false)}>
           <div className='flex justify-center items-center flex-grow'>
           <img src={product.image} alt="" className='w-60'/>
           </div>
            <h1 className='text-xl text-gary-900 text-center'>{product.name}</h1>
            <div className={`text-xl text-[#FF385c] flex justify-center items-center ${hover?'opacity-0':''}`}>
                          <Rating
         initialRating={4}
         emptySymbol={<TiStarHalfOutline></TiStarHalfOutline>}
         fullSymbol={<TiStarFullOutline></TiStarFullOutline>}
         readonly
       />
 </div>
 <h1 className={`text-xl text-black text-center ${hover?'opacity-0':''}`}>${product.price}</h1>
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

export default ColumnCard;
