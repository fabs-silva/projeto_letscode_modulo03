import styled from 'styled-components';
import { variables } from '../../styles/variables';
const { colors, fontSizes, fonts } = variables;

const FormFieldsetContainer = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  font-size: ${fontSizes.sm};

  & input {
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background: ${colors.whiteAlpha};
    font-size: ${fontSizes.sm};
    color: ${colors.mainWhite};
  }

  & input::placeholder {
    font-family: ${fonts.jost};
    font-size: ${fontSizes.sm};
    color: ${colors.mainWhite};
  }

  & input:focus-visible {
    border-color: ${colors.accentColorLight};
  }
`;

type FormFieldsetProps = {
  label: string;
  value: string;
  type: string;
  placeholder: string;
  setValue: (value: string) => void;
};

export function FormFieldset({
  label,
  value,
  setValue,
  type,
  placeholder,
}: FormFieldsetProps) {
  return (
    <FormFieldsetContainer>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </FormFieldsetContainer>
  );
}
