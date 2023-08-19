import React from 'react'
import getAllProducts from '@/lib/getAllProducts'
import getProductId from '@/lib/getProductId'

import ProductDetailsComponent from "../../Components/ProductDetailsComponent"
type Params = {
    params: {
        product: string
    }
}
export async function generateMetadata({ params }: Params) {
    const product: any = await getProductId(params?.product)
    return {
        title: `${product?.title}`,
        description: `${product?.description}`
    }
}
export async function generateStaticParams() {
    const products: any = await getAllProducts()
    return products.map((product: any) => ({
        pId: product.id.toString()
    }))
}
export default async function ProductDetails({ params }: any) {
    const product: any = await getProductId(params?.product)
    return (
        <div>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                <ProductDetailsComponent product={product} />
            </div>
        </div>
    )
}