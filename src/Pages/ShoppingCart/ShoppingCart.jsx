import React, { useEffect, useState } from 'react';
import Container from '../../Components/Resuse/Container/Container';
import { RxCross1 } from "react-icons/rx";
import UserAuth from '../../Authentication/UserAuth/UserAuth';
import AxiosBase from '../../Axios/AxiosBase';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios';
const ShoppingCart = () => {
  const [carts,setCarts] = useState([]);
  const {user} = UserAuth();
  

  useEffect(()=>{
   if(user){
    AxiosBase().get(`/user/cart/${user.email}`)
    .then(res=>{
      setCarts(res.data)
    })
   }
  },[user])
 
const getPercentageValue = (mainNumber,percent)=>{
  const result = (percent/100)*mainNumber;
  return parseInt(result);
}

  let subtotal = 0;
   carts.forEach(current=> {
   
   subtotal = ((current.price-getPercentageValue(current.price,current.discount))*current.quantity) + subtotal;
   })
  
  const deleteCart = (id,index)=>{
    AxiosBase().delete(`/user/cart/delete?id=${id}`)
    .then((res)=>{
      if(res.data.deletedCount > 0){
        alert('Cart deleted successfully');
        const  array = carts;
        carts.splice(index,1);
        setCarts([...array])
      }
    })
    .catch((error)=>{
      alert('Something went wrong')
    })
  }
  const handleQuantity = (e,index)=>{
   const array = carts
    array[index].quantity = parseInt(e.target.value) || 1;
    setCarts([...array])

   
  }
  const makePayment =async()=>{
    const stripe = await loadStripe('pk_test_51OEFoaF0un34BsUzlCeA1Qjv16j4AbeWpd3AUsVgVxb4JD1DbZ57GjcCYn8sNbeoiHX8svh7iTzqMTc2mmymbdXr00cb9TNfxr')
    const body = {
    products:carts,
  
  }
    const response = await AxiosBase().post('/create-checkout-session',body);
    const session = response.data
    const result = stripe.redirectToCheckout({
      sessionId:session.id
    });
    if(result.error){
      console.log(result.error)
    }


  }
    return (
        <div className=' font-rubik'>
         <Container>
      <div className='lg:flex gap-5 lg:px-0 px-2'>
        <div className='lg:w-[70%]'>
        <h1 className='text-2xl text-black font-semibold uppercase'>shopping cart</h1>
         <div className='py-3  border-b lg:flex justify-between items-center lg:block hidden  '>
          <h3 className='text-black text-xl'>Item</h3> <div className='flex items-center gap-4'>
          <h3 className='text-black text-xl'>Price</h3> <h3 className='text-black text-xl'>Qty</h3> 
          <h3 className='text-black text-xl'>Price</h3> <h3 className='text-black text-xl'>Remove</h3> 
          </div>
          
         </div>
      {
        carts.length ? 
       <>
        {
          carts.map((cart,index)=>{
            return   <div className='py-3  border-b lg:flex justify-between items-center'>
            <div className='flex gap-3'><img src={cart.image} className='w-32 h-32' alt="" />
            <h3 className='text-black text-xl'>{cart.name}</h3>
            </div> <div className='flex items-center gap-4'> 
                <div className='flex-1'><h3 className='text-black '>${((cart.price-getPercentageValue(cart.price,cart.discount))*cart.quantity)}.00</h3></div> <div className='flex-1'><input type="number" defaultValue={cart.quantity}  className='w-20 h-10 border text-center' onChange={(e)=>handleQuantity(e,index)}/></div>    <div className='flex-1 text-xl text-red-500 hover:cursor-pointer' onClick={()=>deleteCart(cart._id,index)}><RxCross1></RxCross1></div> 
                  </div>
                  
                 </div>
           
          })
         }</>
         :
         <div className='min-h-52'>
          <h1 className='text-black text-3xl text-center py-14'>You have no product on cart</h1>
         </div>
      }
         
        </div>
        <div className='lg:w-[30%] flex flex-col h-full bg-gray-100 px-5 py-5 pb-10 max-h-[450px]'>
            <div className='flex-grow'>
            <h1 className='text-xl text-black font-semibold pb-2 border-b uppercase'>SUMMERY</h1>
            <div className='flex justify-between items-center py-2 border-b   border-gray-600 text-black '>
                <h3>Subtotal</h3> <h3>${subtotal}</h3>
            </div>
            <div className='flex justify-between items-center py-2 border-b  border-gray-600 text-black '>
                <h3>Shipping</h3> <h3>${getPercentageValue(subtotal,5)}</h3>
            </div>
            <div className='flex justify-between items-center py-5 border-b  border-gray-600 text-black '>
                <h3>Order Total</h3> <h3>${subtotal + getPercentageValue(subtotal,5)}</h3>
            </div>
            </div>
          <div className='pt-5'>
          <button className='bg-[#292626] text-white  uppercase w-full py-3' onClick={makePayment}>proceed and checkout</button>
          </div>
        </div>
      </div>
       
         </Container>
        </div>
    );
}

export default ShoppingCart;
