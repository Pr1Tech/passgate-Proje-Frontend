import React from 'react';

const NumberInput = ({ value, onChange, min, max }) => {
  const handleInputChange = e => {
    const val = Number(e.target.value);
    if (!isNaN(val)) {
      const clamped = Math.max(min ?? val, Math.min(max ?? val, val));
      onChange(clamped);
    } else {
      onChange(0);
    }
  };

  const handleDecrement = () => {
    const newValue = Math.max(min ?? -Infinity, value - 1);
    onChange(newValue);
  };

  const handleIncrement = () => {
    const newValue = Math.min(max ?? Infinity, value + 1);
    onChange(newValue);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button type="button" onClick={handleDecrement}>−</button>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={handleInputChange}
        style={{
          width: '60px',
          textAlign: 'center',
          MozAppearance: 'textfield'
        }}
      />
      <button type="button" onClick={handleIncrement}>+</button>
    </div>
  );
};

export default NumberInput;
