import React, { useEffect, useState } from 'react';
import Container from '../../Resuse/Container/Container';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Rating from 'react-rating';
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";
import { FiHeart, FiUser } from "react-icons/fi";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { useFetchers } from 'react-router-dom';
import AxiosBase from '../../../Axios/AxiosBase';
const Deal = () => {
   const [products,setProducts] = useState([]);
   const [products2,setProducts2] = useState([])
    const [divIndex,setDivIndex] = useState(0);
//     const products2 = [{
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
//     }
// ]
    
const [responsiveIndex,setResponsiveIndex] = useState([])


useEffect(()=>{
  AxiosBase().get('/products/deal-of-the-day')
  .then(res =>{
  setProducts2(res.data)
    const array = [...res.data]

    const arr2 = [];
     let arr3 = []
    for(let i = 0 ; array.length > i; i++){
     
      arr3.push(array[i]);
      if(arr3.length===2){
       
        arr2.push(arr3)
         arr3=[]
      }
      else if(array[i] === array[array.length-1]){
         arr2.push(arr3)
         arr3=[]
      }
        
    }
   setProducts(arr2)
    
  })

},[])

const nextIndex = ()=>{
    const next = divIndex+1;
    if(next === products.length){
        setDivIndex(0)
        return;
    }
setDivIndex(next);
}
const previousIndex = ()=>{
    const prev = responsiveIndex-1;
    
    if(prev < 0){
        setDivIndex(products.length-1);
        return;
    }
    setDivIndex(prev);
}

const nextResIndex = ()=>{
  const next = responsiveIndex+1;
  if(next === products.length){
      setResponsiveIndex(0)
      return;
  }
setDivIndex(next);
}
const previousResIndex = ()=>{
  const prev = responsiveIndex-1;
  
  if(prev < 0){
      setResponsiveIndex(products.length-1);
      return;
  }
  setResponsiveIndex(prev);
}

useEffect(()=>{
 
},[])


    return (
        <div className='font-rubik py-6'>
            <Container>
              <div className='border'>
              <div className='py-4 bg-[#FF2424] uppercase px-4 flex justify-between items-center'>
               <h1 className='md:text-3xl text-2xl text-white'>Deal Of the days</h1>
               <div className='flex items-center gap-[2px]'>
                <div className='bg-gray-200 text-black px-4 py-2' onClick={previousIndex}><FaArrowLeftLong></FaArrowLeftLong></div>
                <div className='bg-gray-200 text-black px-4 py-2' onClick={nextIndex}><FaArrowRightLong></FaArrowRightLong></div>
               </div>
                </div>
               <div className=' relative overflow-x-hidden  min-h-[300px] lg:block hidden'>
                {
                    products.map((productArr,index)=>{
                      return  <div className={`my-4 w-full  grid md:grid-cols-2 px-2  bg-white  transition- duration-[400ms] ease-in  absolute`} style={{transform:`translateX(-${divIndex*100}%)`,left:`${index*100}%`}} key={index}>
                     {
                      productArr.map((product,n)=>{
                        return    <div className='p-2 hover:shadow-md flex gap-4' key={n}>
                        <div className='w-[40%] relative'>
                            <img src={product.image} alt="" className='' />
                            <div className='bg-[#FF2424] text-white uppercase px-4 py-1 absolute top-1 right-1'><h4>SALE</h4></div>
                        </div>
                        <div className='space-y-3'>
                            <h2 className='text-gray-900 text-2xl'>{product.productName.slice(0,40)}</h2>
                           <div className='text-xl text-[#FF385c]'>
                           <Rating
          initialRating={4}
          emptySymbol={<TiStarHalfOutline></TiStarHalfOutline>}
          fullSymbol={<TiStarFullOutline></TiStarFullOutline>}
          readonly
        />
                           </div>
                          <h1 className='text-3xl font-semibold text-[#FF4242] '>${Math.round(product.pricing.price-(product.pricing.discount/100)*product.pricing.price)} {product.pricing.discount && <s className='text-xl text-gray-500 font-normal '>${product.pricing.price}</s>}</h1>
                          <div className='flex items-center gap-2 text-black'>
                          <div className='bg-gray-200 p-2 rounded-full text-xl'>
                                <PiShoppingBagOpenBold></PiShoppingBagOpenBold>
                            </div>
                          <div className='bg-gray-200 p-2 rounded-full text-xl'>
                        <FiHeart></FiHeart>
                            </div>
                            <div className='bg-gray-200 p-2 rounded-full text-xl'>
                                <IoSearch></IoSearch>
                            </div>
                          </div>
                          <div>
                          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col">
            <span className="countdown font-mono text-3xl">
              <span style={{"--value":15}}></span>
            </span>
            days
          </div> 
          <div className="flex flex-col">
            <span className="countdown font-mono text-3xl">
              <span style={{"--value":10}}></span>
            </span>
            hours
          </div> 
          <div className="flex flex-col">
            <span className="countdown font-mono text-3xl">
              <span style={{"--value":24}}></span>
            </span>
            min
          </div> 
          <div className="flex flex-col">
            <span className="countdown font-mono text-3xl">
              <span style={{"--value":49}}></span>
            </span>
            sec
          </div>
        </div>
                          </div>
                        </div>
                         </div>
                      
                      })
                     }
                       </div>
                    })
                }
               </div>
             
                <div className='lg:hidden block relative overflow-x-hidden  min-h-[300px] '>
                {
                  products2.map((product,n)=>{
                        return    <div className='p-2 hover:shadow-md flex gap-4 bg-white  transition- duration-[400ms] ease-in  absolute' style={{transform:`translateX(-${divIndex*100}%)`,left:`${n*100}%`}}   key={n}>
                        <div className='w-[40%] relative'>
                            <img src={product.image} alt="" className='' />
                            <div className='bg-[#FF2424] text-white uppercase px-4 py-1 absolute top-1 right-1'><h4>SALE</h4></div>
                        </div>
                        <div className='space-y-3'>
                            <h2 className='text-gray-900 text-2xl'>{product.productName.slice(0.40)}</h2>
                           <div className='text-xl text-[#FF385c]'>
                           <Rating
          initialRating={4}
          emptySymbol={<TiStarHalfOutline></TiStarHalfOutline>}
          fullSymbol={<TiStarFullOutline></TiStarFullOutline>}
          readonly
        />
                           </div>
                          <h1 className='text-3xl font-semibold text-[#FF4242] '>${Math.round(product.pricing.price-(product.pricing.discount/100)*product.pricing.price)} {product.pricing.discount && <s className='text-xl text-gray-500 font-normal '>${product.pricing.price}</s>}</h1>
                          <div className='flex items-center gap-2 text-black'>
                          <div className='bg-gray-200 p-2 rounded-full text-xl'>
                                <PiShoppingBagOpenBold></PiShoppingBagOpenBold>
                            </div>
                          <div className='bg-gray-200 p-2 rounded-full text-xl'>
                        <FiHeart></FiHeart>
                            </div>
                            <div className='bg-gray-200 p-2 rounded-full text-xl'>
                                <IoSearch></IoSearch>
                            </div>
                          </div>
                          <div>
                          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col">
            <span className="countdown font-mono text-3xl">
              <span style={{"--value":15}}></span>
            </span>
            days
          </div> 
          <div className="flex flex-col">
            <span className="countdown font-mono text-3xl">
              <span style={{"--value":10}}></span>
            </span>
            hours
          </div> 
          <div className="flex flex-col">
            <span className="countdown font-mono text-3xl">
              <span style={{"--value":24}}></span>
            </span>
            min
          </div> 
          <div className="flex flex-col">
            <span className="countdown font-mono text-3xl">
              <span style={{"--value":49}}></span>
            </span>
            sec
          </div>
        </div>
                          </div>
                        </div>
                         </div>
                  })
                }
              </div>
             
              </div>
            </Container>
        </div>
    );
}

export default Deal;
