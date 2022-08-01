import './insight.css'
import Card from '../card/Card'
import React from 'react'

const Insight = () => {
  return (

<div className="insight">
                <h1>Dashboard</h1>
                <input className="date" type="date"/>

                <div className="insight-top">
                    {/* <!---------- SALES ----------> */}
                    <Card logo='analytics' title='Sales' number={24520} progress={50} />

                    {/* <!---------- EXPENSES ----------> */}
                    <Card logo='insights' title='Expenses' number={80320} progress={50} />

                    {/* <!---------- INCOME ----------> */}
                    <Card logo='bar_charts' title='Income' number={101301} progress={50} />

                </div>
            </div>
  )
}

export default Insight