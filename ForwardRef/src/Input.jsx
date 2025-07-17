import React from "react";

const Input = React.forwardRef(function Input({ type, label }, ref) {
  // Todo: Accept forwarded ref and "connect" it to the <input> element
  return (
    <p className="control">
      <label>{label}</label>
      {/* Todo: "Forward" remaining props to <input> element */}
      <input ref={ref} type={type} />
    </p>
  );
});

export default Input;
