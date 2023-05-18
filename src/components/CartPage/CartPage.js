import React from 'react';

const CartPage = () => {

    // Retrieving an item from localStorage
    const cartPackage = localStorage.getItem('package-work');
    const items = JSON.parse(cartPackage);
    // console.log(items);
    // Checking if the item exists
    if (cartPackage !== null) {
        // Item exists, do something with it
        console.log(items);
    } else {
        // Item doesn't exist or has been removed
        console.log('Item not found');
    }


    return (
        <div className='h-screen m-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body flex flex-row">
                    <div>

                        {
                            items ? <>
                                <h2 className="card-title text-start text-sm">{items.name}</h2>
                                <p className='text-start text-xs'><span className='font-semibold'>Price $:</span> <span>{items.price}</span></p>
                                <p className='text-start text-xs'><span className='font-semibold'>Delivery Time:</span> <span>{items.dTime}</span></p>
                            </>
                                :
                                <h1>!Please Add A Package</h1>
                        }

                    </div>
                    {
                      
                      items ? 
                      <>

                            <div>
                                <button className="btn btn-primary bg-red-500">Delete</button>
                            </div>
                            <div className="">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </>
                        :
                        ""
                    }
                </div>
            </div>
        </div>
    );
};

export default CartPage;