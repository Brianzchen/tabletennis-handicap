import React from 'react';

export default function Tabs(props) {
  const style = {
    background: `#00BCD4`,
    display: `flex`,
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
