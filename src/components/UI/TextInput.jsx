import React from 'react';

const TextInput = ({ value, onChange, placeholder = '' }) => {
  return (
    <div className="el-input el-input--small">
      <div className="el-input__wrapper">
        <input
          className="el-input__inner"
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TextInput;


