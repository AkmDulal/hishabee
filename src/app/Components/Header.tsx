"use client"
import { Menu } from 'react-feather';
import Link from 'next/link';
import { useState } from 'react';
import { BiCartAdd } from "react-icons/bi";
import { useSelector } from 'react-redux';
const Header: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  
  return (
    <header className="bg-gray-900 text-white">
      <div className=" mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <a className="text-2xl font-bold">E-Commerce Store</a>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/cart">
                <a className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <BiCartAdd style={{ fontSize: '18px' }} /> Cart

                  {cartItems.length > 0 ? <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"> {cartItems.length} </div> : '' }
                  
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <Link href="/cart">
          <a className="relative md:hidden inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <BiCartAdd style={{ fontSize: '18px' }} /> Cart
            {cartItems.length > 0 ? <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"> {cartItems.length} </div> : '' }
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
