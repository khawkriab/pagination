import React, { useState } from 'react';

function Pagination({ currentPage, size, limitPage, totalItems, onChangePage }) {
    const totalPages = totalItems ? Math.ceil(totalItems / size) : 10;
    const [pCurrentPage, setpCurrentPage] = useState(1);
    const [pLimitPage, setpLimitPage] = useState(limitPage || 5);

    const getPaginationNumbers = (currentPage, totalPages, limitPage) => {
        const pageNumbers = [];
        const startPage = Math.max(2, currentPage - Math.floor(limitPage / 2));
        const endPage = Math.min(totalPages - 1, currentPage + Math.floor(limitPage / 2));

        if (startPage > 2) {
            pageNumbers.push('...');
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        if (endPage < totalPages - 1) {
            pageNumbers.push('...');
        }

        return [1, ...pageNumbers, totalPages];
    };

    const prevPage = (onChangePage, currentPage) => {
        const newPage = currentPage > 1 ? currentPage - 1 : 1;
        if (onChangePage) {
            onChangePage(newPage);
        } else {
            setpCurrentPage(newPage);
        }
    };

    const nextPage = (onChangePage, currentPage, totalPages) => {
        const newPage = currentPage < totalPages ? currentPage + 1 : totalPages;
        if (onChangePage) {
            onChangePage(newPage);
        } else {
            setpCurrentPage(newPage);
        }
    };

    const paginationNumbers = onChangePage
        ? getPaginationNumbers(currentPage, totalPages, limitPage)
        : getPaginationNumbers(pCurrentPage, totalPages, pLimitPage);

    return (
        <nav>
            <ul className='pagination'>
                <li className={`page-item ${(onChangePage ? currentPage : pCurrentPage) === 1 ? 'disabled' : ''}`}>
                    <button
                        className='page-link'
                        onClick={() => prevPage(onChangePage, onChangePage ? currentPage : pCurrentPage)}
                    >
                        &lt;
                    </button>
                </li>
                {paginationNumbers.map((num, index) => (
                    <li key={index} className={`page-item ${(onChangePage ? currentPage : pCurrentPage) === num ? 'active' : ''}`}>
                        <button
                            className='page-link'
                            onClick={() => num !== '...' && (onChangePage ? onChangePage(num) : setpCurrentPage(num))}
                            disabled={num === '...'}
                        >
                            {num}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${(onChangePage ? currentPage : pCurrentPage) === totalPages ? 'disabled' : ''}`}>
                    <button
                        className='page-link'
                        onClick={() => nextPage(onChangePage, onChangePage ? currentPage : pCurrentPage, totalPages)}
                    >
                        &gt;
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
