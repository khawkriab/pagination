import React, { useContext, useState } from 'react';
import { DataContext } from '../ContextProvider';

function Pagination() {
    const { data } = useContext(DataContext);
    const [currentPage, setCurrentPage] = useState(1);
    const Page = 10;
    const lastIndex = currentPage * Page;
    const firstIndex = lastIndex - Page;
    const records = data.slice(firstIndex, lastIndex);
    const numPages = Math.ceil(data.length / Page);

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < numPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const changePage = (num) => {
        setCurrentPage(num);
    };

    const getPaginationNumbers = () => {
        const numbers = [];
        const maxVisiblePages = 5;

        if (currentPage <= maxVisiblePages) {
            for (let i = 1; i <= maxVisiblePages; i++) {
                numbers.push(i);
            }
            numbers.push('...');
            numbers.push(numPages);
        } else if (currentPage > numPages - maxVisiblePages) {
            numbers.push(1);
            numbers.push('...');
            for (let i = numPages - maxVisiblePages + 1; i <= numPages; i++) {
                numbers.push(i);
            }
        }

        return numbers;
    };

    return (
        <div>
            <div className='pagintation-text'>
                {records.map((record) => (
                    <div key={record.id}>{record.id} {record.name}</div>
                ))}
            </div>
            <nav>
                <ul className='pagination'>
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className='page-link' onClick={prevPage}>&lt;</button>
                    </li>
                    {getPaginationNumbers().map((num, index) => (
                        <li className={`page-item ${currentPage === num ? 'active' : ''}`} key={index}>
                            <button className='page-link' onClick={() => num !== '...' && changePage(num)}>{num}</button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === numPages ? 'disabled' : ''}`}>
                        <button className='page-link' onClick={nextPage}>&gt;</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;
