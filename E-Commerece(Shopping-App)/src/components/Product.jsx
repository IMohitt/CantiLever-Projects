import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useState } from 'react';
import {add , remove} from '../redux/slices/CartSlice'
import toast from 'react-hot-toast'

const Product = ({post}) => {
   
  const cart = useSelector((state)=>state.cart);
  const dispatch = useDispatch();

  function removeFromCart(){
    dispatch(remove(post.id))
    toast.error("Item Removed");
  }
  function addToCart(){
    dispatch(add(post))
    toast.success("Item Added");
  }

  return (
    <div className="flex flex-col items-center justify-between  gap-3 p-4 rounded-xl 
    border-2 border-[#00095] shadow-lg hover:shadow-2xl hover:scale-[1.03]
    md:hover:scale-[1.05] transition-all duration-200 ease-in ml-5 mt-10 ">
       <div className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>
          <p>{post.title}</p> 
       </div>
       <div className="w-40 text-gray-400 font-normal text-[10px] text-left">
          <p>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p> 
       </div>
       <div className='h-[180px]'>
          <img src={post.image} className='h-full w-full'/>
       </div>

       <div className='flex w-full justify-between mt-2 mb-2'>
       <div>
        <p className=' text-green-500 font-bold text-lg text-left'> ${post.price}</p>
       </div>
       
       {cart.some((p) => p.id === post.id) ? (
        <button onClick={removeFromCart}
        className='border border-slate-700 rounded-full px-3 py-1 font-semibold text-slate-700 text-[12px] uppercase'>
          Remove item
        </button>
      ) : (
        <button onClick={addToCart}
        className='border border-slate-700 rounded-full px-3 py-1 font-semibold text-slate-700 text-[12px] uppercase'>
          Add To Cart
        </button>
      )}
      </div>
       

    </div>
  )
}

export default Product