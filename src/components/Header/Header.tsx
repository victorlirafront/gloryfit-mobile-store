import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { StyledHeader, StyledSearchInput } from './Header.styled';
import Image from 'next/image';
import { ARROW_ICON } from '@/constants/images';
import Link from 'next/link';

type HeaderProps = {
  onClickedSuggestion: (a: string) => void;
  onAsideToggler: () => void;
  arrowClassName: string;
};

function Header(props: HeaderProps) {
  const category = useSelector((state: RootState) => state.swapi.category);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [allSuggestions, setAllSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const { data } = useSelector((state: RootState) => state.swapi);

  const fetchSuggestions = (query: string) => {
    return allSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(query.toLowerCase()),
    );
  };

  useEffect(() => {
    if (!searchTerm) {
      props.onClickedSuggestion('reset');
    }

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

  const selectedSuggestion = (e: React.MouseEvent<HTMLLIElement>) => {
    const element = e.currentTarget.closest('[data-suggestion]') as HTMLElement;
    if (element?.dataset.suggestion) {
      const suggestion = element.dataset.suggestion;
      props.onClickedSuggestion(suggestion);
      setShowSuggestions(false);
    }
  };

  return (
    <StyledHeader data-aos="fade-up" data-aos-duration="600">
      <div className="aside-controller" onClick={() => props.onAsideToggler()}>
        <Link href="/" passHref>
          <Image
            className={props.arrowClassName}
            alt="arrow icon"
            src={ARROW_ICON}
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="container">
        <div className="input-wrapper">
          <StyledSearchInput
            type="search"
            placeholder={`Search for ${category}`}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(true);
            }}
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  data-suggestion={suggestion}
                  onClick={(e: React.MouseEvent<HTMLLIElement>) => selectedSuggestion(e)}
                >
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
