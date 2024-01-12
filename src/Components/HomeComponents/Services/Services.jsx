import React from 'react';
import Container from '../../Resuse/Container/Container';
import { GoRocket } from "react-icons/go";
import { GiTakeMyMoney } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { GoGift } from "react-icons/go";
import { Link } from 'react-router-dom';
const Services = () => {
    const images = ['/images/image/1.jpg','/images/image/2.jpg','/images/image/3.jpg','/images/image/4.jpg']
    return (
        <div>
            <Container>
                <div className='flex lg:flex-row flex-col lg:flex-wrap  justify-between space-y-4 lg:px-0 px-2 font-rubik'>
                
                <div className='flex items-center gap-3'>
                        <div className='p-4 bg-gray-200 rounded-full text-3xl text-[#FF385c]'>
                            <GoRocket></GoRocket>
                        </div>
                        <div>
                            <h1 className=' text-black font-semibold'>FREE SHIPPING & RETURN</h1>
                            <p className='py-[2px]'>Free shipping on orders over $94</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='p-4 bg-gray-200 rounded-full md:text-4xl text-3xl text-[#FF385c]'>
                            <GiTakeMyMoney></GiTakeMyMoney>
                        </div>
                        <div>
                            <h1 className=' text-black font-semibold '>MONEY GUARANTEE</h1>
                            <p className='py-[2px]'> 30 days money back guarantee</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='p-4 bg-gray-200 rounded-full text-3xl text-[#FF385c]'>
                           <FiSettings></FiSettings>
                        </div>
                        <div>
                            <h1 className=' text-black font-semibold'>ONLINE SUPPORT</h1>
                            <p className='py-[2px]'>We support online 24/24 in day</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='p-4 bg-gray-200 rounded-full text-3xl text-[#FF385c]'>
                         <GoGift></GoGift>
                        </div>
                        <div>
                            <h1 className=' text-black font-semibold'>GIFT PROMOTION</h1>
                            <p className='py-[2px]'>Buy more & get special gift</p>
                        </div>
                    </div>
                </div>
                <div className='py-6 flex lg:flex-row flex-col lg:justify-between gap-3 lg:items-center'>
                {
                   images.map((item,index)=> <Link><img src={item} alt="" className='w-full' key={index}/></Link>)
                }
                </div>
            </Container>
        </div>
    );
}

export default Services;
