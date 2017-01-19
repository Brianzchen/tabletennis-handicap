import React from 'react';

export default function FormRow(props) {
  return (
    <form>
      <label htmlFor={props.name}>{props.name}</label>
      <input id={props.name} type={props.type} />
    </form>
  );
}

FormRow.propTypes = {
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
};
