import React from 'react'

export const MapDemo8 = () => {
  const cryptoData = [
  { rank: 1, asset: "Bitcoin", price: 42000, change: 1.2, marketCap: "800B", volume: "15B" },
  { rank: 2, asset: "Ethereum", price: 2200, change: -0.5, marketCap: "260B", volume: "8B" },
  { rank: 3, asset: "Solana", price: 95, change: 5.4, marketCap: "40B", volume: "2B" },
  { rank: 4, asset: "Cardano", price: 0.50, change: -2.1, marketCap: "17B", volume: "400M" },
  { rank: 5, asset: "Polkadot", price: 7.20, change: 0.1, marketCap: "9B", volume: "200M" }
];
  return (
    <div style={{padding:10}}>
      <table className='table'>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Assest</td>
            <td>Price</td>
            <td>24H Change</td>
            <td>Market Cap</td>
            <td>Volume</td>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((coin, i) => <tr style={{border:coin.rank <= 3 && '2px solid gold'}} key={i}> {/* Condition 1: Top Rank Border */}
            <td>{coin.rank}</td>
            <td>{coin.asset}</td>
            <td>${coin.price.toLocaleString()}</td>
            <td style={{color: coin.change > 0 ? 'green' : 'red'}}>{coin.change > 0 ?'▲':'▼'}{Math.abs(coin.change)}%</td>{/* Condition 2 & 3: Color + Icon Change */}
            <td>${coin.marketCap}</td>
            <td style={{fontWeight: parseFloat(coin.volume)>5 && 'bold'}}>${coin.volume}</td>{/* Condition 4: High Volume Bold */}
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
