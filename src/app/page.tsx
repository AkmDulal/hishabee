import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './Components/ProductCard';
import FilterCategories from './Components/FilterCategories';
import { setProducts } from './redux/slice/productsSlice';
import getAllProducts from '@/lib/getAllProducts'
export default async function Home() {
  const productList: any = await getAllProducts()
  return (
    <div className="grid md:grid-cols-4 lg:grid-cols- md:gap-5 p-4">

      <div>
        <FilterCategories products={productList} />
      </div>

      <div className="grid flex flex-row md:col-span-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ProductCard product={productList} />
      </div>
    </div>
  );
}


