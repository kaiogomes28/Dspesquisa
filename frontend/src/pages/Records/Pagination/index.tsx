import './styles.css';

type Props = {
    totalPages?: number;
    goToPage: Function;
    activePage: number;
}

const Pagination = ({ totalPages = 0, goToPage, activePage }: Props) => {

    const PaginationItems = Array.from(Array(totalPages).keys());

    return (
        <div className="pagination-container">
            {PaginationItems.map(item => (
                <button 
                    key={item}
                    className={`pagination-item ${activePage === item ? 'active' : 'inactive'}`}
                    onClick={() => goToPage(item)}
                >
                    {item + 1}
                </button>
            ))}
        </div>
    );
}

export default Pagination;