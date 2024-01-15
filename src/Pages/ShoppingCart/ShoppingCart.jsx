import React, { useEffect, useState } from 'react';
import Container from '../../Components/Resuse/Container/Container';
import { RxCross1 } from "react-icons/rx";
import UserAuth from '../../Authentication/UserAuth/UserAuth';
import AxiosBase from '../../Axios/AxiosBase';
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
  // const subTotal = carts.reduce((prev,current)=> {},0 )
  // const subTotal = carts.reduce((prev,current)=> prev + current.price,0)
  let subtotal = 0;
   carts.forEach(current=> {
   
   subtotal =  (parseInt((current.price-((current.discount/current.price)*100))*current.quantity)) + subtotal;
   })
  console.log( (parseInt((5/subtotal)*100)))
    return (
        <div className=' font-rubik'>
         <Container>
      <div className='lg:flex gap-3 lg:px-0 px-2'>
        <div className='lg:w-[70%]'>
        <h1 className='text-2xl text-black font-semibold uppercase'>shopping cart</h1>
         <div className='py-3  border-b lg:flex justify-between items-center lg:block hidden  '>
          <h3 className='text-black text-xl'>Item</h3> <div className='flex items-center gap-4'>
          <h3 className='text-black text-xl'>Price</h3> <h3 className='text-black text-xl'>Qty</h3> 
          <h3 className='text-black text-xl'>Price</h3> <h3 className='text-black text-xl'>Remove</h3> 
          </div>
          
         </div>
       {
        carts.map((cart,index)=>{
          return   <div className='py-3  border-b lg:flex justify-between items-center'>
          <div className='flex gap-3'><img src={cart.image} className='w-32 h-32' alt="" />
          <h3 className='text-black text-xl'>{cart.name}</h3>
          </div> <div className='flex items-center gap-4'> 
              <div className='flex-1'><h3 className='text-black '>${parseInt((cart.price-((cart.discount/cart.price)*100))*cart.quantity)}.00</h3></div> <div className='flex-1'><input type="number" value={cart.quantity}  className='w-20 h-10 border text-center'/></div>    <div className='flex-1 text-xl text-red-500'><RxCross1></RxCross1></div> 
                </div>
                
               </div>
         
        })
       }
         
        </div>
        <div className='lg:w-[30%] flex flex-col h-full bg-gray-200 p-4 max-h-[450px]'>
            <div className='flex-grow'>
            <h1 className='text-xl text-black font-semibold pb-2 border-b uppercase'>SUMMERY</h1>
            <div className='flex justify-between items-center py-2 border-b   border-gray-600 text-black '>
                <h3>Subtotal</h3> <h3>${subtotal}</h3>
            </div>
            <div className='flex justify-between items-center py-2 border-b  border-gray-600 text-black '>
                <h3>Shipping</h3> <h3>${subtotal + (5/subtotal)*100}</h3>
            </div>
            <div className='flex justify-between items-center py-5 border-b  border-gray-600 text-black '>
                <h3>Order Total</h3> <h3>${subtotal + (subtotal + parseInt((5/subtotal)*100))}</h3>
            </div>
            </div>
          <div className='pt-5'>
          <button className='bg-[#292626] text-white  uppercase w-full py-3'>proceed and checkout</button>
          </div>
        </div>
      </div>
       
         </Container>
        </div>
    );
}

export default ShoppingCart;
