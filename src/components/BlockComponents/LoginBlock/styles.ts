import styled from 'styled-components';
import theme from '../../../styles/theme';

const { colors, fonts } = theme;

const LoginWrapperContainer = styled.form`
  min-width: 25rem;
  max-height: 33rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.main.primary};
  padding: 2rem;
  gap: 1rem;
  box-shadow: 0px 0px 15px ${colors.alpha.white};
  overflow-y: auto;
  overflow-x: hidden;
`;

const LoginLogo = styled.div`
  font-size: ${fonts.fontSizes.xl};
  font-weight: ${fonts.fontWeight.lg};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const LoginError = styled.p`
  font-size: ${fonts.fontSizes.md};
  font-weight: ${fonts.fontWeight.xs};
  color: ${colors.main.red};
`;

const LoginLink = styled.div`
  font-size: ${fonts.fontSizes.sm};
  font-weight: ${fonts.fontWeight.xs};

  & a {
    font-weight: ${fonts.fontWeight.md};
  }
`;

export { LoginWrapperContainer, LoginLogo, LoginError, LoginLink };
