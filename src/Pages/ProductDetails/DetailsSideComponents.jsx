import React from 'react';
import { PiShoppingBagOpenBold } from 'react-icons/pi';
import { TiStarFullOutline, TiStarHalfOutline } from 'react-icons/ti';
import Rating from 'react-rating';

const DetailsSideComponents = () => {
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
   
]
    return (
        <div className='space-y-4  font-rubik'>
        <img src="/images/image/sidebar1.jpg" alt="" />
        <div className='py-4 bg-white'>
            <h1 className='pl-2 border-l-4 text-2xl border-black uppercase pb-2 border-b border-b-gray-300'>best sellers</h1>
            <div className='space-y-2'>
               {
                products.map((product,index)=>{
                    return  <div>
                    <div className='p-2  flex gap-4'>
                      <div className='w-[40%] relative'>
                          <img src={product.image} alt="" className='w-full' />
                    
                      </div>
                      <div className='space-y-3'>
                          <h2 className='text-gray-900 hover:text-[#ff2424] hover:cursor-pointer'>{product.name}</h2>
                         <div className=' text-[#FF385c]'>
                         <Rating
        initialRating={4}
        emptySymbol={<TiStarHalfOutline></TiStarHalfOutline>}
        fullSymbol={<TiStarFullOutline></TiStarFullOutline>}
        readonly
      />
                         </div>
                        <h1 className=' font-semibold text-[#FF4242] '>${Math.round(product.price-(products[index].discount/product.price)*100)} {product.discount && <s className='text-gray-500 font-normal '>${product.price}</s>}</h1>
                     
                        <div>
                     
                        </div>
                      </div>
                       </div>
                    
                      </div>
                })
               }
            </div>
        </div>
        </div>
    );
}

export default DetailsSideComponents;
