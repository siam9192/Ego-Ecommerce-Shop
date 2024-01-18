import React, { useEffect, useState } from 'react';
import Container from '../../Components/Resuse/Container/Container';
import AxiosBase from '../../Axios/AxiosBase';
import ShortDetails from '../../Components/ShortDetails.jsx/ShortDetails';
import ColumnCard from '../../Components/Resuse/ProductCards/ColumnCard';

const NewArrivals = () => {
    const [activeTab,setActiveTab] = useState(0);
    const [products,setProducts] = useState([]);
    const [shortDetailsId,setShortDetailsId] = useState(null);
    const [isShortDetails,setShortDetailsStatus] = useState(false)
    const categories = ["Smartphones",
    "Laptops",
    "Wearables",
    "Audio and Headphones",
    "Gaming",
    "Home Electronics",
    "Cameras",
    "Networking and Internet Devices",
    "Drones and Robotics",
    "Watchs"]

   useEffect(()=>{
    AxiosBase().get(`/products-all/new-arrivals?category=${categories[activeTab].toLowerCase()}`)
    .then(res=>{
        setProducts(res.data)
        
    })
   },[activeTab])

const handleTab = (index) =>{
    setActiveTab(index)
}
const handleShortDetailsStatus = (value)=>{
    setShortDetailsStatus(value)
 }
 const handleShortDetailsId = (id)=>{
    setShortDetailsId(id)
 }
 
    return (
        <div>
            <div>
         <div className='bg-[#f5f5f5] py-10 font-rubik'>
            <Container>
                <div>
                    <h1>{'Home  >  New Arrivals'}</h1>
                     <h1 className='text-2xl text-black font-semibold py-2'>New Arrivals</h1>
                    <div className='py-2 flex items-center gap-3 flex-wrap'>
                    {
                categories.map((item,index)=>{
                   return <div className={`py-3 px-4 ${activeTab === index ? 'bg-white text-[#ff2424] border-t-2 border-t-[#ff2424]' : 'bg-[#e6e6e6] text-black'} border  font-semibold hover:cursor-pointer`} key={index} onClick={()=>handleTab(index)}>{item}</div>
                })
                    }

                    </div>
                    <div className='py-5'>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10'>
                            {
                                products.map((product,index)=>{
                                    return <ColumnCard product={product} key={index} handleShortDetailsId={handleShortDetailsId} handleShortDetailsStatus = {handleShortDetailsStatus} isShortDetails={isShortDetails}></ColumnCard>
                                })
                            }
                        </div>
                    </div>
                </div>
            </Container>
            </div>
            </div>
            {
        isShortDetails ? 
        <ShortDetails isShortDetails={isShortDetails} shortDetailsId={shortDetailsId} handleShortDetailsStatus={handleShortDetailsStatus}></ShortDetails>
        :
        <></>
       }
        </div>
    );
}

export default NewArrivals;
