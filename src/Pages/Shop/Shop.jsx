
import React, { useEffect, useRef, useState } from 'react';
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
import { useQuery } from '@tanstack/react-query';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import ResponsiveFilterBox from './ResponsiveFilterBox';
const Shop = () => {
    const [cardStyle,setCardStyle] = useState('grid');
    const searchParams = useSearchParams();
    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [isResponsiveFilterBox,setIsResponsiveFilterBox] = useState(false)
    const [searchCategories,setSearchCategories] = useState([]);
    const [searchManufacture,setSearchManufacture] = useState([]);
    const [minPrice,setMinPrice] = useState(0)
    const [maxPrice,setMaxPrice] = useState(0)
    const [documentCount,setDocumentCount] = useState([]);
    const [productPerPage,setProductPerPage] = useState(12)
    const [pages,setPages] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
   
    const navigate = useNavigate();
   const productRef = useRef(null);
    // const {data:products=[],refetch,isLoading} = useQuery({
    //     queryKey:['products'],
    //     queryFn:async()=>{
    //         const res = await AxiosBase().get(`/products?key=""&category=${searchParams[0].get('category') || ''}&brands=${searchParams[0].get('brands')||''}`);
    //         return res.data
    //     }
    // })

const perPage = [12,25,50]
useEffect(()=>{
    setCardStyle(localStorage.getItem('ego-card-style') || 'grid')
   let categoryParams = '';
   let brandParams = '';
    searchCategories.forEach(item=>{
        categoryParams = categoryParams + '--' + item
    })
    
    searchManufacture.forEach(item=>{
        brandParams = brandParams + '--' + item
    })
  
    if(searchCategories||searchManufacture||minPrice||maxPrice){
        navigate(`/ego/shop?keyword=''&category=${categoryParams}&brands=${brandParams}&minPrice=${minPrice||0}&maxPrice=${maxPrice||0}`)
    }
   
    
    

},[searchCategories,searchManufacture,minPrice,maxPrice])

useEffect(()=>{
  
    AxiosBase().get(`/products?key=""&category=${searchParams[0].get('category') || ''}&brands=${searchParams[0].get('brands')||''}&minPrice=${searchParams[0].get('minPrice')||''}&maxPrice=${searchParams[0].get('maxPrice')||''}&perPage=${perPage}&currentPage=${currentPage}`)
    .then(res=>{
        setProducts(res.data)
        productRef.current.scrollIntoView()
    })
    AxiosBase().get(`/products/document-count?key=""&category=${searchParams[0].get('category') || ''}&brands=${searchParams[0].get('brands')||''}&minPrice=${searchParams.minPrice}&maxPrice=${searchParams.maxPrice}&perPage=${perPage}&currentPage=${currentPage}`)
    .then(res =>{
       setDocumentCount(res.data.document)
    const count = Math.ceil(res.data.document/productPerPage);
    
    const array = []
       for(let i = 1;i<= count;i++){
       array.push(i)
       }
       setPages(array)
    })
},[searchParams[0],currentPage])


const handleSearchCategories = (e)=>{
    if(e.target.checked){
        setSearchCategories([...searchCategories,e.target.value])
      
    }
    else {
        const array = searchCategories;
        const index = array.indexOf(e.target.value);
        array.splice(index,1)
        setSearchCategories([...array])
    }
   
}
const handleSearchManufactures = (e)=>{
    if(e.target.checked){
        setSearchManufacture([...searchManufacture,e.target.value.toLowerCase()])
    }
    else {
        const array = searchManufacture;
        const index = array.indexOf(e.target.value.toLowerCase());
        array.splice(index,1)
        setSearchManufacture([...array])
    }
  
}

const handleCardStyle = (value)=> {
    setCardStyle(value)
    localStorage.setItem('ego-card-style',value)
};
// console.log(searchManufacture)
 const handleMinPrice = (value)=>{
    setMinPrice(value);
 }
 const handleMaxPrice = (value)=>{
    setMaxPrice(value);
 }

 const handleResponsiveFilterBox = (value)=>{
    setIsResponsiveFilterBox(value)
 }
    return (
        <div className='bg-[#f5f5f5] py-10 font-rubik'>
            <Container>
                <div>
                    <p className='text-gray-700 pb-5'>{'Home > Shop'}</p>
                    <div className='lg:flex gap-5 '>
                    <div className='w-[20%] lg:block hidden'>
                     <FilterBox handleSearchCategories = {handleSearchCategories} handleSearchManufactures={handleSearchManufactures} handleMinPrice={handleMinPrice} handleMaxPrice={handleMaxPrice}></FilterBox>
                    </div>
                    <div className='lg:w-[80%] lg:px-0 px-2' ref={productRef}>
                        {/* <h1 className='text-black text-3xl'>SMARTPHONE</h1> */}
                        <div className='py-4 px-2 my- bg-white flex justify-between items-center'>
                        <div className='p-2 bg-[#FF2424] text-white text-xl font-semibold lg:hidden hover:cursor-pointer'onClick={()=>handleResponsiveFilterBox(true)}><LuFilter></LuFilter> </div>
                          <div className='lg:flex items-center gap-4 lg:block hidden'>
                          <div className='flex items-center gap-2'>
                                <div className={`p-2 ${cardStyle === 'grid'?'bg-[#FF2424] text-white':'bg-[#f5f5f5] text-black' } text-xl hover:cursor-pointer`}  onClick={()=> handleCardStyle('grid')}><IoGridOutline></IoGridOutline></div>
                                <div className={`p-2 ${cardStyle === 'list'?'bg-[#FF2424] text-white':'bg-[#f5f5f5] text-black' } text-xl hover:cursor-pointer`} onClick={()=>handleCardStyle('list')}>
                                   <FaList></FaList>
                                    </div>
                            </div>
                            <p className='text-gray-900'> Items {(currentPage-1) * productPerPage +1}-{productPerPage + ((currentPage-1)*productPerPage) > documentCount} of {documentCount}</p>
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

                        <div className={`${isLoading ? 'block min-h-[280px]' : 'hidden' } text-center py-32 w-full bg-white`}>
                        <span className="loading loading-ring loading-lg text-[#ff2424]"></span>
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
                        <div className='mt-10 py-4 px-2 bg-white flex justify-between  items-center hidde '>
                            <div className='flex items-center gap-3'>
                            {
                                pages.map(page=>{
                                    return  <div className={`md:py-2 md:px-4 py-1 px-2 ${currentPage===page?'bg-black' : 'bg-[#FF2424]'} text-white hover:cursor-pointer `} onClick={()=>setCurrentPage(page)}>{page}</div>
                                }) 
                               }
                                <div className='py-3 px-4 bg-[#FF2424 text-whit '><HiArrowNarrowRight></HiArrowNarrowRight></div>
                            </div>
                            <div>
                            <div className='flex items-center gap-2'>
                            <p className='text-gray-900'>Show</p>
                           <select name="" id="" className='bg-white p-2 border' onChange={(e)=>setProductPerPage(parseInt(e.target.value))}>
                            {
                                perPage.map((item,index)=>{
                                  return  <option value={item} key={index}>{item}</option>
                                })
                            }
                    
                           </select>
                           <p className='text-gray-900'>per page</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Container>
            
        <ResponsiveFilterBox handleResponsiveFilterBox={handleResponsiveFilterBox} isResponsiveFilterBox={isResponsiveFilterBox} handleSearchCategories = {handleSearchCategories} handleSearchManufactures={handleSearchManufactures} handleMinPrice={handleMinPrice} handleMaxPrice={handleMaxPrice}></ResponsiveFilterBox>
        
        </div>
    );
}

export default Shop;
