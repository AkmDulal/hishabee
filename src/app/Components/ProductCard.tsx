"use client"
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/slice/productsSlice';
import Image from 'next/image'
import { Product } from '../types';
import { addItem, incrementQuantity, decrementQuantity } from '../redux/slice/cartSlice';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const dispatch = useDispatch<any>();
  const products = useSelector((state: any) => state?.products?.products);

  const handleAddToCart = (product: any) => {
    const id = product?.id
    const name = product?.title
    const price = product.price.toFixed(2)
    const images = product.image
    dispatch(addItem({
      id,
      name,
      quantity: 0,
      price: price,
      images
    }));
  };

  useEffect(() => {
    if (product) {
      dispatch(setProducts(product));
    }
  }, [dispatch, product]);

  return (
    <>
      {products?.map((product: any, i: number) => (
        <div key={i} className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <Link href={`/products/${product?.id}`}> 
              <a className=''>
                <Image
                  src={product?.image}
                  width={300}
                  height={100}
                  className='object-cover'
                  style={{
                    width: '100%',
                    height: '200px'
                  }}
                  alt={product?.category}
                />
              </a>
            </Link>
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                {product.title}
              </p>
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                ${product.price.toFixed(2)}
              </p>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              {product?.description.substring(0, 80)}...
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
