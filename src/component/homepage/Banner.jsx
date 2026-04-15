import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='bg-base-100 max-w-10/12 lg:max-w-7xl mx-auto text-center '>
            <h1 className='font-bold text-4xl sm:text-5xl text-[#1F2937] pt-20 py-4'>Friends to keep close in your life</h1>
            <p className='text-[#64748B] py-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white font-semibold'><FaPlus /> Add a Friend</button>
        </div>
    );
};

export default Banner;