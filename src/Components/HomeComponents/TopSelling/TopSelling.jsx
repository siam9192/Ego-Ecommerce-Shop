
import React, { useState } from 'react';
import Container from '../../Resuse/Container/Container';
import ColumnCard from '../../Resuse/ProductCards/ColumnCard';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import SliderCard from '../../Resuse/ProductCards/SliderCard'
const TopSelling = () => {
    const [divIndex,setDivIndex] = useState(0);
    const products = [{
        name:'16 inch Macbook Pro ',
        image:'https://i.ibb.co/ncZB27c/7.jpg',
        price: 1500,
        discount: 20,
        category:'laptop',
        brand:'apple',
    },
    // {
    //     name:"Addyvero Woman's  Dress",
    //     image:'https://i.ibb.co/0J4BMxG/81-Jbx3rpj4-L-AC-SX569.jpg',
    //     price: 80,
    //     discount: 5,
    //     category:'dress',
    //     brand:null,

    // },
    {
        name:"Stereo Headphone",
        image:' https://i.ibb.co/wS8wdnQ/gh-515w-01-500x500.webp',
        price: 50,
        discount: 5,
        category:'headphone',
        brand:'sony'
    },
   
    {
        name:"I phone 14 Pro",
        image:' https://i.ibb.co/cw82wBs/Apple-i-Phone-14-Pro-jpg.webp',
        price: 1500,
        discount: 15,
        category:'smartphone',
        brand:'apple'
    },
    {
        name:"Haier H43K6FG 43' FHD Android  LED Tv",
        image:'https://i.ibb.co/PzwK11v/h43k6fg-01-500x500.jpg',
        price: 400,
        discount: 12,
        category:'television',
        brand:'haier'
    },
    {
        name:'16 inch Macbook Pro ',
        image:'https://i.ibb.co/ncZB27c/7.jpg',
        price: 1500,
        discount: 20,
        category:'laptop',
        brand:'apple',
    },
    {
        name:'16 inch Macbook Pro ',
        image:'https://i.ibb.co/ncZB27c/7.jpg',
        price: 1500,
        discount: 20,
        category:'laptop',
        brand:'apple',
    },
    
    {
        name:"Stereo Headphone",
        image:' https://i.ibb.co/wS8wdnQ/gh-515w-01-500x500.webp',
        price: 50,
        discount: 5,
        category:'headphone',
        brand:'sony'
    },
   
   
   
]

const nextIndex = ()=>{
    const next = divIndex+1;
    if(next === products.length){
        setDivIndex(0)
        return;
    }
setDivIndex(next);
}
const previousIndex = ()=>{
    const prev = divIndex-1;
    
    if(prev < 0){
        setDivIndex(products.length-1);
        return;
    }
    setDivIndex(prev);
}
    return (
        <div className='mt-5'>
            <Container>
                <div className=' font-rubik bg-white'>
               <div className='py-2 px-4 pb-4 border-b-2 border-l-4 border-l-black flex justify-between items-center'>
               <h1 className=' uppercase text-3xl text-black'>Top selling</h1>
                <div className='flex items-center gap-[2px]'>
                <div className='bg-gray-200 text-black px-4 py-2' onClick={previousIndex}><FaArrowLeftLong></FaArrowLeftLong></div>
                <div className='bg-gray-200 text-black px-4 py-2' onClick={nextIndex}><FaArrowRightLong></FaArrowRightLong></div>
               </div>
               </div>
              <div>
            <div className='mt-5 min-h-[500px] overflow-x-hidden relative'>
              
                {
                    products.map((product,index)=>{
                        return <SliderCard product = {product} index={index} divIndex={divIndex} key={index}></SliderCard>
                    })
                }
                </div>
              </div>
                </div>
            </Container>
        </div>
    );
}

export default TopSelling;
