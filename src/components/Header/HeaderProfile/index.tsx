import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profilePic from '../../../assets/profile-pic.jpg';
import { variables } from '../../../styles/variables';

const { colors, fontSizes, fontWeight } = variables;

const HeaderProfileContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 0.75rem;

  & a {
    display: flex;
    align-items: center;
  }

  & img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid ${colors.secondaryColor};
  }

  & p {
    font-size: ${fontSizes.sm};
    font-weight: ${fontWeight.xs};
  }

  & span {
    font-weight: ${fontWeight.md};
  }
`;

export function HeaderProfile(props: { name: string }) {
  return (
    <HeaderProfileContainer>
      <Link to="#">
        <img src={profilePic} alt="profile picture" />
      </Link>
      <p>
        Welcome Back, <span>{props.name}</span>
      </p>
    </HeaderProfileContainer>
  );
}
