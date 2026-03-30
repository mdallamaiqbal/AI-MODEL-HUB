import React, { use } from 'react';
import ModalCard from './UI/ModalCard';

const Model = ({modelPromise,carts,setCarts}) => {
   const models=use(modelPromise);

   
    
    return (
        <div className='py-10 max-w-7xl mx-auto'>
          <div className='text-center'>
          <h2 className='text-5xl font-bold my-4'>Choose Your AI Model</h2>
          <p>One subscription gives you access to all frontier AI model</p>
          </div>
          <div className='mt-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {
                models.map((model,index)=> <ModalCard key={index} model={model} carts={carts} setCarts={setCarts}/>  )
            }
          </div>
        </div>
    );
};

export default Model;