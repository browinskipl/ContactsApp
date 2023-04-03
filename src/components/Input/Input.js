import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      type="text"
      className="form-control"
      value={props.value}
      onChange={props.onChange}
      placeholder="Search..."
    />
  );
};

export default Input;
