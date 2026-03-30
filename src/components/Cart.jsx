import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({carts,setCarts}) => {
    const totalPrice=carts.reduce((sum,cart)=>sum+cart.price,0)
    const handlePayment =()=>{
        setCarts([])
        toast.success(`Payment successful`)
    }
    const handleDelete=(cart)=>{
        const filtered=carts.filter(item => item.id !== cart.id)
        setCarts(filtered)
        toast.error(`${cart.title} delete`)
    }
    return (
        <div className='p-10 max-w-7xl mx-auto'>
          <h3 className='text-2xl font-bold mb-5'>Your Carts :</h3>
          {
            carts.length === 0 ? <p className='text-center font-bold p-5 text-gray-400 text-3xl'>Card Is Empty Now</p>
            : <div>
                <div className='space-y-3'>
            {
            carts.map((cart)=> 
            <div key={cart.id} className='border p-4
             rounded-lg flex flex-wrap gap-3 justify-between items-center'>
              <div className='flex items-center gap-4'>
                <img src={cart.image} className='h-20 w-auto' alt="" />
                <div>
                <h3 className='text-2xl font-semibold'>{cart.title}</h3>
                <p>{cart.description}</p>
              </div>
              </div>
              <div className='flex items-center gap-5'>
               <div className='text-3xl font-bold'>
                ${cart.price}/month
              </div>
              <button onClick={()=>handleDelete(cart)} className='btn text-2xl text-red-500'>Remove</button>
             </div> 
            </div>)
          }
          </div>
          <div className='flex justify-between bg-black text-white mt-5 p-5 text-2xl rounded-lg'>
            <div>Total</div>
            <div>${totalPrice}</div>
          </div>
           <button onClick={handlePayment} className='p-3  mt-5 bg-red-500 text-2xl text-white rounded-lg'>Proceed to Checkout</button>
            </div>
          }
          
        </div>
    );
};

export default Cart;