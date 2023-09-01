import { Container } from 'react-bootstrap';


const SearchBar = ({ keyword, onChange }) => {
    return (
        <Container className='d-flex justify-content-center mt-3 mb-3'>
            <input
                key="search-bar"
                value={keyword}
                placeholder={"Search Exercises"}
                onChange={(e) => onChange(e.target.value)}
            />  </Container>
    );
}

export default SearchBar;