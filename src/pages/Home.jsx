import React from 'react';
import User from '../assets/user.png'

function Home() {
    return (
        <>
            <div className="bg-custom-bg bg-cover bg-center w-full h-[90vh] flex flex-col items-center text-center">
                <h1 className='mt-8 text-[71px] text-blue-950'>Mothers</h1>
                <p className='text-orange-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere!</p>
                <div className='flex gap-[30px] mt-[53px]'>
                    <div className='flex flex-col max-w-[400px] items-center gap-[12px] bg-white p-[30px] rounded-2xl shadow-md'>
                        <img src={User} className='w-[100px]' />
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel non assumenda repellendus aliquid. Repudiandae, error necessitatibus? Omnis, eligendi suscipit! Atque vitae saepe, nisi aperiam quidem quaerat perspiciatis a, optio sint dignissimos qui, nobis dolorum? Facilis ad </p>
                        <button className='bg-orange-400 text-white active:scale-95 transition-[0.3s] px-[20px] rounded-xl  py-[7px]'>See more</button>
                    </div>
                    <div className='flex flex-col max-w-[400px] items-center gap-[12px] bg-white p-[30px] rounded-2xl shadow-md'>
                        <img src={User} className='w-[100px]' />
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel non assumenda repellendus aliquid. Repudiandae, error necessitatibus? Omnis, eligendi suscipit! Atque vitae saepe, nisi aperiam quidem quaerat perspiciatis a, optio sint dignissimos qui, nobis dolorum? Facilis ad </p>
                        <button className='bg-orange-400 text-white active:scale-95 transition-[0.3s] px-[20px] rounded-xl  py-[7px]'>See more</button>
                    </div>
                    <div className='flex flex-col max-w-[400px] items-center gap-[12px] bg-white p-[30px] rounded-2xl shadow-md'>
                        <img src={User} className='w-[100px]' />
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel non assumenda repellendus aliquid. Repudiandae, error necessitatibus? Omnis, eligendi suscipit! Atque vitae saepe, nisi aperiam quidem quaerat perspiciatis a, optio sint dignissimos qui, nobis dolorum? Facilis ad </p>
                        <button className='bg-orange-400 text-white active:scale-95 transition-[0.3s] px-[20px] rounded-xl  py-[7px]'>See more</button>
                    </div>
                </div>
            </div>
            <div className='bg-[#e2bfad] flex gap-[20px] justify-center w-full  py-[100px] text-center'>
                <div className='flex flex-col max-w-[300px] items-center gap-[12px] bg-white p-[30px] rounded-2xl shadow-md'>
                    <img src={User} className='w-[100px]' />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, doloremque.</p>
                    <button className='bg-orange-400 text-white active:scale-95 transition-[0.3s] px-[20px] rounded-xl  py-[7px]'>See more</button>
                </div>
                <div className='flex flex-col max-w-[300px] items-center gap-[12px] bg-white p-[30px] rounded-2xl shadow-md'>
                    <img src={User} className='w-[100px]' />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, doloremque.</p>
                    <button className='bg-orange-400 text-white active:scale-95 transition-[0.3s] px-[20px] rounded-xl  py-[7px]'>See more</button>
                </div>
                <div className='flex flex-col max-w-[300px] items-center gap-[12px] bg-white p-[30px] rounded-2xl shadow-md'>
                    <img src={User} className='w-[100px]' />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, doloremque.</p>
                    <button className='bg-orange-400 text-white active:scale-95 transition-[0.3s] px-[20px] rounded-xl  py-[7px]'>See more</button>
                </div>
                <div className='flex flex-col max-w-[300px] items-center gap-[12px] bg-white p-[30px] rounded-2xl shadow-md'>
                    <img src={User} className='w-[100px]' />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, doloremque.</p>
                    <button className='bg-orange-400 text-white active:scale-95 transition-[0.3s] px-[20px] rounded-xl  py-[7px]'>See more</button>
                </div>
            </div>
        </>
    );
}

export default Home;
