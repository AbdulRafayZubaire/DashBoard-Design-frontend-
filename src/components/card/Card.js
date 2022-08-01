import React from 'react'

const Card = (props) => {

    const {logo, title, number, progress} = props;

  return (
    <>
    <div className="card card-2 expenses">

<div className="left">
    <span className="logo material-icons-outlined">{logo}</span>
    <h2>{`Total ${title}`}</h2>
    <div className="number">{`$${number}`}</div>
    <span className="text-muted">Last 24 hours</span>
</div>

<div className="progress">
    <p>{`${progress}%`}</p>
    <svg>
        <circle cx="38" cy="38" r="36" stroke-width="4" fill="yellow" />
    </svg>
    <div className="progress_number">
    </div>
</div>
</div>
</>
  )
}

export default Card