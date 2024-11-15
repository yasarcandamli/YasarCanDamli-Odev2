import './FilterBar.styles.css';

const FilterBar = ({ filters, setFilters }) => {
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    return (
        <div className="filter-bar">
            <input
                type="text"
                name="search"
                placeholder="Search..."
                value={filters.search || ''}
                onChange={handleFilterChange}
                id='search-input'
            />

            <div className="special-filters">
                <select
                    name="category"
                    value={filters.category || ''}
                    onChange={handleFilterChange}
                >
                    <option value="">All Categories</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelry</option>
                </select>

                <input
                    type="number"
                    name="minPrice"
                    placeholder="Min Price"
                    value={filters.minPrice || ''}
                    onChange={handleFilterChange}
                />

                <input
                    type="number"
                    name="maxPrice"
                    placeholder="Max Price"
                    value={filters.maxPrice || ''}
                    onChange={handleFilterChange}
                />
            </div>
        </div>
    );
};

export default FilterBar;