import styled from 'styled-components';
import { variables } from '../../styles/variables';
const { colors, fonts } = variables;

const ButtonContainer = styled.button`
  margin: 1rem 0 0.5rem 0;
  padding: 0.75rem 1.5rem;
  background-color: ${colors.accentColor};
  color: ${colors.mainWhite};
  text-transform: uppercase;
`;

export function Button(props: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: {};
  children: any;
}) {
  return (
    <ButtonContainer onClick={props.onClick} style={props.style}>
      {props.children}
    </ButtonContainer>
  );
}
