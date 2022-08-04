import { FiSearch } from 'react-icons/fi';
import { HeaderSearchContainer } from '../styles';

export function HeaderSearch() {
  return (
    <HeaderSearchContainer>
      <FiSearch />
      <input type="text" placeholder="Find your favorite music here" />
    </HeaderSearchContainer>
  );
}
