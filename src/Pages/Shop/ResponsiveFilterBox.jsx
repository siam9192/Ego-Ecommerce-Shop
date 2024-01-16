import React, { useEffect, useRef } from 'react';

const ResponsiveFilterBox = ({handleResponsiveFilterBox,isResponsiveFilterBox,handleSearchCategories,handleSearchManufactures,handleMinPrice,handleMaxPrice}) => {
    const boxRef = useRef();
    // const navigate = useNavigate();
   
    const categories = [
        "Smartphones",
        "Laptops",
        "Wearables",
        "Audio and Headphones",
        "Gaming",
        "Home Electronics",
        "Cameras",
        "Networking and Internet Devices",
        "Drones and Robotics"
      ];
      const brands = [
        "Apple",
        "Samsung",
        "Huawei",
        "Xiaomi",
        "OnePlus",
        "Realme",
        "Oppo",
        "Sony",
        "Hp",
        "Dell",
        "Google"
      ];
      const handleOutsideClick = (event) => {
        if (boxRef.current && !boxRef.current.contains(event.target)) {
          // Click occurred outside the component, close it
         handleResponsiveFilterBox(false)
        }
      };
    
      useEffect(() => {
        // Attach the event listener when the component mounts
        document.addEventListener('mousedown', handleOutsideClick);
    
        // Clean up the event listener when the component unmounts
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);
    return (
        <div className={`w-full h-full bg-gray-600 bg-opacity-25 fixed top-0 z-40 ${!isResponsiveFilterBox ? '-left-[200%]' : 'left-0'} transition-all duration-200 lg:hidden `}>
            <div className='min-w-[300px] max-w-[300px] bg-white opacity-100 h-full z-50 py-5 p-2 font-rubik transition-all duration-300 max-h-[100vh] overflow-y-auto' ref={boxRef}>
            <div className='font-rubik space-y-6 '>
            <div>
            <div className='py-3 px-4 bg-[#FF2424] text-white uppercase text-xl '>SHOP by</div>
            <div className='bg-white pb-4 px-4 space-y-3'>
            <div className='space-y-2 '>
                <h2 className='text-black  pt-3'>Category</h2>
                <div className='space-y-1'>
                    {categories.slice(0,4).map((item,index)=>{
                        return <div className='flex items-center gap-2' key={index}><input type="checkbox" value={item.toLowerCase()} className='w-3 h-3 accent-black' onChange={handleSearchCategories}/> <p>{item}</p></div>
                    })}
                </div>
            </div>
            <div className='space-y-2 border-t border-b py-4'>
                <h2 className='text-black '>Price</h2>
                <div className='flex items-center gap-2'>
                  <div>$   <input type="number" className='w-20 h-10 border outline-none px-1 text-center'onChange={(e)=>handleMinPrice(parseInt(e.target.value))} /></div> <span>-</span>
                  <div>$   <input type="number" className='w-20 h-10 border outline-none px-1 text-center' onChange={(e)=>handleMaxPrice(parseInt(e.target.value))}/></div>
                </div>
            </div>
            <div className='space-y-2  py-2'>
                <h2 className='text-black  pt-3'>Manufacture</h2>
                <div className='space-y-1'>
                    {brands.map((item,index)=>{
                        return <div className='flex items-center gap-2'><input type="checkbox" value={item} className='w-3 h-3 accent-black' onChange={handleSearchManufactures}/> <p>{item}</p></div>
                    })}
                </div>
            </div>
            </div>
            </div>
            
        </div>
                </div>
            
        </div>
    );
}

export default ResponsiveFilterBox;
