import React from 'react';

const Cards = () => {

    

    return (
        <div>
            <h1 className='text-4xl font-bold'>Pricing Plans</h1>

            <section className='my-20 mx-20 flex flex-row justify-evenly items-center'>

                <div className='border border-primary h-96 w-64 rounded-lg shadow-2xl'>
                    <div className='bg-primary w-64 h-20 text-white  justify-center rounded-t-lg'>
                        <h1 className='text-xl pt-5'>Basic package</h1>
                        <h1 className='text-xl pb-2'>$29 <span className='text-sm'>/Start From</span> </h1>
                    </div>
                    <div className='mt-5 text-xs flex flex-row justify-center items-center gap-x-3'>

                        <div className='text-primary flex flex-col text-start gap-y-2'>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                        </div>

                        <div className='flex flex-col gap-y-2 text-start'>
                            <p>1 Concept Included</p>
                            <p>Logo Transparency</p>
                            <p>Vector File</p>
                            <p>Printable File</p>
                            <p>Include 3D Mockup</p>
                            <p>Include source file</p>
                            <p>Unlimited Revisions</p>
                            <p>3 Days Delivery</p>
                        </div>
                    </div>
                    <button className='btn btn-primary w-56 mt-5'>Add To Cart</button>
                </div>
                <div className='border border-orange-400 h-5/6 pb-5 mt-5 w-64 rounded-lg shadow-2xl'>
                    <div className='bg-orange-400 w-64 h-20 text-white  justify-center rounded-t-lg'>
                        <h1 className='text-xl pt-5'>standard package</h1>
                        <h1 className='text-xl pb-2'>$99 <span className='text-sm'>/Start From</span> </h1>
                    </div>
                    <div className='mt-5 text-xs flex flex-row justify-center items-center gap-x-3'>

                        <div className='text-orange-400 flex flex-col text-start gap-y-2'>
                            <p>✔</p>
                            <p className='mt-4'>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                        </div>

                        <div className='flex flex-col gap-y-2 text-start'>
                            <p>2 concept included with Hi <br /> quality design</p>
                            <p>Logo Transparency</p>
                            <p>Vector File</p>
                            <p>Printable File</p>
                            <p>Include 3D Mockup</p>
                            <p>Include source file</p>
                            <p>Include social media kit</p>
                            <p>Unlimited Revisions</p>
                            <p>3 Days Delivery</p>
                        </div>
                    </div>
                    <button className='btn bg-orange-400 border-none w-56 mt-5'>Add To Cart</button>
                </div>


                <div className='border border-red-500 h-5/6 pb-5 mt-10 w-64 rounded-lg shadow-2xl'>
                    <div className='bg-red-500 w-64 h-20 text-white  justify-center rounded-t-lg'>
                        <h1 className='text-xl pt-5'>premium package</h1>
                        <h1 className='text-xl pb-2'>$149 <span className='text-sm'>/Start From</span> </h1>
                    </div>
                    <div className='mt-5 text-xs flex flex-row justify-center items-center gap-x-3'>

                        <div className='text-red-500 flex flex-col text-start gap-y-2'>
                            <p>✔</p>
                            <p className='mt-4'>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                            <p>✔</p>
                        </div>

                        <div className='flex flex-col gap-y-2 text-start'>
                            <p>3 concept included with <br /> Premium quality design</p>
                            <p>Logo Transparency</p>
                            <p>Vector File</p>
                            <p>Printable File</p>
                            <p>Include 3D Mockup</p>
                            <p>Include source file</p>
                            <p>Stationery designs</p>
                            <p>Include social media kit</p>
                            <p>Unlimited Revisions</p>
                            <p>4 Days Delivery</p>
                        </div>
                    </div>
                    <button className='btn bg-red-500 border-none w-56 mt-5'>Add To Cart</button>
                </div>
            </section>

        </div>
    );
};

export default Cards;