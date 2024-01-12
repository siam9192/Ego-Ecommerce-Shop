import React from 'react';

const FilterBox = () => {
    const categories = ["Electronics", "Clothing & Fashion", "Home & Furniture", "Beauty & Personal Care"]
    return (
        <div className='font-rubik space-y-6'>
            <div>
            <div className='py-3 px-4 bg-[#FF2424] text-white uppercase text-xl '>SHOP by</div>
            <div className='bg-white pb-4 px-4 space-y-3'>
            <div className='space-y-2 '>
                <h2 className='text-black text-xl pt-3'>Category</h2>
                <div className='space-y-1'>
                    {categories.slice(0,4).map((item,index)=>{
                        return <div className='flex items-center gap-2' key={index}><input type="checkbox" className='w-3 h-3' /> <p>{item}</p></div>
                    })}
                </div>
            </div>
            <div className='space-y-2 border-t border-b py-4'>
                <h2 className='text-black '>Price</h2>
                <div className='flex items-center gap-2'>
                  <div>$   <input type="number" className='w-20 h-10 border outline-none px-1 text-center' /></div> <span>-</span>
                  <div>$   <input type="number" className='w-20 h-10 border outline-none px-1 text-center' /></div>
                </div>
            </div>
            <div className='space-y-2  py-2'>
                <h2 className='text-black  pt-3'>Manufacture</h2>
                <div className='space-y-1'>
                    {categories.slice(0,4).map((item,index)=>{
                        return <div className='flex items-center gap-2'><input type="checkbox" className='w-3 h-3' /> <p>{item}</p></div>
                    })}
                </div>
            </div>
            </div>
            </div>
            <div>
                <img src="/images/image/sidebar1.jpg" alt="" />
            </div>
        </div>
    );
}

export default FilterBox;
