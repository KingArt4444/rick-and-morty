import React, { useEffect } from 'react';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
import './pagination.scss'

interface PaginationComponentProps {
    page: number
    totalPages: number
    handlePageChange: (page: number) => void
}

export default function PaginationComponent(props: PaginationComponentProps) {
    const {
        page = 1,
        totalPages,
        handlePageChange
    } = props

    return <div className='pagination-wrapper'>
        {page !== 1 && (
            <button
                onClick={() => handlePageChange(page - 1)}
                type="button"
                className='pagination-pageButton'
            >
                &lt;
            </button>
        )}

        {totalPages !== 1 && (
            <button
                onClick={() => handlePageChange(1)}
                type="button"
                className={`pagination-pageButton ${page === 1 ? 'pagination-pageActive' : ''}`}
            >
                {1}
            </button>
        )}

        {page > 3 && <div className='pagination-separator'>...</div>}

        {page === totalPages && totalPages > 3 && (
            <button
                onClick={() => handlePageChange(page - 2)}
                type="button"
                className='pagination-pageButton'
            >
                {page - 2}
            </button>
        )}

        {page > 2 && (
            <button
                onClick={() => handlePageChange(page - 1)}
                type="button"
                className='pagination-pageButton'
            >
                {page - 1}
            </button>
        )}

        {page !== 1 && page !== totalPages && (
            <button
                onClick={() => handlePageChange(page)}
                type="button"
                className='pagination-pageButton pagination-pageActive'
            >
                {page}
            </button>
        )}

        {page < totalPages - 1 && (
            <button
                onClick={() => handlePageChange(page + 1)}
                type="button"
                className='pagination-pageButton'
            >
                {page + 1}
            </button>
        )}

        {page === 1 && totalPages > 3 && (
            <button
                onClick={() => handlePageChange(page + 2)}
                type="button"
                className='pagination-pageButton'
            >
                {page + 2}
            </button>
        )}

        {page < totalPages - 2 && <div className='pagination-separator'>...</div>}

        <button
            onClick={() => handlePageChange(totalPages)}
            type="button"
            className={`pagination-pageButton ${page === totalPages ? 'pagination-pageActive' : ''}`}
        >
            {totalPages}
        </button>

        {page !== totalPages && (
            <button
                onClick={() => handlePageChange(page + 1)}
                type="button"
                className='pagination-pageButton'
            >
                &gt;
            </button>
        )}
    </div>

}