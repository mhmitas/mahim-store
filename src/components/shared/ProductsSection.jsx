import React from 'react'
import ProductCard from './ProductCard'

const ProductsSection = ({ data = [] }) => {
    return (
        <section className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {data.map((product, i) => (
                <ProductCard product={product} key={i} />
            ))}
        </section>
    )
}

export default ProductsSection