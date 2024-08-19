import React, { useContext, useState } from 'react';
import { DataContext } from '../../ContextProvider';
import Card from './Card';

function Filter() {

    const { data } = useContext(DataContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        setSearchQuery(searchTerm);
    };

    const filteredCategories = data.filter(category =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className="Filter">
                <input
                    type="text"
                    placeholder="ค้นหาชื่อ"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="Filterbar"
                />
                <button onClick={handleSearchClick} className="Filterbutton">
                    ค้นหา
                </button>
                <div className="list">
                    {filteredCategories.map(category => (
                        <Card key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Filter