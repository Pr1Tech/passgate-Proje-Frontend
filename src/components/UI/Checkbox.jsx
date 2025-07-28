import React from 'react';

const Checkbox = ({ checked, disabled = false, onChange }) => {
  const handleChange = (e) => {
    if (!disabled && onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <label className={`el-checkbox ${disabled ? 'is-disabled' : ''}`}>
      <span className={`el-checkbox__input ${checked ? 'is-checked' : ''} ${disabled ? 'is-disabled' : ''}`}>
        <span className="el-checkbox__inner"></span>
        <input
          type="checkbox"
          className="el-checkbox__original"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
        />
      </span>
    </label>
  );
};

export default Checkbox;