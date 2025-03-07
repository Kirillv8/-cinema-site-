import { ChangeEvent } from "react";

interface Option {
  value: string | number;
  label: string;
}

interface PropsForSelect {
  label: string;
  htmlFor: string;
  id: string;
  options: Option[];

  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<PropsForSelect> = ({
  label,
  htmlFor,
  id,
  options,
  handleChange,
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>
        {label}
        <select
          id={id}
          multiple={true}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          {options.map((option) => {
            return <option key={option.value}>{option.label}</option>;
          })}
        </select>
      </label>
    </>
  );
};

export default Select;
