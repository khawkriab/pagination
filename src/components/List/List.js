import React, { useContext } from 'react';
import Card from './Card';

function List() {
    return (
        <div className="list">
            {data.map(category => (
                <Card key={category.id} category={category} />
            ))}
        </div>
    )
}

export default List