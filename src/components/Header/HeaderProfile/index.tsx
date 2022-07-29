import styled from 'styled-components';
import { variables } from '../../../styles/variables';

const { colors, fontSizes, fontWeight } = variables;

const HeaderProfileContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export function HeaderProfile() {
  return <HeaderProfileContainer>Teste</HeaderProfileContainer>;
}
