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
        navigate('/ego/product/id/details')
    }
    return (
        <div className='p-5 bg-white lg:flex font-rubik hover:cursor-pointer' onClick={()=>handleNavigate(89)}>
         <div className='lg:w-[30%]'>
            <img src={product.image} alt="" />
         </div>
         <div className='lg:w-[70%] space-y-3'>
            <h1 className='text-2xl text-black'>{product.name}</h1>
            <Rating
         initialRating={4}
         emptySymbol={<TiStarHalfOutline></TiStarHalfOutline>}
         fullSymbol={<TiStarFullOutline></TiStarFullOutline>}
         readonly
       />
       <h1 className='text-3xl text-black  '>${product.price}</h1>
       <p className='text-[14px] text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam animi, maiores beatae exercitationem aliquam pariatur excepturi cumque odio vel voluptates non in sit eaque eveniet ipsam fugiat nemo, iusto ut minima ipsum? Maxime quis, harum tempora atque alias voluptates nostrum facere rerum provident cupiditate iste. Aliquid repellat a eius magnam quidem. Minus voluptatibus quasi, eveniet earum nisi quo dignissimos dolores.</p>
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
