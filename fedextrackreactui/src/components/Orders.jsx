import React from 'react'
import ProductCard from './ProductCard';
import Dell from '/images/Dell-Laptop.jpg'
import HP from '/images/HP-Laptop.jpg'
import Human from '/images/human.jpg'
import style from '/images/style.jpg'
import tech from '/images/tech.jpg'
import herbal from '/images/herbal.webp'
import product from '/images/product.jpg'
import brush from '/images/brush.webp'

const Orders = () => {
  const products =[
    {
        id:1, title:'Dell 2212 Laptop', description:'This is sample description', price: 100, pic:Dell, trackingNumber:'122816215025810'
    },
    {
        id:2, title:'HP 2213 Laptop', description:'This is sample description', price: 200, pic:HP, trackingNumber:'231300687629630'
    },
    {
        id:3, title:'Human things', description:'This is sample description', price: 300, pic:Human, trackingNumber:'377101283611590'
    },
    {
        id:4, title:'Style Fashion', description:'This is sample description', price: 400, pic:style, trackingNumber:'843119172384577'
    },
    {
        id:5, title:'Technology', description:'This is sample description', price: 500, pic:tech, trackingNumber:'070358180009382'
    },
    {
        id:6, title:'Herbal Product', description:'This is sample description', price: 600, pic:herbal, trackingNumber:'797806677146'
    },
    {
        id:7, title:'Daily use Product', description:'This is sample description', price: 600, pic:product, trackingNumber:'797615467620'
    },
    {
        id:8, title:'Amazing Product', description:'This is sample description', price: 700, pic:brush, trackingNumber:'149331877648230'    
    },

  ];
  return (
    <main className='mx-6 lg:mx-48 my-10 grid grid-cols-1 gap-6'>
        <h1 className='text-white font-bold text-3xl'>My Orders</h1>
    {products.map((product )=> (
        <ProductCard key={product.id} product={product}/>
    ))}
    </main>
  )
}

export default Orders