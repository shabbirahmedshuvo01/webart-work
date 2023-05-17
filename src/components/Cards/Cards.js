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
            </section>

        </div>
    );
};

export default Cards;