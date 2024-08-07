import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderSummary() {
    const navigate = useNavigate()

  return (
    <>
    <div>Order is being dispatched</div>
    <button onClick={()=>navigate(-1)} >go back</button>
    </>
  )
}
