import React, { useEffect, useState } from 'react';
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
const ProductDetails = ({dangerouslySetInnerHTML}) => {
    const [ratting,setRatting] = useState(1)
    const [tabIndex,setTabIndex] = useState(0);
    const [cart,setCart] = useState(1);
    const {id} = useParams();
    const tabs = ['description','more information','reviews','report'];
    const [product,setProduct] = useState(null);


  const {user} =  UserAuth();

  useEffect(()=>{
    AxiosBase().get(`/product/${id}`)
    .then(res =>{
        setProduct(res.data);
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
    const text = `MSI G244F E2 23.8 inch FHD Rapid IPS 180Hz Gaming Monitor

The MSI G244F E2 monitor is a 23.8-inch Rapid IPS panel display that provides a sharp 1920 x 1080 pixel (FHD) resolution. With its amazing 1ms reaction time (GTG) and quick 180 Hz refresh rate, it's perfect for fast-paced gaming. Vibrant images are guaranteed by the monitor's 250 nits of brightness and 1000:1 contrast ratio. Owing to its IPS display, the monitor provides 178 degrees of horizontal and vertical viewing angle. This monitor is perfect for content production and graphics work because of its remarkable color capabilities, which encompass 94.4% Adobe RGB, 92.05% DCI-P3, and 122.88% sRGB color gamut. Moreover, Adaptive-Sync technology is included to stop screen tearing and stuttering when playing games. It includes Night Vision to improve visibility in low light conditions and Anti-Flicker and Less Blue Light technologies to lessen eye strain during extended use for increased comfort. It has one Display Port (1.2a), two HDMI (2.0b) connectors, and one Earphone out for connectivity. MSI G244F E2 23.8 inch gaming monitor can also be mounted using VESA hardware and comes with a Kensington lock for added security. When not in the stand, the monitor weights 4.2 kg.
180hz Refresh Rate +1ms Response Time

MSI G244F E2 gaming monitor has a rapid IPS screen with a refresh rate of 180 Hz and a response time of 1ms for GtG, ideal for fast-paced gaming genres like sports, racing simulations, first-person shooters, and real-time strategy. Fast and accurate movements are necessary for these kinds of games, thus having a refresh rate and quick response time monitor will give you an advantage over your rivals.
Smoothen Out Your Gameplay

Adaptive Sync technology is included into the MSI G244F E2 23.8'' Gaming Monitor to provide fluid graphics for your games. In order to get rid of screen tearing and stuttering, Adaptive Sync technology will synchronize the refresh rate of your display with your GPU. Adaptive Sync's incredibly fluid and lag-free graphics let you experience the game the way it was intended to be experienced.
Anti-Flicker Technology

The typical flicker rate of generic monitor displays is around 200 times per second, which is barely perceptible to the unaided eye but can eventually become tiring. MSI G244F E2 Gaming Monitor has Anti-Flicker technology, which has been certified by TÜV Rhineland, lessens flicker to create an extremely comfortable viewing experience.
Buy MSI G244F E2 23.8 inch FHD Rapid IPS 180Hz Gaming Monitor Star Tech

In Bangladesh, you can get the original MSI G244F E2 23.8 FHD Rapid IPS 180Hz Gaming Monitor From Star Tech. We have a large collection of the MSI Monitor to purchase for your Desktop PC. Order Online Or Visit your Nearest Star Tech Shop to get yours at the lowest price. MSI G244F E2 23.8 FHD Rapid IPS 180Hz Gaming Monitor comes with 03 Years of warranty.`


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
          <div className='lg:flex   gap-5 lg:px-0 px-2'>
                <div className='lg:block hidden w-[20%]'>
                    <DetailsSideComponents></DetailsSideComponents>
                </div>
                <div className='lg:w-[80%] space-y-6'>
                   <div className='bg-white p-10 lg:flex '>
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
                    <div className='py-2 border-t border-b'>
                        <ProductReviews></ProductReviews>
                        <ProductReviews></ProductReviews>
                        <ProductReviews></ProductReviews>
                    </div>
                    <div className='py-2 space-y-2 '>
                        <h2 className='text-xl text-black'>You're reviewing:</h2>
                        <h1 className='text-black font-semibold text-xl'>Config product Apple 128GB - Black</h1>
                        <div className='space-y5'>
                    <h2 className='text-black font-semibold'>Your Ratting <span className='text-red-500'> *</span></h2>
                   <div className='flex it-center gap-3'>
                   <Rating name="size-large" defaultValue={2} onChange={(e)=>setRatting(e.target.value)}/> <h2>{ratting < 3 && rattingPreview[0] || ratting >= 3 & ratting < 5 && rattingPreview[1] || ratting > 4 & ratting <= 5 && rattingPreview[3] }</h2>
                   </div>
                    <form action="" className='space-y-4'>
                    
                     <div>
                        <h3 className='pb-2 text-balance font-semibold'>NickName<span className='text-red-500'> *</span></h3>
                     <input type="text" name='password' className='w-full p-2 bg-white border border-gray-800 outline-none'/>
                     </div>
                     <div>
                        <h3 className='pb-2 text-balance font-semibold'>Summery<span className='text-red-500'> *</span></h3>
                     <input type="text" name='password' className='w-full p-2 bg-white border border-gray-800 outline-none'/>
                     </div>
                     <div>
                        <h3 className='pb-2 text-balance font-semibold'>Review<span className='text-red-500'> *</span></h3>
                     <textarea type="text" placeholder='write your review' name='password' className='w-full p-2 bg-white border border-gray-800 outline-none min-h-52'> </textarea>
                     </div>
                     <button type='submit' className='px-4 py-2 bg-[#ff2424] text-white'>Submit review</button>
                    </form>
                        </div>
                    </div>
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
