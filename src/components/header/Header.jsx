import FilterBar from '../filter-bar/FilterBar';
import './Header.styles.css';

const Header = ({ filters, setFilters }) => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-title">
                    <h1>TrendHeaven</h1>
                </div>
                <FilterBar filters={filters} setFilters={setFilters} />
            </div>
        </header>
    );
};

export default Header;