import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { PiShoppingBagOpenBold } from 'react-icons/pi';
import { TiStarFullOutline, TiStarHalfOutline } from 'react-icons/ti';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';
import AxiosBase from '../../../Axios/AxiosBase';
import UserAuth from '../../../Authentication/UserAuth/UserAuth';

const ColumnCard = ({product,handleShortDetailsId,handleShortDetailsStatus,isShortDetails }) => {
    const [hover,setHover] = useState(false)
    const {user} = UserAuth()
    const handleHover = (value)=>{
         setHover(value)
    }

    const handleShortDetails = (id)=>{
      handleShortDetailsStatus(true);
      handleShortDetailsId(id)
    
    }
    const addToCart = ()=>{
      const newCart = {
          product_id:product._id,
          quantity:1,
          email:user.email,
          image:product.image,
          name:product.productName,
          price: product.pricing.price,
          discount:product.pricing.discount
      }
     
  AxiosBase().post('/add-to-cart',newCart)
  .then((res)=>{
      alert('Add to cart Successful')
  })
  }
  
    return (
       
   <div>
     <div className='relative h-full overflow-hidden bg-white pb-2' onMouseEnter={()=>handleHover(true)} onMouseLeave={()=>handleHover(false)}>
       <Link to={`/ego/product/${product._id}/details`}>
    <div className={`flex flex-col space-y-3 font-rubik p-5 hover:shadow-lg relativ h-full overflow-hidden bg-white `}  >
           <div className='flex justify-center items-center flex-grow'>
           <img src={product.image} alt="" className='w-60'/>
           </div>
            <h1 className='text-xl text-gary-900 text-center'>{product.productName.slice(0,60)}{product.productName.length > 60 &&'..'}</h1>
            <div className={`text- text-[#FF385c] flex justify-center items-center ${hover?'opacity-0':''}`}>
                          <Rating
         initialRating={4}
         emptySymbol={<TiStarHalfOutline></TiStarHalfOutline>}
         fullSymbol={<TiStarFullOutline></TiStarFullOutline>}
         readonly
       />
 </div>
 <h1 className={`text-xl text-black text-center ${hover?'opacity-0':''}`}>${product.pricing.price}</h1>
 
        </div>
        </Link>
        <div className={`w-full flex justify-center items-center gap-2 text-black absolute transition-all duration-300 ease-out ${!hover?'-bottom-9' : 'bottom-8'}`}>
                         <div className='bg-gray-200 p-2 rounded-full text-xl hover:cursor-pointer' onClick={addToCart}>
                               <PiShoppingBagOpenBold></PiShoppingBagOpenBold>
                           </div>
                         <div className='bg-gray-200 p-2 rounded-full text-xl'>
                       <FiHeart></FiHeart>
                           </div>
                           <div className='bg-gray-200 p-2 rounded-full text-xl hover:cursor-pointer' onClick={()=>handleShortDetails(product._id)}>
                               <IoSearch></IoSearch>
                           </div>
                         </div>
    </div>
   </div>
    
      
    );
}

export default ColumnCard;
