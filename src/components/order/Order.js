import React from 'react'

const Order = (props) => {

    const {name, number, payment, status, details} = props
  return (
    <tr>
        <td>{name}</td>
        <td>{number}</td>
        <td>{payment}</td>
        <td>{status}</td>
        <td>{details}</td>
    </tr>
  )
}

export default Order