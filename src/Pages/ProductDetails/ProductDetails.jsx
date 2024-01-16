import React, { useEffect, useRef, useState } from 'react';
import Container from '../../Components/Resuse/Container/Container';
import { Rating } from '@mui/material';
import { TiStarFullOutline, TiStarHalfOutline } from 'react-icons/ti';
import { IoCheckmarkOutline } from "react-icons/io5";
import { FiHeart } from 'react-icons/fi';
import ProductReviews from './ProductReviews';
import DetailsSideComponents from './DetailsSideComponents';
import AxiosBase from '../../Axios/AxiosBase';
import { useParams } from 'react-router-dom';
import UserAuth from '../../Authentication/UserAuth/UserAuth'
import Reviews from '../../Components/Resuse/Reviews/Reviews';
const ProductDetails = ({dangerouslySetInnerHTML}) => {
    const [ratting,setRatting] = useState(1);
    const [tabIndex,setTabIndex] = useState(0);
    const [cart,setCart] = useState(1);
    const {id} = useParams();
    const tabs = ['description','more information','reviews','report'];
    const [product,setProduct] = useState(null);
    const detailsRef = useRef(null)

  const {user} =  UserAuth();

  useEffect(()=>{
    AxiosBase().get(`/product/get-details/${id}`)
    .then(res =>{
        setProduct(res.data);
        detailsRef.current.scrollIntoView()
    })
  },[])

    const handleTab = (index) =>{
        setTabIndex(index)
    }
    const increaseCart = ()=>{
        setCart (cart+1)
    }
    const decreaseCart = ()=>{
    const decrease = cart-1;
    if(decrease > 0){
        setCart(decrease)
    }
    }
const rattingPreview = ['So poor','Good','Very good','Great']
 


const addToCart = ()=>{
    const newCart = {
        product_id:product._id,
        quantity:cart,
        email:user.email,
        image:product.image,
        name:product.productName,
        price: product.pricing.price,
        discount:product.pricing.discount
    }
    console.log(newCart)
AxiosBase().post('/add-to-cart',newCart)
.then((res)=>{
    alert('Add to cart')
})
}

    return (
        <div className='bg-[#f5f5f5] py-10 font-rubik'>
          <Container>
          <div className='lg:flex  gap-5 lg:px-0 px-2'>
                <div className='lg:block hidden w-[20%]'>
                    <DetailsSideComponents></DetailsSideComponents>
                </div>
                <div className='lg:w-[80%] space-y-6' ref={detailsRef}>
                   <div className='bg-white p-10 lg:flex gap-5 '>
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
 

<p className='text-[14px] text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam animi, maiores beatae exercitationem aliquam pariatur excepturi cumque odio vel voluptates non in sit eaque eveniet ipsam fugiat nemo, iusto ut minima ipsum? Maxime quis, harum tempora atque alias voluptates nostrum facere rerum provident cupiditate iste. Aliquid repellat a eius magnam quidem. Minus voluptatibus quasi, eveniet earum nisi quo dignissimos dolores.</p>
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
                   </div>
                   <div className='bg-white p-10 px-5  '>
                <div className='flex flex-wrap items-center gap-3'>
                  {
                    tabs.map((item,index)=>{
                        return   <div className={`px-4 py-3 ${tabIndex===index ? 'bg-[#ff2424] text-white':'bg-[#f5f5f5] text-black'} uppercase hover:cursor-pointer`} onClick={()=>handleTab(index)}>{item}</div>
                    })
                  }
                   
                </div>
                <div className={`${tabIndex === 0 ? 'block' : 'hidden'} bg-white py-10`}>
                <div  dangerouslySetInnerHTML={{__html:product?.description}}></div>
                </div>
                <div className={`${tabIndex === 2 ? 'block' : 'hidden'} bg-white py-10`}>
                <div>
                    <h1 className='pl-2 pb-2 border-l-4 border-black text-black font-semibold text-2xl uppercase'>
                    Customer Reviews
                    </h1>
                    <Reviews id={product?._id} productName={product?.productName}></Reviews>
                </div>
                </div>
                
                   </div>
                </div>
                <div className='lg:hidden'>
                    <DetailsSideComponents></DetailsSideComponents>
                </div>
            </div>
            
       
          </Container>
       </div>
    );
}

export default ProductDetails;
