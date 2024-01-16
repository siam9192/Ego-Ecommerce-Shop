import React, { useEffect, useState } from 'react';
import ProductReviews from '../../../Pages/ProductDetails/ProductReviews';
import { Rating } from '@mui/material';
import AxiosBase from '../../../Axios/AxiosBase';
import UserAuth from '../../../Authentication/UserAuth/UserAuth';
import { useNavigate } from 'react-router-dom';


const Reviews = ({id,productName}) => {
    const [ratting,setRatting] = useState(3);
    const [tabIndex,setTabIndex] = useState(0);
    const [error,setError] = useState('')
    const rattingPreview = ['So poor','Good','Very good','Great']
    const {user} = UserAuth();
    const navigate = useNavigate();
    const [reviews,setReviews] = useState([]);
    const [reviewRetch,setReviewRefetch] = useState(false)

    useEffect(()=>{
        if(!id){
            return
        }
        AxiosBase().get(`/product/get-reviews?id=${id}`)
        .then(res=>{
            setReviews(res.data)
        })
    },[id,reviewRetch])

    const handleReviewRefetch = ()=>{
        setReviewRefetch(!reviewRetch)
    }



    const handleTab = (index) =>{
        setTabIndex(index)
    }
   
    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const today = new Date();
        const email = user.email;
        const nickName = form.nickName.value;
        const summery = form.summery.value;
        const text = form.review.value;
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const productId = id;
        const  review = {
        productId,email,nickName,
        date:{
            day,month,year
        }
        ,ratting,text
        }

        if(!user){
            navigate('/ego/account/sign-in')
            setError ('Please log in first ')
            return;
        }
    AxiosBase().post('/product/review/post',review)
    .then(res =>{
        if(res.data.insertedId){
           
            alert('Review posted successfully');
            form.reset();
            setRatting(3)
            handleReviewRefetch()
        }
    })
    }
    return (
        <div>
            <div className='py-2 border-t border-b min-h-[32]'>
            {!reviews.length && <h1 className='py-5 text-center text-3xl text-black'>This product have no reviews</h1>}
                       {
                        reviews?.map((review,index)=> <ProductReviews review={review} key={index}></ProductReviews>)
                       }
                    </div>
                    <div className='py-2 space-y-2 '>
                        <h2 className='text-xl text-black'>You're reviewing:</h2>
                        <h1 className='text-black font-semibold text-xl'>Config product {productName}</h1>
                        <div className='space-y5'>
                    <h2 className='text-black font-semibold'>Your Ratting <span className='text-red-500'> *</span></h2>
                   <div className='flex it-center gap-3'>
                   <Rating name="size-large" defaultValue={3} onChange={(e)=>setRatting(e.target.value)}/> <h2>{ratting < 3 && rattingPreview[0] || ratting >= 3 & ratting < 5 && rattingPreview[1] || ratting > 4 & ratting <= 5 && rattingPreview[3] }</h2>
                   </div>
                    <form action="" className='space-y-4' onSubmit={handleSubmit}>
                    
                     <div>
                        <h3 className='pb-2 text-balance font-semibold'>NickName<span className='text-red-500'> *</span></h3>
                     <input type="text" name='nickName' className='w-full p-2 bg-white border border-gray-800 outline-none'/>
                     </div>
                     <div>
                        <h3 className='pb-2 text-balance font-semibold'>Summery<span className='text-red-500'> *</span></h3>
                     <input type="text" name='summery' className='w-full p-2 bg-white border border-gray-800 outline-none'/>
                     </div>
                     <div>
                        <h3 className='pb-2 text-balance font-semibold'>Review<span className='text-red-500'> *</span></h3>
                     <textarea type="text" name='review' placeholder='write your review' className='w-full p-2 bg-white border border-gray-800 outline-none min-h-52'> </textarea>
                     </div>
                     <button type='submit' className='px-4 py-2 bg-[#ff2424] text-white'>Submit review</button>
                    </form>
                        </div>
                    </div>
        </div>
    );
}

export default Reviews;
