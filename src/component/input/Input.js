const Input = ({ name, labelText, value, handleChange }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{labelText}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={(e) => handleChange({ searchbar: e.target.value })}
      />
    </div>
  );
};

export default Input;
