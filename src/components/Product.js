import React from 'react'
import Card from './Card'
import { useEffect, useState } from 'react';
import axios from 'axios';
function Product() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get("https://dummyjson.com/products").
    then(function (response) {
      console.log(response.data.products);
      setData(response.data.products);
    })
    .catch(function (error) {
      console.log(error);
    })
  },[])
  return (
    <>
    <h1 className='mt-5 text-4xl font-bold text-gray-50 font-sans '>Featured Products</h1>
    <div class="grid grid-cols-3 gap-3 ">
    
    {
      data.map((data)=>(
          <Card key={data.id} title={data.title} price={data.price} brand={data.brand} image={data.thumbnail}/>
        ))
    }
    </div>
    </>
  )
}

export default Product