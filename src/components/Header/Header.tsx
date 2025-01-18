import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { StyledHeader, StyledSearchInput } from './Header.styled';

function Header() {
  const category = useSelector((state: RootState) => state.swapi.category);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [allSuggestions, setAllSuggestions] = useState<string[]>([]);
  const { data } = useSelector((state: RootState) => state.swapi);

  const fetchSuggestions = (query: string) => {
    return allSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(query.toLowerCase()),
    );
  };

  useEffect(() => {
    if (searchTerm) {
      setSuggestions(fetchSuggestions(searchTerm));
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const property = category === 'films' ? 'title' : 'name';
    const result = data?.results.map((item) => item[property]);

    if (result) {
      setAllSuggestions(result);
    }
  }, [data]);

  return (
    <StyledHeader>
      <div className="container">
        <div className="input-wrapper">
          <StyledSearchInput
            type="search"
            placeholder={`Search for ${category}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {suggestions.length > 0 && (
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
