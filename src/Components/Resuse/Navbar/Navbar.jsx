import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../Container/Container';
import { FiHeart, FiUser } from "react-icons/fi";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveNavbar from './ResponsiveNavbar';

const Navbar = () => {
//   Hooks
const [departmentsMenu,setDepartmentsMenu] = useState(false)
const [accountBar,setAccountBar]  = useState(false);
const [cardBar,setCartBar] = useState(false);
const [isResponsiveNavbar,setIsResponsiveNavbar] = useState(false);

const {pathname} = useLocation()

    const categories = ["Electronics", "Clothing & Fashion", "Home & Furniture", "Beauty & Personal Care", "Books & Media", "Sports & Outdoors", "Toys & Games", "Automotive", "Health & Wellness", "Appliances", "Jewelry & Accessories", "Pet Supplies", "Office & Stationery", "Gourmet Food & Grocery", "Baby & Kids", "Travel & Luggage", "Crafts & Hobbies", "Gifts & Occasions", "Art & Collectibles", "Fitness & Exercise", "Garden & Outdoor", "Tech Accessories", "Musical Instruments", "Party Supplies", "Smart Home", "Kitchen & Dining", "DIY & Tools", "Virtual Reality", "Watches"];
    const departments = ["Electronics", "Clothing", "Home & Furniture", "Beauty & Personal Care", "Books & Media", "Sports & Outdoors", "Toys & Games", "Automotive", "Health & Wellness", "Appliances", "Jewelry & Accessories", "Pet Supplies", "Office & Stationery", "Gourmet Food & Grocery", "Baby & Kids", "Travel & Luggage", "Crafts & Hobbies", "Gifts & Occasions", "Art & Collectibles", "Fitness & Exercise", "Garden & Outdoor", "Tech Accessories", "Musical Instruments", "Party Supplies", "Smart Home", "Kitchen & Dining", "DIY & Tools", "Virtual Reality", "Watches"];

// element control functions
const handleDepartMentsMenu = (value)=>{
setDepartmentsMenu(value)
}

const handleResponsiveNavbar = (value)=>{
  setIsResponsiveNavbar(value)
}

const handleAccountBar = ()=>{
  setAccountBar(!accountBar)
}
const handleCard =() =>{
  setCartBar(!cardBar)
}

useEffect (()=>{
  setIsResponsiveNavbar(false)
},[pathname])

    return (
        <div className='font-rubik'>
         <div className='lg:block hidden py-3 bg-[#e7e7e7] w-full'>
         <Container>
           <div className=' flex justify-between item-center'>
            <p>Hello Guest! Welcome to our online store</p>
            <div className='flex items-center gap-2'>
                <Link>(+888) 9434 666 888</Link>
                <Link>FAQs</Link>
                <Link>Tracking Orders</Link>
                <Link>English</Link>
            </div>
            </div>
           </Container>
         </div>
           <div className='py-5 lg:px-0 px-2 bg-white lg:border-b  border-gray-200'>
           <Container>
                <div className='flex justify-between items-center '>
                  <div className="text-2xl text-black lg:hidden block" onClick={()=>{setIsResponsiveNavbar(true)
                  console.log(1111)}}>
                  <GiHamburgerMenu></GiHamburgerMenu>
                  </div>
                 <img src="https://magento2.magentech.com/themes/sm_ego/pub/media/logomobile/default/Logo.png" alt="" />
                 <div className='lg:flex items-center px-2  border border-gray-200 rounded-full lg:block hidden'>
                    <select name="" id="" className='bg-transparent p-3 border-r border-gray-300'>
                      {
                        categories.map(item =>{
                           return <option value={item} key={item}>{item}</option>
                        })
                      }
                    </select>

                 <input type="text" placeholder='Search products'  className=' w-[500px] py-3 px-2 text-black bg-transparent border-none outline-none' />
                 <button className='text-white px-6 py-2 rounded-full bg-[#FE2424]'>Search</button>
                 </div>
                 <div className='flex items-center gap-4'>
             <div className='hover:cursor-pointer' onMouseEnter={handleAccountBar} onMouseLeave={handleAccountBar}>
             <FiUser className='text-2xl text-black hover:text-[red] lg:block hidden'></FiUser>
             <div className={`p-2 border absolute flex flex-col gap-2 ${accountBar?'block' :'hidden'}`} >
              <Link to={'/ego/account/sign-in'} className='p-1 bg-gray-200 text-black'>Sign in</Link>
              <Link to={'/ego/account/register'} className='p-1 bg-gray-200 text-black'>Register</Link>
              {/* <Link>Register</Link> */}
             </div>
             </div>
             <div>
             <FiHeart className='text-2xl text-black hover:text-[red] lg:block hidden'></FiHeart>
             </div>
             <div>
            <Link to={'/ego/my-cart'}><PiShoppingBagOpenBold className='text-2xl text-black hover:text-[red]'></PiShoppingBagOpenBold></Link>
             </div>
             <div>
                <h4 className='text-xl text-black lg:block hidden'>$0.00</h4>
             </div>
                 </div>
                </div>
            </Container>
           </div>
           <div className='py-4 bg-white lg:block hidden'>
            <Container>
                <div className='flex justify-between items-center '>
                  <div className='relative'onMouseLeave={()=>handleDepartMentsMenu(false)}>
                  <div className='p-4 px-14  bg-[#FE2424] text-white tex-xl hover:cursor-pointer' onMouseEnter={()=>handleDepartMentsMenu(true)} >All DEPARTMENTS</div>
                  <div className={`absolute left-0 py-2 flex flex-col w-full max-h-[500px]  border overflow-y-auto bg-white text-gray-700 z-40 ${departmentsMenu?'block' : 'hidden'}`} >
                    {
                        departments.map((department,index)=>{
                        return <Link className='p-2 hover:bg-gray-200 hover:border-l-4 hover:border-l-[#FE2424] ' key={index}>{department}</Link>
                        })
                    }
                  </div>
                  </div>
                    <nav >
                    <ul className='flex text-black items-center gap-4'>
                        <Link>Home</Link>
                        <Link to='/ego/shop'>Shop</Link>
                        <Link>New Arrivals</Link>
                        <Link>Contact Us</Link>
                        <Link to='/about'>About Us</Link>
                        <Link to='/add-product'>Add Product</Link>
                    </ul>
                </nav>
              
               
                <img src="https://i.ibb.co/XfHyxKN/pngwing-com-12.png" alt="" className='w-24' />
            
                </div>
                
            </Container>
           </div>
           <ResponsiveNavbar isResponsiveNavbar={isResponsiveNavbar} handler = {handleResponsiveNavbar}></ResponsiveNavbar>
        </div>

    );
}

export default Navbar;
