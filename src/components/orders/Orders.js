import React from 'react'
import './orders.css'
import Order from '../order/Order'

const Orders = () => {
  return (
<div className="recent-orders">
                <h2>Recent Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Number</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Order name='Dining Table' number='1234' payment='Due' status='paid' details='....'/>
                        <tr>
                            <td>Mini Dining table</td>
                            <td>86531</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Mini Dining table</td>
                            <td>86531</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Mini Dining table</td>
                            <td>86531</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Mini Dining table</td>
                            <td>86531</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Mini Dining table</td>
                            <td>86531</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Mini Dining table</td>
                            <td>86531</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Fancy table Cover</td>
                        </tr>
                    </tbody>
                </table>
                <a href="#">Show All</a>
            </div>
  )
}

export default Orders