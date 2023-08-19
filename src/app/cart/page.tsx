'use client'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";
import { removeItem, selectCartTotal, incrementQuantity, decrementQuantity } from '../redux/slice/cartSlice';
import { RootState } from '../redux/store';
import Image from 'next/image'
import Link from 'next/link';
const Cart: React.FC = () => {
    const [count, setCount] = useState(1)
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const total = useSelector(selectCartTotal);
    const dispatch = useDispatch();
    const handleRemoveItem = (itemId: number) => {
        dispatch(removeItem(itemId));
    };
    const handleIncrement = (itemId: number) => {
        dispatch(incrementQuantity(itemId));
    };
    const handleDecrement = (itemId: number) => {
        dispatch(decrementQuantity(itemId));
    };
    return (
        <div className="p-4">
            <h2 className='text-stone-950'>Cart</h2>
            {cartItems.length > 0 ?
                <div className="grid md:grid-cols-4 md:gap-5">
                    <div className="overflow-x-auto md:col-span-3">
                        <table className="min-w-full ">
                            <thead className="border-b">
                                <tr>
                                    <th className="p-5 text-left text-stone-950">Image</th>
                                    <th className="p-5 text-center text-stone-950">Product</th>
                                    <th className="p-5 text-center text-stone-950">Quantity</th>
                                    <th className="p-5 text-center text-stone-950">Price</th>
                                    <th className="p-5 text-stone-950">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item: any) => (
                                    <tr key={item.id} className="border-b">

                                        <td>
                                            <div className="flex justify-center">
                                                <Link href={`/products/${item.id}`}>
                                                    <a>
                                                        <Image
                                                            src={item?.images}
                                                            alt={item.name}
                                                            width={50}
                                                            height={50}
                                                            style={{
                                                                maxWidth: '100%',
                                                                height: 'auto',
                                                            }}
                                                        ></Image>
                                                    </a>
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="p-4 px-6 text-center whitespace-nowrap">
                                            <div className="flex text-gray-900 flex-col items-center justify-center">
                                                <Link href={`/products/${item.id}`}>
                                                    <a>
                                                        <h3>{item.name}</h3>
                                                    </a>
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="p-4 px-6 text-center whitespace-nowrap">
                                            <div>
                                                <button className='rounded-full border-red-600 border p-1' onClick={() => handleDecrement(item.id)} >
                                                    <BiMinus className="text-red-600 " />
                                                </button>
                                                <input
                                                    type="text"
                                                    value={item?.quantity}
                                                    className="w-12 text-center bg-white-100 text-stone-950 outline-none"
                                                    onChange={(e: any) => setCount(e.target.value)}
                                                />
                                                <button className='rounded-full border-green-600 border p-1' onClick={() => handleIncrement(item.id)}>
                                                    <BiPlus className="text-green-600" />
                                                </button>
                                            </div>
                                        </td>


                                        <td className="p-4 px-6 text-center text-gray-900 whitespace-nowrap">${item.price}</td>
                                        <td className="p-4 px-6 text-center whitespace-nowrap">
                                            <button onClick={() => handleRemoveItem(item.id)}>
                                                <BiTrash className="text-red-400" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="card p-5">
                        <div className=" rounded-md shadow">
                            <h3 className="text-xl font-bold text-center text-blue-600 pb-5 pt-4">Order Summary</h3>
                            <div className="flex justify-between px-4">
                                <span className="font-bold text-gray-900">Subtotal</span>
                                <span className="font-bold text-gray-900">${total.toFixed(2)}</span>
                            </div>
                            <div className=" flex items-center justify-between px-4 py-2 mt-3 border-t-2 ">
                                <span className="text-xl font-bold text-gray-900">Total</span>
                                <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                : <div className='text-stone-950'>
                    Cart is empty. <Link href="/">Go shopping</Link>
                </div>}
        </div>
    );
};

export default Cart;
