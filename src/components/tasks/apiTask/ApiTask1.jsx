import axios from 'axios'
import React, { useState } from 'react'

export const ApiTask1 = () => {
  const[products, setProducts] = useState([])

  //id,title,category,thumbnail,price,stock
  const getProucts = async () => {
    const response = await axios.get('https://dummyjson.com/products')
    console.log(response)// axios response object
    console.log(response.data) // api response
    console.log(response.data.products) // products is the array of products
    setProducts(response.data.products)
  }
  return (
    <div>
      <h1>ApiTask1</h1>
      <button onClick={getProucts}>Get Products</button>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <td>ID</td>
            <td>TITLE</td>
            <td>CATEGORY</td>
            <td>STOCK</td>
            <td>PRICE</td>
            <td>THUMBNAIL</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => { return (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>${product.price}</td>
              <td><img src={product.thumbnail} alt={product.title} /></td>
            </tr>
          )})}
        </tbody>
      </table>

    </div>
  )
}
