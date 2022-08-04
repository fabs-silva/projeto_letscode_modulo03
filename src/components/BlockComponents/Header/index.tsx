import { IProfile } from '../../../types';
import { HeaderProfile } from './components/HeaderProfile';
import { HeaderSearch } from './components/HeaderSearch';
import { HeaderContainer } from './styles';

export function Header(props: { user: IProfile }) {
  return (
    <HeaderContainer>
      <HeaderSearch />
      <HeaderProfile user={props.user} />
    </HeaderContainer>
  );
}
