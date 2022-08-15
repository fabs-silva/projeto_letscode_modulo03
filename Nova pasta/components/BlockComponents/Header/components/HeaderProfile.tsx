import { IProfile } from '../../../../types';
import { HeaderProfileContainer } from '../styles';
import { HeaderDropdown } from './HeaderDropdown';

export function HeaderProfile(props: { user: IProfile }) {
  return (
    <HeaderProfileContainer>
      <HeaderDropdown user={props.user} />
      <p>
        Welcome Back, <span>{props.user.firstName}</span>
      </p>
    </HeaderProfileContainer>
  );
}
