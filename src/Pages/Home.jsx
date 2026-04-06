import React from 'react';
import { useLoaderData } from 'react-router';
import ToyCurd from '../Compotents/ToyCurd';
import Slider from '../Compotents/Slider';




const Home = () => {
    const popularData = useLoaderData();
   
    return (
        <div className='w-11/12 mx-auto space-y-10'>
            <div>
                <Slider></Slider>
            </div>
           <div className='mt-10'>
            <h1 className='text-3xl font-bold mb-6'>Popular Toys</h1>
                 <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 '>
               {
                popularData.slice(0,6).map(data =><ToyCurd data={data}></ToyCurd>)
               }
            </div>
           </div>
           <div>
            <h1 className='text-3xl font-bold mb-5'>Our Best Products</h1>
             <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 '>
               {
                popularData.slice(10,19).map(data =><ToyCurd data={data}></ToyCurd>)
               }
            </div>
           </div>
           <div>
            <h1 className='text-3xl font-bold mb-5'>Offer For pohela boishakh</h1>
             <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 '>
               {
                popularData.slice(6,9).map(data =><ToyCurd data={data}></ToyCurd>)
               }
            </div>
           </div>
        </div>
    );
};

export default Home;