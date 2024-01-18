import React, { useRef, useState } from 'react';
import Container from '../../Components/Resuse/Container/Container';
import { FaFileImage } from 'react-icons/fa6';
import axios from 'axios';
import AxiosBase from '../../Axios/AxiosBase';

const AddProduct = () => {
   const [image,setImage] = useState({file:null,imageUrl:null})
   const fileInputRef = useRef();
   const [currentStatusValue,setCurrentStatusValue] = useState(null);
   const currentStatus = ['Deal of the day','Best Selling','Top Selling'];


   const techProductCategories = [
      "Smartphones",
      "Laptops",
      "Wearables",
      "Audio and Headphones",
      "Gaming",
      "Home Electronics",
      "Cameras",
      "Networking and Internet Devices",
      "Drones and Robotics",
      "Watchs"
    ];
    
    const openFile = (e)=>{
      e.preventDefault()
      fileInputRef.current.click()
      
    }


   const  handleImage =  (e)=>{
   const file = e.target.files[0];
   const fileUrl = URL.createObjectURL(file);
   setImage({file,imageUrl:fileUrl})
   } 

  const handleCurrentStatusValue = (e,index)=>{
  if(e.target.checked){
   setCurrentStatusValue(index)
  }
  else{
   setCurrentStatusValue(null)
  }
  }

   const handleSubmit = async(e)=>{
      e.preventDefault();
      const form = e.target;
      const productName = form.product_name.value;
      const category = form.category.value;
      const brand = form.brand.value;
      const price = parseInt(form.price.value);
      const discount = parseInt(form.discount.value);
      const stock = parseInt(form.stock.value);
      const description = form.description.value.replace(/\n/g,'<br>');
      const product = {
         productName,image:null,
         category,brand,pricing:{price,discount},stock,description,currentStatus:currentStatus[currentStatusValue]||null 
      }
    
     if(!image.file){
      alert('Add image')
      return;
     }

     const response = await axios.post(`https://api.imgbb.com/1/upload?key=c9c302a9d5cee64c8eb4dde4d9803027`,{image:image.file},{
      headers: {
      'content-type': 'multipart/form-data'
    }});

    const imageUrl= response.data.data.display_url;
    product.image = imageUrl;
    
    AxiosBase().post('/product/post',product)
    .then(res =>{
    if(res.data.insertedId){
    form.reset()
    }
    })
    }
    return (
        <div className='font-rubik'>
            <Container>
                <div className='lg:p-5 p-2 bg-gray-100'>
                <h1 className='text-xl text-black font-semibold pb-2 border-b uppercase'>add product</h1>

                <div className='mt-5 lg:p-3 p-2 bg-white'>
                    <form className='space-y-4' onSubmit={handleSubmit}>
                   <div className='lg:flex items-center gap-5 lg:space-y-0 space-y-3'>
                   <div className='flex-1'>
                        <h3 className='pb-2 text-balance font-semibold'>Product Name<span className='text-red-500'> *</span></h3>
                        <input type="text" name='product_name' placeholder='Product Name' className='w-full p-3 outline-none border border-gray-700' />
                     </div>
                     <div className='flex-1'>
                        <h3 className='pb-2 text-balance font-semibold'>Category<span className='text-red-500'> *</span></h3>
                    <select name='category' className='w-full p-3 outline-none border border-gray-700 bg-white' >
                    {
                        techProductCategories.map((item,index)=>{
                           return <option value={item.toLowerCase()} key={index}>{item}</option>
                        }
                        )
                      }
                    </select>
                     </div>
                   </div>
                   <div className='lg:flex gap-5  items-center lg:space-y-0 space-y-3'>
                   <div className='flex-1'>
                        <h3 className='pb-2 text-balance font-semibold'>Brand Name<span className='text-red-500'> *</span></h3>
                        <input type="text" name='brand' placeholder='Product Brand' className='w-full p-3 outline-none border border-gray-700' />
                     </div>
                     <div className='flex-1'>
                        <h3 className='pb-2 text-balance font-semibold'>Price<span className='text-red-500'> *</span></h3>
                        <input type="number" name='price' placeholder='Price Of Product ' className='w-full p-3 outline-none border border-gray-700' />
                     </div>
                   </div>
                   <div className='lg:flex gap-5  items-center lg:space-y-0 space-y-3'>
                   <div className='flex-1'>
                        <h3 className='pb-2 text-balance font-semibold'>Discount %<span className='text-red-500'> *</span></h3>
                        <input type="number" name='discount' placeholder='Discount % Of Product' className='w-full p-3 outline-none border border-gray-700' />
                     </div>
                   <div className='flex-1'>
                        <h3 className='pb-2 text-balance font-semibold'>Available Stock<span className='text-red-500'> *</span></h3>
                        <input type="number" name='stock' placeholder='Available Stock Of Product' className='w-full p-3 outline-none border border-gray-700' />
                     </div>
                  
                   </div>
                   <div className='lg:flex gap-5   lg:space-y-0 space-y-3'>
                   <div className='flex-1'>
                        <h3 className='pb-2 text-balance font-semibold'>Product Description<span className='text-red-500'> *</span></h3>
                        <textarea type="text" name='description' placeholder='Write about Product' className='w-full p-3 outline-none border border-gray-700 min-h-[250px] text-black' > </textarea>
                     </div>
                     
                  
                     <div className='flex-1 space-y-2'>
                        <h3 className='pb-2 text-balance font-semibold'>Product Image<span className='text-red-500'> *</span></h3>
                        <div className='text-6xl'>
                   {
                     image.imageUrl?<img src={image.imageUrl} className='w-52 h-52' alt="" /> :  <FaFileImage></FaFileImage>
                   }

                        </div>
                        <input type="file" ref={fileInputRef} onChange={handleImage} style={{ display: 'none' }} />
                       <div className='pt-4' onClick={openFile}> <button className='px-6 py-2 bg-black text-white'>Add Image</button></div>
                     </div>
                   </div>
               
                   <div className='flex-1'>
                        <h3 className='pb-2 text-balance font-semibold'>Current Status<span className='text-red-500'> *</span></h3>
                        <div className='lg:space-x-2 lg:flex flex-grow items-center '>
                        {currentStatus.map((item,index)=>{
                        return <div className='flex items-center gap-2'><input type="checkbox" value={item} name='status' checked = {index === currentStatusValue } className='w-4 h-4 accent-black' onChange={(e)=>handleCurrentStatusValue(e,index)} /> <p>{item}</p></div>
                    })}
                </div>
                     </div>
                    <div className='pt-3 '>
                    <button className='text-white bg-[#ff2424] px-6 py-3 lg:w-fit w-full'>Add Product</button>
                    </div>
                    </form>
                </div>
                </div>
            </Container>
        </div>
    );
}

export default AddProduct;
