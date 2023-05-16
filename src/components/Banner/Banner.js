import React from 'react';
import imgOfBanner from "../../images/Frame.jpg"

const Banner = () => {
    return (
        <div className='px-24 py-10 bg-blue-00'>
            <section className='flex flex-row items-center justify-center gap-28'>
                <div className='text-start w-1/2'>
                    <h1 className='text-4xl font-bold'>Empowering Your Brand Story With Unique Logo Design</h1>

                    <p className='mt-5 text-xs text-gray-400'>Our logo design service provides you with a custom-designed logo that represents your brand or business. Our experienced team of designers will work with you to understand your vision and create a unique logo that accurately reflects your values and goals.</p>


                    <p className='mt-5 text-xs text-gray-400'>Our service includes multiple rounds of revisions to ensure your satisfaction with the final product. Once completed, you will receive all necessary files in various formats for use on a variety of platforms. Order now to elevate your brand identity with a professional, eye-catching logo. Invited me for your project! Save your time and money! </p>

                    <h5 className='mt-5 text-xl font-bold'>Our Logo Design Process</h5>

                    <p className='mt-2 text-xs text-gray-400'>Research and Analysis * Brainstorming * Concept Development * Feedback and Revisions * Finalize and Deliver.</p>


                    <h5 className='mt-5 text-xl font-bold'>Our Achievement</h5>
                    <div className='flex flex-row gap-5'>
                        <p className='flex flex-col'><span className='text-3xl text-blue-500 font-bold'>250+</span> <span className='text-xs text-gray-400'>Projects Completed</span></p>
                        <p className='flex flex-col'><span className='text-3xl text-blue-500 font-bold'>200+</span> <span className='text-xs text-gray-400'>Happy Clients</span></p>
                        <p className='flex flex-col'><span className='text-3xl text-blue-500 font-bold'>4.9 +</span> <span className='text-xs text-gray-400'>Positive Rating</span></p>
                    </div>

                </div>
                <div className='w-1/2 pl-24'>
                    <img src={imgOfBanner} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Banner;