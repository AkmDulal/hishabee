"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/slice/productsSlice';
import axios from 'axios';
interface Product {
    id: number;
    category: string;
}

function FilterCategories(props: any) {
    const dispatch = useDispatch();
    const products = props?.products
    const [categoryList, setCategoryList] = useState<any>([])

    useEffect(() => {
        const uniqueCategories = Array.from(new Set(products.map((product: any) => product.category)));
        setCategoryList(uniqueCategories)
    }, [])

    const categoryHandler = (id: any) => {
        axios.get(`https://fakestoreapi.com/products/category/${id?.target.value}`)
            .then(function (response) {
                dispatch(setProducts(response?.data));
            })
            .catch(function (error) {
            })
    }

    return (
        <div>
            <div className="my-3">
                <h2>Categories</h2>
                <select
                    className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // value={categoryList}
                    onChange={categoryHandler}
                >
                    {categoryList?.map((category: any, i: number) => (
                        <option key={i} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default FilterCategories