import HeroSection from '@/components/shared/Hero'
import ProductsSection from '@/components/shared/ProductsSection'
import React from 'react'

const HomePage = () => {
    return (
        <main>
            <HeroSection />

            <div className='my-container mt-14'>
                <h3 className='title-1 mb-6'>Quality Stationery for Everyday Use</h3>
                <ProductsSection data={products} />
            </div>
        </main>
    )
}

export default HomePage

const products = [
    {
        title: "Black Ballpoint Pen",
        image: "/images/default-product.jpg",
        description: "Reliable and smooth pen perfect for daily writing needs.",
        price: 1.50,
        stockQuantity: 200,
        category: "Writing Instruments"
    },
    {
        title: "A5 Spiral Notebook",
        image: "/images/default-product.jpg",
        description: "Durable, 200-page notebook ideal for note-taking and journaling.",
        price: 3.99,
        stockQuantity: 150,
        category: "Notebooks & Pads"
    },
    {
        title: "Mechanical Pencil 0.7mm",
        image: "/images/default-product.jpg",
        description: "High-precision pencil with replaceable lead for detailed writing.",
        price: 2.00,
        stockQuantity: 300,
        category: "Writing Instruments"
    },
    {
        title: "Highlighter Set (5 Colors)",
        image: "/images/default-product.jpg",
        description: "Brighten up your notes with this set of vibrant highlighters.",
        price: 4.99,
        stockQuantity: 120,
        category: "Markers & Highlighters"
    },
    {
        title: "Sticky Notes (Pack of 4)",
        image: "/images/default-product.jpg",
        description: "Convenient sticky notes for reminders and quick notes.",
        price: 2.50,
        stockQuantity: 180,
        category: "Office Supplies"
    },
    {
        title: "Ruler (12-inch)",
        image: "/images/default-product.jpg",
        description: "Transparent ruler with both metric and imperial measurements.",
        price: 1.00,
        stockQuantity: 250,
        category: "Measurement Tools"
    },
    {
        title: "Eraser Pack (2 Pieces)",
        image: "/images/default-product.jpg",
        description: "Soft, non-smudging erasers for clean pencil work.",
        price: 1.25,
        stockQuantity: 400,
        category: "Office Supplies"
    },
    {
        title: "Binder Clips (Small, Pack of 10)",
        image: "/images/default-product.jpg",
        description: "Secure your documents with these small but sturdy binder clips.",
        price: 2.20,
        stockQuantity: 100,
        category: "Office Supplies"
    }
];
