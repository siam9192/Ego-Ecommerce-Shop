import React from 'react';
import Container from '../../Resuse/Container/Container';
import ColumnCard from '../../Resuse/ProductCards/ColumnCard';

const RecomendedProducts = () => {
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
    return (
        <div className='mt-5'>
        <Container>
            <div className=' font-rubik bg-white'>
           <div className='py-2 px-4 pb-4 border-b-2 border-l-4 border-l-black flex justify-between items-center'>
           <h1 className=' uppercase text-3xl text-black'>Reccomended For You</h1>
           </div>
           <div className='pt-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
           {
                    products.slice(0,4).map((product,index)=>{
                        return <ColumnCard product = {product} index={index}  key={index}></ColumnCard>
                    })
                }
           </div>
           </div>
           </Container>
        </div>
    );
}

export default RecomendedProducts;
