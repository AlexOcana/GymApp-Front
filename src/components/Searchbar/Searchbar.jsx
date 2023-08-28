const SearchBar = ({ keyword, onChange }) => {
    return (
        <input
            key="search-bar"
            value={keyword}
            placeholder={"Search Exercises"}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default SearchBar;