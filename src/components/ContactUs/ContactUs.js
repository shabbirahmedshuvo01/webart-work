import React from 'react';

const ContactUs = () => {
    return (
        <div className='flex flex-row justify-evenly items-center bg-slate-200'>
            <section className='mx-20 h-screen'>
                <div className='text-start mt-16'>
                    <p className='text-4xl font-semibold flex flex-col'><span>Contact</span> <span>us.</span></p>
                    <p className='font-semibold mt-5'>Office Address:</p>
                    <p className='flex flex-col text-xs text-gray-500 font-bold'><span>Kachijhuli Mor, Mymensingh</span> <span>Kachijhuli Mor, Mymensingh</span></p>
                    <p className='font-semibold mt-5'>Phone Number:</p>
                    <p className='flex flex-row gap-5 text-xs text-gray-500 font-bold'><span>+8801555665447</span> <span>+8801555665447</span></p>
                    <p className='font-semibold mt-5'>Email:</p>
                    <p className='flex flex-col gap-3 text-xs text-gray-500'><span>support.designagency@gmail.com</span> <span>info.admin@gmail.com</span></p>
                </div>
            </section>

            <section>
                <form className='flex flex-col gap-5 pb-40' >
                    <div className='flex gap-5'>
                        <div>
                            <label className="label">
                                <span className="label-text text-black font-semibold">Full name</span>
                            </label>
                            <input required name='name' className='input w-full px-5  border-black' type='text' placeholder='Your name' />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-black font-semibold">Company Name</span>
                            </label>
                            <input required name='name' className='input w-full px-5 border-black' type='text' placeholder='Company Name' />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div>
                            <label className="label">
                                <span className="label-text text-black font-semibold">Email</span>
                            </label>
                            <input required name='Email' className='input w-full px-5  border-black' type='text' placeholder='Email' />
                        </div>

                        <div className=''>
                            <label className="label">
                                <span className="label-text text-black font-semibold">Type's of work</span>
                            </label>
                            <select className='input border-black w-56 px-5' name="Type's of work" id="work">
                                <option placeholder="Type's of work" value="">-Select-</option>
                            </select>
                        </div>
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Please tell us a bit about  yout project</span>
                        </label>
                        <textarea required name='message' className='textarea w-full px-5 border-black resize-none' placeholder='Your message'></textarea>
                    </div>
                    <input type='submit' value="Send Your Message" className='btn btn-lg bg-gradient-to-r from-cyan-500 to-blue-500 rounded-none border border-white' />
                </form>
            </section>
        </div>
    );
};

export default ContactUs;