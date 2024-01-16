import React, { useState } from 'react';
import Container from '../../Components/Resuse/Container/Container';
import UserAuth from '../../Authentication/UserAuth/UserAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const {state} = useLocation();
    const navigate = useNavigate();
    const {login} = UserAuth();
  const [error,setError] = useState('')
  const handleSubmit = (e)=>{
    
    e.preventDefault();
    setError('')
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
   login(email,password)
   .then(res=>{
    form.reset()
   if(state){
  navigate(state)
   }
   else{
    navigate('/')
   }
   
   })
  
  }
    return (
        <div className='py-5 font-rubik'>
            <Container>
             <div className='lg:px-0 px-2'>
             <h1 className='text-black text-xl font-semibold uppercase pb-8'>Customer Login</h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    <div className='bg-[#f8f9fa] p-5'>
                      <h1 className='text-black font-semibold uppercase pb-3 border-b'>Registered Customers</h1>
                      <p className='text-black py-3'>If you have an account, sign in with your email address.</p>
                      <form className='space-y-6 pt-3' onSubmit={handleSubmit}>
                   <div>
                   <h3 className='pb-2 text-balance font-semibold'>Email   <span className='text-red-500'> *</span></h3>
                        <input type="email" name='email' className='w-full p-2 bg-white border border-gray-800 outline-node outline-none' required/>
                   </div>
                     <div>
                        <h3 className='pb-2 text-balance font-semibold'>Password<span className='text-red-500'> *</span></h3>
                     <input type="text" name='password' className='w-full p-2 bg-white border border-gray-800 outline-none' required/>
                     </div>
                     <div className='flex items-center text-black gap-3'>
                        <input type="checkbox" className='w-5 h-5'/><p className='text-black '>Show Password</p>
                     </div>
                  <div className='mt-8'>
                  <button type='submit' className='py-2 px-4 bg-gray-800 text-white  inline-block'>Sign in</button>
                  </div>
                    </form>
                    </div>
                    <div className='bg-[#f8f9fa] p-5'>
                      <h1 className='text-black font-semibold uppercase pb-3 border-b'>New Customers</h1>
                      <p className='text-black py-3'>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
                   <Link to='/ego/account/register'> <button className='bg-gray-700 text-white py-2 px-4'>Register</button></Link>
                    </div>
                   
                </div>
             </div>

            </Container>
        </div>
    );
}

export default SignIn;
