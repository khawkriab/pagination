import React from 'react'

function Card({ category }) {
    return (
        <div className="card">
            <div className="card-content">
                <p className='cardname'>{category.name}</p>
                <p className='cardaddress'>{category.address}</p>
            </div>
            <p className='cardimage'><img src={category.avatar} alt={category.name} /></p>
        </div>
    )
}

export default Card