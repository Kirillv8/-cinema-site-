interface Option {
  value: string | number;
  label: string;
}

interface PropsForSelect {
  label: string;
  htmlFor: string;
  id: string;
  options: Option[];
}

const Select: React.FC<PropsForSelect> = ({ label, htmlFor, id, options }) => {
  return (
    <>
      <label htmlFor={htmlFor}>
        {label}
        <select id={id}>
          {options.map((option) => {
            return <option key={option.value}>{option.label}</option>;
          })}
        </select>
      </label>
    </>
  );
};

export default Select;
