import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { StyledHeader, StyledSearchInput } from './Header.styled';
import Image from 'next/image';
import { ARROW_ICON } from '@/constants/images';

type HeaderProps = {
  onClickedSuggestion: (a: string) => void;
  onAsideToggler: () => void;
  arrowClassName: string;
};

function Header(props: HeaderProps) {
  const category = useSelector((state: RootState) => state.swapi.category);
  const { data } = useSelector((state: RootState) => state.swapi);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [allSuggestions, setAllSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  useEffect(() => {
    if (data?.results) {
      const result = data.results.map((item) => {
        if ('title' in item) return item.title;
        if ('name' in item) return item.name;
        return '';
      });

      setAllSuggestions(result);
    }
  }, [data, category]);

  useEffect(() => {
    if (!searchTerm) {
      props.onClickedSuggestion('reset');
      setSuggestions([]);
    } else {
      updateSuggestions(searchTerm);
    }
  }, [searchTerm]);

  const updateSuggestions = (query: string) => {
    const filteredSuggestions = allSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(query.toLowerCase()),
    );
    setSuggestions(filteredSuggestions);
    setShowSuggestions(filteredSuggestions.length > 0);

    if (filteredSuggestions.length > 0) {
      props.onClickedSuggestion(filteredSuggestions[0]);
    } else {
      props.onClickedSuggestion('reset');
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const selectedSuggestion = (e: React.MouseEvent<HTMLLIElement>) => {
    const suggestion = e.currentTarget.dataset.suggestion;
    if (suggestion) {
      props.onClickedSuggestion(suggestion);
      setShowSuggestions(false);
    }
  };

  return (
    <StyledHeader data-aos="fade-up" data-aos-duration="600">
      <div className="aside-controller" onClick={() => props.onAsideToggler()}>
        <Image
          className={props.arrowClassName}
          alt="arrow icon"
          src={ARROW_ICON}
          width={50}
          height={50}
        />
      </div>
      <div className="container">
        <div className="input-wrapper">
          <StyledSearchInput
            type="search"
            placeholder={`Search for ${category}`}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index} data-suggestion={suggestion} onClick={selectedSuggestion}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
