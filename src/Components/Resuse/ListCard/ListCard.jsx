import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { PiShoppingBagOpenBold } from 'react-icons/pi';
import { TiStarFullOutline, TiStarHalfOutline } from 'react-icons/ti';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';

const ListCard = ({product}) => {
    const navigate = useNavigate();


    const handleNavigate = (id)=>{
        navigate(`/ego/product/${id}/details`)
    }
    return (
        <div className='p-5 bg-white lg:flex font-rubik hover:cursor-pointer' onClick={()=>handleNavigate(product._id)}>
         <div className='lg:w-[30%]'>
            <img src={product.image} alt="" />
         </div>
         <div className='lg:w-[70%] space-y-3'>
            <h1 className='text-2xl text-black'>{product.productName.slice(0,60)}{product.productName.length > 60 &&'..'}</h1>
            <Rating
         initialRating={4}
         emptySymbol={<TiStarHalfOutline></TiStarHalfOutline>}
         fullSymbol={<TiStarFullOutline></TiStarFullOutline>}
         readonly
       />
       <h1 className='text-3xl text-black  '>${product.pricing.price}</h1>
       <p className='text-[14px] text-gray-800'>{product.description.slice(0,140)}...</p>
       <div className={`w-full flex  items-center gap-2 text-black transition-all duration-300 ease-out `}>
                         <div className='bg-gray-200 hover:text-[#f22424] hover:cursor-pointer p-2 rounded-full text-xl'>
                               <PiShoppingBagOpenBold></PiShoppingBagOpenBold>
                           </div>
                         <div className='bg-gray-200 hover:text-[#f22424] hover:cursor-pointer p-2 rounded-full text-xl'>
                       <FiHeart></FiHeart>
                           </div>
                           <div className='bg-gray-200 hover:text-[#f22424] hover:cursor-pointer p-2 rounded-full text-xl'>
                               <IoSearch></IoSearch>
                           </div>
                         
        </div>
         </div>
        </div>
    );
}

export default ListCard;
