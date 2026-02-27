import React from 'react'
import { PropertyTable } from './PropertyTable';

export const PropertyHome = () => {
  const propertyList = [
  { id: 101, property_name: 'Casandra', type: 'PG', city: 'Stockholm', status: 'ACTIVE' },
  { id: 102, property_name: 'Elbe Heights', type: 'FLAT', city: 'Hamburg', status: 'RENT OUT' },
  { id: 103, property_name: 'Canal View', type: 'PG', city: 'Amsterdam', status: 'ACTIVE' },
  { id: 104, property_name: 'Alpine Lodge', type: 'FLAT', city: 'Zurich', status: 'DEACTIVATE' },
  { id: 105, property_name: 'Liffey Central', type: 'PG', city: 'Dublin', status: 'RENT OUT' },
  { id: 106, property_name: 'Viking Plaza', type: 'FLAT', city: 'Stockholm', status: 'ACTIVE' },
];
  return (
    <div>
      <h1>PropertyHome</h1>
      <PropertyTable propertyList={propertyList}/>
    </div>
  )
}
