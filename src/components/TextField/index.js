import { useState } from 'react';
import './TextField.css';

function TestField({ name, placeholder, type }) {
  const [data, setData] = useState('');

  const _handleOnChange = (e) => {
    setData((p) => e.target.val);
  };
  return (
    <div className='input-group'>
      <label className='input-group__label' htmlFor={name}>
        {name}
      </label>
      <input
        className='input-group__input'
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={data}
        onChange={_handleOnChange}
      />
    </div>
  );
}

export default TestField;
