import React, { use } from 'react';

const Model = ({modelPromise}) => {
   const models=use(modelPromise);

   
    
    return (
        <div className='py-20 max-w-7xl mx-auto'>
          <div className='text-center'>
          <h2 className='text-5xl font-bold'>Choose Your AI Model</h2>
          <p>One subscription gives you access to all frontier AI model</p>
          </div>
          <div className='mt-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                models.map(model=> 
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
                 <button className='btn w-full bg-red-500 text-white rounded-lg mt-5'>Subscribe Now</button>
                  </div>
                
                </div> )
            }
          </div>
        </div>
    );
};

export default Model;