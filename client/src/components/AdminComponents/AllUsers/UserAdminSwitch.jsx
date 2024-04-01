import React, { useState } from 'react';
import Switch from 'react-switch';

const UserAdminSwitch = ({ isAdmin}) => {
  const [checked, setChecked] = useState(isAdmin);
  

  const handleChange = (newChecked) => {
    setChecked(newChecked);
  };

  return (
    <label>
      <Switch onChange={handleChange} checked={checked} />
    </label>
  );
};

export default UserAdminSwitch;
