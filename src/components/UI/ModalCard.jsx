import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModalCard = ({model,carts,setCarts}) => {
    const [subscribe,setSubscribe]=useState(false);
    const handleSubscribed=()=>{
        setSubscribe(true);
        const isFound =carts.find(item => item.id === model.id);
        if(isFound){
            toast.error(`${model.title} Already Add`);
            return
        }
        setCarts([...carts, model]);
        toast.success(`${model.title} added to cart`)
    }
    return (
        <div>
            <div className='shadow-lg rounded-lg border border-zinc-300 overflow-hidden'>
                <div className='flex justify-center items-center h-56 bg-zinc-200'>
                <img src={model.image} className='h-40 w-40 object-contain' alt="" />
                </div>
                 <div className='p-4 space-y-3'>
                  <h3 className='text-2xl font-bold'>{model.title}</h3>
                  <p>{model.description}</p>
                   <div className='text-2xl font-semibold'>
                   ${model.price}/month
                 </div>
                 <button onClick={handleSubscribed} className='btn w-full bg-red-500 text-white rounded-lg mt-5'>{subscribe ? 'Subscribed' : 'Subscribe Now' }</button>
                  </div>
                
                </div> 
        </div>
    );
};

export default ModalCard;