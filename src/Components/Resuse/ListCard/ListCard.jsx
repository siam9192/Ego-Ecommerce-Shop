import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { PiShoppingBagOpenBold } from 'react-icons/pi';
import { TiStarFullOutline, TiStarHalfOutline } from 'react-icons/ti';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';
import UserAuth from '../../../Authentication/UserAuth/UserAuth';
import AxiosBase from '../../../Axios/AxiosBase';

const ListCard = ({product,handleShortDetailsId,handleShortDetailsStatus,isShortDetails}) => {
    const navigate = useNavigate();
    const {user} = UserAuth()
    

    const handleNavigate = (id)=>{
        navigate(`/ego/product/${id}/details`)
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
        <div className='p-5 bg-white lg:flex font-rubik hover:cursor-pointer' >
         <div className='lg:w-[30%]'>
            <img src={product.image} alt="" />
         </div>
         <div className='lg:w-[70%] space-y-3'>
         
       <div className={`w-full  gap-2 text-black transition-all duration-300 ease-out `}>
        <div className='space-y-3' onClick={()=>handleNavigate(product._id)}>
        <h1 className='text-2xl text-black'>{product.productName.slice(0,60)}{product.productName.length > 60 &&'..'}</h1>
            <Rating
         initialRating={4}
         emptySymbol={<TiStarHalfOutline></TiStarHalfOutline>}
         fullSymbol={<TiStarFullOutline></TiStarFullOutline>}
         readonly
       />
       <h1 className='text-3xl text-black  '>${product.pricing.price}</h1>
       <p className='text-[14px] text-gray-800'>{product.description.slice(0,140)}...</p>
        </div>
      <div className='flex items-center gap-2 pt-3'>
      <div className='bg-gray-200 hover:text-[#f22424] hover:cursor-pointer p-2 rounded-full text-xl'onClick={addToCart}>
                               <PiShoppingBagOpenBold></PiShoppingBagOpenBold>
                           </div>
                         <div className='bg-gray-200 hover:text-[#f22424] hover:cursor-pointer p-2 rounded-full text-xl'>
                       <FiHeart></FiHeart>
                           </div>
                           <div className='bg-gray-200 hover:text-[#f22424] hover:cursor-pointer p-2 rounded-full text-xl' onClick={()=>handleShortDetails(product._id)}>
                               <IoSearch></IoSearch>
                           </div>          </div>    
                         
        </div>
         </div>
        </div>
    );
}

export default ListCard;
