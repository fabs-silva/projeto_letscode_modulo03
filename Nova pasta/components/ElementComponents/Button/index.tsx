import styled from 'styled-components';
import theme from '../../../styles/theme';

const { colors } = theme;

const ButtonContainer = styled.button`
  margin: 1rem 0 0.5rem 0;
  padding: 0.75rem 1.5rem;
  background-color: ${colors.main.accent};
  color: ${colors.main.white};
  text-transform: uppercase;
`;

export function Button(props: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <ButtonContainer onClick={props.onClick} style={props.style}>
      {props.children}
    </ButtonContainer>
  );
}
