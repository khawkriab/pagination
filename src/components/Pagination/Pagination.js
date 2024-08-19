import React from 'react';

function Pagination({ currentPage, size, limitPage, onChangePage }) {
    const getPaginationNumbers = () => {
        const pageNumbers = [];
        const totalPages = Math.ceil(limitPage);
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
    const nextPage = () => currentPage < Math.ceil(size / limitPage) && onChangePage(currentPage + 1);

    return (
        <nav>
            <ul className='pagination'>
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className='page-link' onClick={prevPage} disabled={currentPage === 1}>
                        &lt;
                    </button>
                </li>
                {getPaginationNumbers().map((num, index) => (
                    <li className={`page-item ${currentPage === num ? 'active' : ''}`} key={index}>
                        <button
                            className='page-link'
                            onClick={() => num !== '...' && onChangePage(num)}
                            disabled={num === '...'}
                        >
                            {num}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === Math.ceil(size / limitPage) ? 'disabled' : ''}`}>
                    <button className='page-link' onClick={nextPage} disabled={currentPage === Math.ceil(size / limitPage)}>
                        &gt;
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;