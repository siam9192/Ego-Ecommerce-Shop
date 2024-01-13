import React from 'react';
import Container from '../../Components/Resuse/Container/Container';
import { RxCross1 } from "react-icons/rx";
const ShoppingCart = () => {
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
         <div className='py-3  border-b lg:flex justify-between items-center'>
    <div className='flex gap-3'><img src="https://magento2.magentech.com/themes/sm_ego/pub/media/catalog/product/cache/edad1ca0d9fba3902e48b2d7d42dae6e/i/p/ipad-pro-2019_1.jpg" className='w-32 h-32' alt="" />
    <h3 className='text-black text-xl'>Config product Apple 128GB - Black</h3>
    </div> <div className='flex items-center gap-4'> 
        <div className='flex-1'><h3 className='text-black '>$300.00</h3></div> <div className='flex-1'><input type="text"  className='w-20 h-10 border'/></div>    <div className='flex-1 text-xl text-red-500'><RxCross1></RxCross1></div> 
          </div>
          
         </div>
         <div className='py-3  border-b lg:flex justify-between items-center'>
    <div className='flex gap-3'><img src="https://magento2.magentech.com/themes/sm_ego/pub/media/catalog/product/cache/edad1ca0d9fba3902e48b2d7d42dae6e/i/p/ipad-pro-2019_1.jpg" className='w-32 h-32' alt="" />
    <h3 className='text-black text-xl'>Config product Apple 128GB - Black</h3>
    </div> <div className='flex items-center lg:justify-normal justify-between gap-4'> 
        <div className='flex-1'><h3 className='text-black '>$300.00</h3></div> <div className='flex-1'><input type="text"  className='w-20 h-10 border'/></div>
        <div className='flex-1 text-xl text-red-500'><RxCross1></RxCross1></div> 
          </div>
          
         </div>
         <div className='py-3  border-b lg:flex justify-between items-center'>
    <div className='flex gap-3'><img src="https://magento2.magentech.com/themes/sm_ego/pub/media/catalog/product/cache/edad1ca0d9fba3902e48b2d7d42dae6e/i/p/ipad-pro-2019_1.jpg" className='w-32 h-32' alt="" />
    <h3 className='text-black text-xl'>Config product Apple 128GB - Black</h3>
    </div> <div className='flex items-center gap-4'> 
        <div className='flex-1'><h3 className='text-black '>$300.00</h3></div> <div className='flex-1'><input type="text"  className='w-20 h-10 border'/></div>    <div className='flex-1 text-xl text-red-500'><RxCross1></RxCross1></div> 
          </div>
          
         </div>
         
        </div>
        <div className='lg:w-[30%] flex flex-col h-full bg-gray-200 p-4 max-h-[450px]'>
            <div className='flex-grow'>
            <h1 className='text-xl text-black font-semibold pb-2 border-b uppercase'>SUMMERY</h1>
            <div className='flex justify-between items-center py-2 border-b   border-gray-600 text-black '>
                <h3>Subtotal</h3> <h3>$105</h3>
            </div>
            <div className='flex justify-between items-center py-2 border-b  border-gray-600 text-black '>
                <h3>Shipping</h3> <h3>$5</h3>
            </div>
            <div className='flex justify-between items-center py-5 border-b  border-gray-600 text-black '>
                <h3>Order Total</h3> <h3>$105</h3>
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
