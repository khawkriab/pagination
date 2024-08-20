import React from 'react';

function Pagination({ currentPage, size, totalItems, onChangePage, limitPage }) {
    const totalPages = Math.ceil(totalItems / size);

    const getPaginationNumbers = () => {
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

    const prevPage = () => currentPage > 1 && onChangePage(currentPage - 1);
    const nextPage = () => currentPage < totalPages && onChangePage(currentPage + 1);

    return (
        <nav>
            <ul className='pagination'>
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className='page-link' onClick={prevPage} disabled={currentPage === 1}>
                        &lt;
                    </button>
                </li>
                {getPaginationNumbers().map((num) => (
                    <li className={`page-item ${currentPage === num ? 'active' : ''}`}>
                        <button
                            className='page-link'
                            onClick={() => num !== '...' && onChangePage(num)}
                            disabled={num === '...'}
                        >
                            {num}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className='page-link' onClick={nextPage} disabled={currentPage === totalPages}>
                        &gt;
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
