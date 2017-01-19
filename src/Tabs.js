import React from 'react';

export default function Tabs(props) {
  const style = {

  };

  return (
    <div style={style}>
      {props.children}
    </div>
  );
}

Tabs.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
};
