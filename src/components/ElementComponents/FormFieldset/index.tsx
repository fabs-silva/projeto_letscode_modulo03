import { FormFieldsetContainer } from "./styles";

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
