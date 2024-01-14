
import React, { useEffect, useState } from 'react';
import Container from '../../Components/Resuse/Container/Container';
import FilterBox from './FilterBox';
import { TfiViewGrid } from "react-icons/tfi";
import { FaList } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
import { IoGridOutline } from "react-icons/io5";
import { HiArrowNarrowRight } from "react-icons/hi";
import { CiFilter } from "react-icons/ci";
import { LuFilter } from "react-icons/lu";
import ColumnCard from '../../Components/Resuse/ProductCards/ColumnCard';
import ListCard from '../../Components/Resuse/ListCard/ListCard';
import AxiosBase from '../../Axios/AxiosBase';
const Shop = () => {
    const [cardStyle,setCardStyle] = useState('grid');
    const [products,setProducts] = useState([]);
//     const products = [{
//         name:'16 inch Macbook Pro ',
//         image:'https://i.ibb.co/ncZB27c/7.jpg',
//         price: 1500,
//         discount: 20,
//         category:'laptop',
//         brand:'apple',
//     },
//     {
//         name:"Stereo Headphone",
//         image:' https://i.ibb.co/wS8wdnQ/gh-515w-01-500x500.webp',
//         price: 50,
//         discount: 5,
//         category:'headphone',
//         brand:'sony'
//     },
   
//     {
//         name:"I phone 14 Pro",
//         image:' https://i.ibb.co/cw82wBs/Apple-i-Phone-14-Pro-jpg.webp',
//         price: 1500,
//         discount: 15,
//         category:'smartphone',
//         brand:'apple'
//     },
//     {
//         name:"Haier H43K6FG 43' FHD Android  LED Tv",
//         image:'https://i.ibb.co/PzwK11v/h43k6fg-01-500x500.jpg',
//         price: 400,
//         discount: 12,
//         category:'television',
//         brand:'haier'
//     },
//     {
//         name:'16 inch Macbook Pro ',
//         image:'https://i.ibb.co/ncZB27c/7.jpg',
//         price: 1500,
//         discount: 20,
//         category:'laptop',
//         brand:'apple',
//     },
//     {
//         name:'16 inch Macbook Pro ',
//         image:'https://i.ibb.co/ncZB27c/7.jpg',
//         price: 1500,
//         discount: 20,
//         category:'laptop',
//         brand:'apple',
//     },
    
//     {
//         name:"Stereo Headphone",
//         image:' https://i.ibb.co/wS8wdnQ/gh-515w-01-500x500.webp',
//         price: 50,
//         discount: 5,
//         category:'headphone',
//         brand:'sony'
//     },
//     {
//         name:'16 inch Macbook Pro ',
//         image:'https://i.ibb.co/ncZB27c/7.jpg',
//         price: 1500,
//         discount: 20,
//         category:'laptop',
//         brand:'apple',
//     },
//     {
//         name:"Stereo Headphone",
//         image:' https://i.ibb.co/wS8wdnQ/gh-515w-01-500x500.webp',
//         price: 50,
//         discount: 5,
//         category:'headphone',
//         brand:'sony'
//     },
   
   
// ]

useEffect(()=>{
    setCardStyle(localStorage.getItem('ego-card-style') || 'grid')
    AxiosBase().get('/products')
    .then(res=>{
        setProducts(res.data)
    })
},[])

const handleCardStyle = (value)=> {
    setCardStyle(value)
    localStorage.setItem('ego-card-style',value)
};


    return (
        <div className='bg-[#f5f5f5] py-10 font-rubik'>
            <Container>
                <div>
                    <p className='text-gray-700 pb-5'>{'Home > Shop'}</p>
                    <div className='lg:flex gap-5 '>
                    <div className='w-[20%] lg:block hidden'>
                     <FilterBox></FilterBox>
                    </div>
                    <div className='lg:w-[80%] lg:px-0 px-2'>
                        <h1 className='text-black text-3xl'>SMARTPHONE</h1>
                        <div className='py-4 px-2 my-4 bg-white flex justify-between items-center'>
                        <div className='p-2 bg-[#FF2424] text-white text-xl font-semibold lg:hidden hover:cursor-pointer'><LuFilter></LuFilter> </div>
                          <div className='lg:flex items-center gap-4 lg:block hidden'>
                          <div className='flex items-center gap-2'>
                                <div className={`p-2 ${cardStyle === 'grid'?'bg-[#FF2424] text-white':'bg-[#f5f5f5] text-black' } text-xl hover:cursor-pointer`}  onClick={()=> handleCardStyle('grid')}><IoGridOutline></IoGridOutline></div>
                                <div className={`p-2 ${cardStyle === 'list'?'bg-[#FF2424] text-white':'bg-[#f5f5f5] text-black' } text-xl hover:cursor-pointer`} onClick={()=>handleCardStyle('list')}>
                                   <FaList></FaList>
                                    </div>
                            </div>
                            <p className='text-gray-900'> Items 1-6 of 9</p>
                          </div>

                            <div className='flex items-center gap-2'>
                            <p className='text-gray-900'>Sort By</p>
                           <select name="" id="" className='bg-white'>
                            <option value="position">Position</option>
                            <option value="name">Product Name</option>
                            <option value="price">Price</option>
                            <option value="manufacturer">Manufacturer</option>
                           </select>
                           <div><FaArrowUpLong></FaArrowUpLong></div>
                            </div>
                        </div>
                        {/* products grid */}
                       {
                        cardStyle === 'grid' ?
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-10'>
                            {
                                products.map((product,index)=>{
                                    return <ColumnCard product={product} key={index}></ColumnCard>
                                })
                            }
                        </div>
                        :
                        <div className='space-y-5 mt-10'>
                        {
                            products.map((product,index)=>{
                                return <ListCard product={product} key={index}></ListCard>
                            })
                        }
                    </div>
}
                        {/* Pagination section */}
                        <div className='mt-10 py-4 px-2 bg-white md:flex justify-between  items-center md:block hidden '>
                            <div className='flex items-center gap-3'>
                                <div className='p-2 px-4 bg-[#FF2424] text-white '>1</div>
                                <div className='p-2 px-4 bg-[#FF2424] text-white '>1</div>
                                <div className='p-2 px-4 bg-[#FF2424] text-white '>1</div>
                                <div className='p-2 px-4 bg-[#FF2424] text-white '>1</div>
                                <div className='py-3 px-4 bg-[#FF2424] text-white '><HiArrowNarrowRight></HiArrowNarrowRight></div>
                            </div>
                            <div>
                            <div className='flex items-center gap-2'>
                            <p className='text-gray-900'>Show</p>
                           <select name="" id="" className='bg-white p-2 border'>
                            <option value="position">Position</option>
                            <option value="name">Product Name</option>
                            <option value="price">Price</option>
                            <option value="manufacturer">Manufacturer</option>
                           </select>
                           <p className='text-gray-900'>per page</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Container>
            
        </div>
    );
}

export default Shop;
