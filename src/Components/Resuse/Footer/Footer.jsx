import React from 'react';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    const supports = [{display:'Contact Us',link:'/'},{display:'Returns',link:'/'},,
    {display:'Frequently Asked Questions',link:'/'},
,{display:'Privacy',link:'/'},,{display:' Help',link:'/'}]
const  quickLinks = [{display:'Store Locations & Hours',link:'/'},{display:'Payment',link:'/'},,
{display:'Delivery',link:'/'},
,{display:'Returns & Refunds',link:'/'},{display:'Secure Shopping',link:'/'},{display:'Store Services',link:'/'}]
    return (
        <div className='bg-white font-rubik'>

            <Container>
                <div className='py-20 flex lg:flex-row flex-col gap-5 lg:px-0 px-2'>
                <div className='flex-1 space-y-4'>
                 <div className='space-y-2'>
                 <img src="https://magento2.magentech.com/themes/sm_ego/pub/media/logomobile/default/Logo.png" alt="" />
                 <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam inventore doloribus commodi perspiciatis praesentium, error, </p>
                 </div>
                 <div className='space-y-2'>
                    <h3 className='text-black font-semibold'>
Got Question? Call us 24/7:
</h3>
<h1 className='text-3xl text-[#FF2424]'>(+01) 444 8886 33</h1>
                 </div>
                 <div className='space-y-2'>
                 <h3 className='text-black font-semibold'>
Contact Info:
</h3>
                 <p className='text-gray-800'>San Luis Potosis Centro Historico, <br /> 78000,
New York, USA</p>
                 </div>
                </div>
                <div className='flex-1 space-y-2'>
                 <h3 className='text-black font-semibold'>
Support:
</h3>
<div className='space-y-2 flex flex-col'>
    {
        supports.map((item,index)=><Link className='text-gray-800' to={item.link}>{item.display}</Link>)
    }
</div>
                </div>
                <div className='flex-1 space-y-2'>
                 <h3 className='text-black font-semibold'>
Quick Links:
</h3>
<div className='space-y-2 flex flex-col'>
    {
        quickLinks.map((item,index)=><Link className='text-gray-800' to={item.link}>{item.display}</Link>)
    }
</div>
                </div>
                <div className='flex-1 space-y-2'>
                 <h3 className='text-black font-semibold'>Need help? Call our Award-Wining</h3>
                 <p className='text-gray-600'>Support customers 24/7, feel free to call: 11-222-3333</p>
    <form  className='space-y-2 flex flex-col'>
    <input type="text" placeholder='Enter Your Mail' className='w-full text-center p-2 border-gray-200 border outline-none' />
    <button className='w-full py-2 bg-black text-white  hover:bg-[#FF2424]'>SIGN IN</button>
    </form>
    <div className='space-y-2'>
        <h1 className='text-black font-semibold'>Follow Us</h1>
        <div className='flex items-center gap-4 text-2xl text-black'>
            <FaFacebook></FaFacebook> <FaTwitter></FaTwitter><FaLinkedin></FaLinkedin><FaInstagram></FaInstagram>
        </div>
    </div>

                </div>
                </div>
             
            </Container>
        </div>
    );
}

export default Footer;
