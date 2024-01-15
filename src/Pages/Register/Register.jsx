import React, { useState } from 'react';
import Container from '../../Components/Resuse/Container/Container';
import UserAuth from '../../Authentication/UserAuth/UserAuth';
import { updateProfile } from 'firebase/auth';
import auth from '../../Authentication/Firebase/Firebase.config';
import AxiosBase from '../../Axios/AxiosBase';

const Register = () => {
const [error,setError] = useState('');
const {createUser} = UserAuth()
  const handleSubmit = (e)=>{
   e.preventDefault();
   setError('')
   const form = e.target;
   const firstName = form.first_name.value;
   const lastName = form.last_name.value;
   const email = form.email.value;
   const password = form.password.value;
   const confirmPassword = form.con_password.value;
  
   if(password.length < 6){
      setError('Password should be at least 6 characters')
  }
  if(password!==confirmPassword){
   setError("Password doesn't match")
   return;
  }
   const user = {
       firstName,
       lastName,
       email,
       password,
       role:'customers'
   }
   
createUser(email,password)
.then(res =>{
updateProfile(auth.currentUser,{
displayName:firstName + ' ' + lastName
})
AxiosBase().post('/users/registration',user)
.then(res =>{
if(res.data.insertedId){
alert('Registration successful')
form.reset()
}
})

})  



  }
 
    return (
        <div className='py-5 font-rubik'>
            <Container>
             <div className='lg:px-0 px-2'>
             <h1 className='text-black text-xl font-semibold uppercase pb-8'>Create New Customer Account</h1>
               {error&& <p className='text-red-600 pb-2'>{error}</p>}
               <form action="" onSubmit={handleSubmit}>
               <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    <div className='bg-[#f8f9fa] p-5'>
                      <h1 className='text-black  uppercase pb-3 border-b'>Personal indivation</h1>
                      <div className='space-y-8 pt-3'>
                   <div>
                   <h3 className='pb-2 text-balance font-semibold'>First Name   <span className='text-red-500'> *</span></h3>
                        <input type="text" name='first_name' className='w-full p-2 bg-white border border-gray-800 outline-node outline-none' required/>
                   </div>
                     <div>
                        <h3 className='pb-2 text-balance font-semibold'>Last Name<span className='text-red-500'> *</span></h3>
                     <input type="text" name='last_name' className='w-full p-2 bg-white border border-gray-800 outline-none' required/>
                     </div>
                     <div className='flex items-center text-black gap-3'>
                        <input type="checkbox"  className='w-5 h-5'/><p className='text-black '> Sign Up for Newsletter </p>
                     </div>
                     <div className='flex items-center text-black gap-3'>
                        <input type="checkbox" className='w-5 h-5'/><p className='text-black '>  Allow remote shopping assistance </p>
                     </div>
                    </div>
                    </div>
                    <div className='bg-[#f8f9fa] p-5'>
                      <h1 className='text-black  uppercase pb-3 border-b'>Sign-in Indivation</h1>
                      <div className='space-y-8 pt-3'>
                   <div>
                   <h3 className='pb-2 text-balance font-semibold'>Email   <span className='text-red-500'> *</span></h3>
                        <input type="email" name='email' className='w-full p-2 bg-white border border-gray-800 outline-node outline-none' required/>
                   </div>
                     <div>
                        <h3 className='pb-2 text-balance font-semibold'>Password  <span className='text-red-500'> *</span></h3>
                     <input type="text" name='password' className='w-full p-2 bg-white border border-gray-800 outline-none' required/>
                     </div>
                     <div>
                        <h3 className='pb-2 text-balance font-semibold'>Confirm Password  <span className='text-red-500'> *</span></h3>
                     <input type="text" name='con_password' className='w-full p-2 bg-white border border-gray-800 outline-none' required/>
                     </div>
                     <div className='flex items-center text-black gap-3'>
                        <input type="checkbox" className='w-5 h-5'/><p className='text-black '> Show Password </p>
                     </div>
                  <div className='mt-8'>
                  
                  </div>
                    </div>
                    </div>
                   
                </div>
                <div className='py-5'>
                <button type='submit' className='py-3 px-8 bg-gray-800 text-white  inline-block'>Sign in</button>
                </div>
               </form>
             </div>

            </Container>
        </div>
    );
}

export default Register;
