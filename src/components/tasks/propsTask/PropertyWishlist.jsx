import React from 'react'
import { PropertyTable } from './PropertyTable';

export const PropertyWishlist = () => {
  const propertyList = [
  { id: 101, property_name: 'Casandra', type: 'PG', city: 'Stockholm', status: 'ACTIVE' },
  { id: 103, property_name: 'Canal View', type: 'PG', city: 'Amsterdam', status: 'ACTIVE' },
  { id: 105, property_name: 'Liffey Central', type: 'PG', city: 'Dublin', status: 'RENT OUT' },
];
  return (
    <div>
      <h1>PropertyWishlist</h1>
      <PropertyTable propertyList={propertyList}/>
    </div>
  )
}
