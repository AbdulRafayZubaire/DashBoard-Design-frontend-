import React from 'react'
import Aside from '../aside/Aside'
import Insight from '../insight/Insight'
import Orders from '../orders/Orders'
import './dashboard.css'

const Dashboard = () => {
    return (
        <>
            <div className="container">
                <Aside />

                <main>
                    <Insight />
                    <Orders/>
                </main>

            </div>

        </>
    )
}

export default Dashboard