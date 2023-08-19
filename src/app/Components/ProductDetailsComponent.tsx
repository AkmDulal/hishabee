"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import { useDispatch } from 'react-redux';
import { addItem} from '../redux/slice/cartSlice';
import { BiPlus, BiMinus } from "react-icons/bi";
function ProductDetailsComponent({ product }: any) {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch<any>();
    const handleAddToCart = (product: any) => {
        const id = product?.id
        const name = product?.title
        const price = product.price.toFixed(2)
        const images = product.image
        dispatch(addItem({
            id,
            name,
            quantity: count,
            price: price,
            images
        }));
    };
    
    const handleIncrement = () => {
        setCount(count + 1)
    };
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    };

    return (
        <div>
            <div className="container px-5 py-24 mx-auto" style={{ cursor: 'auto' }}>
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <Image
                        alt="ecommerce"
                        className="lg:w-1/2 w-full lg:h-auto h-30 object-center rounded object-cover"
                        src={product?.image}
                        width={500}
                        height={200}
                        style={{
                            height: '700px'
                        }}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" >
                        <h2 className="text-sm title-font text-gray-500 tracking-widest" >{product?.category}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-3" >{product?.title}</h1>
                        <p className="leading-relaxed text-gray-900 pb-5"> {product?.description} </p>


                        <div className="pb-5 whitespace-nowrap">
                            <div>
                                <button className='rounded-full border-red-600 border p-1' onClick={() => handleDecrement()} >
                                    <BiMinus className="text-red-600 " />
                                </button>
                                <input
                                    type="text"
                                    value={count}
                                    className="w-12 text-center bg-white-100 text-stone-950 outline-none"
                                    onChange={(e: any) => setCount(e.target.value)}
                                />
                                <button className='rounded-full border-green-600 border p-1' onClick={() => handleIncrement()} >
                                    <BiPlus  className="text-green-600" />
                                </button>
                            </div>
                        </div>

                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${product?.price}</span>
                            <button onClick={() => handleAddToCart(product)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsComponent