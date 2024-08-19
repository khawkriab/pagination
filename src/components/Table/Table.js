import React, { useContext, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import { DataContext } from '../../ContextProvider';

function Table() {
    const { data } = useContext(DataContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [size, setSize] = useState(10);
    const [limitPage, setLimitPage] = useState(10);

    const paginatedData = data.slice((currentPage - 1) * size, currentPage * size);

    return (
        <div>
            <table>
                {paginatedData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                    </tr>
                ))}
            </table>
            <Pagination
                currentPage={currentPage}
                size={data.length}
                limitPage={limitPage}
                onChangePage={(page) => { setCurrentPage(page) }}
            />
        </div>
    );
}

export default Table;
