import React, { useEffect, useState } from 'react';
import AxiosBase from '../../Axios/AxiosBase';
import Rating from 'react-rating';
import { TiStarFullOutline, TiStarHalfOutline } from 'react-icons/ti';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { FiHeart } from 'react-icons/fi';
import { RxCross2 } from "react-icons/rx";
import UserAuth from '../../Authentication/UserAuth/UserAuth';
import { Navigate } from 'react-router-dom';
const ShortDetails = ({isShortDetails,shortDetailsId,handleShortDetailsStatus}) => {
    const [product,setProduct] = useState(null);
    const [loading,setLoading] = useState(false);
    const [isFullDescription,setFullDescription] = useState(false);
    const [cart,setCart] = useState(1);
    const {user} = UserAuth();
    useEffect(()=>{
        if(!shortDetailsId){
            return;
        }
        setLoading(true)
        AxiosBase().get(`/product/get-details/${shortDetailsId}`)
   
        .then(res =>{
            setProduct(res.data);
            setLoading(false)
        })
      },[shortDetailsId])
      const increaseCart = ()=>{
        setCart (cart+1)
    }
    const decreaseCart = ()=>{
    const decrease = cart-1;
    if(decrease > 0){
        setCart(decrease)
    }
    }

    const addToCart = ()=>{
        if(!user){
            return <Navigate to='/ego/account/sign-in'></Navigate>
        }
        const newCart = {
            product_id:product._id,
            quantity:cart,
            email:user.email,
            image:product.image,
            name:product.productName,
            price: product.pricing.price,
            discount:product.pricing.discount
        }
        
    AxiosBase().post('/add-to-cart',newCart)
    .then((res)=>{
        alert('Add to cart')
    })
    }
    const handleDescription = ()=>{
        setFullDescription(!isFullDescription)
    }
    
    
    return (
        <div className={`w-full h-full bg-gray-600 bg-opacity-25 fixed top-0 z-40  transition-all duration-200 lg:p-32 md:p-20 p-2 overflow-y-scroll font-rubik`}>
            {
                loading ? <div className='flex justify-center items-center'>
                    <div className='bg-white my-10 md:p-32   md:w-1/2 w-full h-60 text-center'>
                 <div className='md:mt-0 mt-24'>
                 <span className=" loading loading-lg loading-spinner text-error "></span>
                 </div>
                </div>
                </div>
                :        <div className='bg-white p-10 lg:flex gap-5 relative'>
                <div className='lg:w-[40%]'>
                    <div><img src={product?.image} alt="" /></div>
                </div>
                <div className='lg:w-[60%] space-y-4'>
            <h1 className='text-black text-xl'>{product?.productName}</h1>
            <Rating
     initialRating={4}
     emptySymbol={<TiStarHalfOutline></TiStarHalfOutline>}
     fullSymbol={<TiStarFullOutline></TiStarFullOutline>}
     readonly
   />
   <h1 className='text-2xl text-black font-semibold'>${product?.pricing?.price}.00</h1>
   <div className='flex items-center gap-3'><div className='flex items-center gap-2 text-green-600'><IoCheckmarkOutline> 
</IoCheckmarkOutline> <h2 className='font-semibold'>In Stock</h2></div></div>


<p className='text-[14px] text-gray-800'>{isFullDescription ? product?.description :product?.description.slice(0,240)} {!isFullDescription & product?.description.length > 240 && <span className='hover:cursor-pointer'>...<span className='text-[#ff2424]' onClick={handleDescription}>Show full</span></span>}  {isFullDescription & product?.description.length > 240 && <span  className='hover:cursor-pointer'>...<span className='text-[#ff2424]' onClick={handleDescription}>Show Short</span></span>}</p>
<div className='lg:flex items-center gap-8'>
<h1>QTY</h1> <div className='flex flex-wrap items-center gap-3'>
    <div className='flex items-center gap-1'>
        <button className='px-4 py-2 text-white text-xl bg-black' onClick={increaseCart}>+</button>
        <input type="text" value={cart} className='w-32 border p-3 text-center text-black outline-none' readOnly />
        <button className='px-4 py-2 text-white text-xl bg-black' onClick={decreaseCart}>-</button>
    </div>
    <div className={`px-4 py-3 bg-[#ff2424] text-white uppercase hover:cursor-pointer`} onClick={addToCart}>Add to cart</div>
    <div className={`px-4 py-3 bg-black text-xl text-white uppercase hover:cursor-pointer`} ><FiHeart></FiHeart></div>

</div>
</div>
                </div>
                <div className='absolute right-2 top-2 text-4xl text-blac hover:cursor-pointer text-[#ff2424]' onClick={()=>handleShortDetailsStatus(false) }>
                    <RxCross2></RxCross2>
                </div>
               </div>
            }
        </div>
    );
}

export default ShortDetails;
