import React from 'react';
import { useLoaderData } from 'react-router';
import ToyCurd from '../Compotents/ToyCurd';

const AllProducts = () => {
    const datas = useLoaderData();
    
    return (
        <div>
            <h1 className='text-2xl font-bold'>All Products : </h1>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
            datas.map(data =><ToyCurd data={data}></ToyCurd>)
           }
        </div>
        </div>
    );
};

export default AllProducts;