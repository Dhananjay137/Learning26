import React from 'react'

export const MapDemo7 = () => {
  let warehouse = [
    {productId:101,name:'Mackbook Pro',cat:'Electronics',stock:5,price:2400,status:'active'},
    {productId:102,name:'USB-C Cable',cat:'Accessories',stock:50,price:15,status:'active'},
    {productId:103,name:'Office Chair',cat:'Furniture',stock:2,price:150,status:'discontinued'},
    {productId:104,name:'Monitor',cat:'Electronics',stock:12,price:300,status:'active'},
    {productId:105,name:'Desk Lamp',cat:'Furniture',stock:8,price:45,status:'active'},
    {productId:106,name:'Keyboard',cat:'Accessories',stock:24,price:110,status:'active'}
  ]
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <td>Product ID</td>
            <td>Name</td>
            <td>Category</td>
            <td>Stock</td>
            <td>Price</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {warehouse.map((product,index) => <tr key={index} style={{backgroundColor: index%2 == 0 ? '#ffffff':'#f9f9f9'}}> {/* Condition 1: Zebra Striping */}
            <td>{product.productId}</td>
            <td>{product.name}</td>
            <td>{product.cat}</td>
            <td style={{color: product.stock < 10 && 'red', fontWeight: product.stock < 10 && 'bold'}}>{product.stock} {product.stock < 10 && '(low)'}</td>{/* Condition 2: Low Stock Warning */}
            <td style={{backgroundColor: product.price > 500 &&'#fff3cd'}}>${product.price}</td>{/* Condition 3: High Value Highlight */}
            <td style={{opacity: product.status === 'discontinued' && 0.4}}>{product.status}</td>{/* Condition 4: Status Dimming */}
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
