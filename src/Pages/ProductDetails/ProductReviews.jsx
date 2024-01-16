import React from 'react';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import Rating from 'react-rating';

const ProductReviews = ({review}) => {
    return (
        <div>
            <div className='flex justify-between items-center space-y-2'>
                <div className='md:flex  items-center gap-3'>
                   <div>
                    <img src={ 'https://i.ibb.co/TH1W6TG/default-Pic.png'} alt="" className='md:w-20 md:h-20 w-10 h-10 rounded-full' />
                    </div> 
                    <div className='md:space-y-2 space-y-1'>
                        <h2 className='text-[#de4d4d] text-xl'>{review.nickName}</h2>
                         <p>10Jan 2024</p>

                </div>
    
                        
            </div>
            <Rating initialRating={review.ratting} 
                 emptySymbol={<TiStarOutline className='text-[#ff385c] text-xl hover:cursor-pointer'/>}
                 fullSymbol={<TiStarFullOutline className='text-[#ff385c] text-xl hover:cursor-pointer'/>}
                            readonly
                        
    />
        </div>
        <div className='md:p-10 p-5 space-y-3'>
            <p className='text-black'>{review.text}</p>
         
            </div>
        </div>
    );
}

export default ProductReviews;
