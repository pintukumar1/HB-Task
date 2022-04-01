import React, { useContext } from 'react';
import './SearchBar.css'
import AppContext from '../../context/app-context';

const SearchBar = () => {

    const appCtx = useContext(AppContext)

    function onSearch(e) {
        appCtx.searchItems(e.target.value);
    }

    return (
        <div className="search-bar">
            <span className="search-span">
                <i className="fas fa-search"></i>
            </span>
            <input
                className="search-input"
                type="text"
                value={appCtx.currentQuery}
                onChange={onSearch}
                placeholder="Search products..."
                name="search"
                aria-label="Search"
            />
        </div>
    );
};

export default SearchBar