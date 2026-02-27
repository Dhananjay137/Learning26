import React, { useState } from 'react'

export const UseStateDemo2 = () => {
  const[loading, setLoading]=useState(false)
  const stop = () => {
    setLoading(false)
  }
  const start = () => {
    setLoading(true)
  }
  return (
    <>
    <div>UseStateDemo2</div>
    {loading == true && <h2>loading......</h2>}
    <button onClick={stop}>STOP</button>
    <button onClick={start}>START</button>
    </>
  )
}
