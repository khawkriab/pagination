import React, { useContext, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import { DataContext } from '../../ContextProvider';

function Table() {
    const [currentPage, setCurrentPage] = useState(1);
    const [size, setSize] = useState(10);
    const [limitPage, setLimitPage] = useState(5);

    const { data } = useContext(DataContext);
    const totalItems = data.length;
    const paginatedData = data.slice((currentPage - 1) * size, currentPage * size);

    return (
        <div>
            <table>
                {paginatedData.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                    </tr>
                ))}
            </table>
            <Pagination
                currentPage={currentPage}
                size={size}
                totalItems={totalItems}
                limitPage={limitPage}
                onChangePage={(page) => { setCurrentPage(page) }}
            />
        </div>
    );
}

export default Table;