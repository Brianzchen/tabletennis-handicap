import React from 'react';

export default function FormRow(props) {
  return (
    <label htmlFor={props.name}>
      {props.name}
      <input id={props.name} type={props.type} onChange={props.onChange} />
    </label>
  );
}

FormRow.propTypes = {
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};
