import React from 'react';
import _ from 'lodash';

export default class Tab extends React.Component {
  render() {
    const styles = {
      container: {
        color: `#FFFFFF`,
        fontSize: `2em`,
        padding: `0.5em 1em 0.5em 0.5em`,
      },
      selected: {
        borderWidth: `0 0 2px 0`,
        borderColor: `#FF5252`,
        borderStyle: `solid`,
      },
    };

    const containerStyle = _.assign({}, styles.container, this.props.selected && styles.selected);

    return (
      <span style={containerStyle} onClick={this.select}>
        {this.props.name}
      </span>
    );
  }

  select = () => {
    this.props.onClick(this.props.name);
  }
}

Tab.propTypes = {
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  selected: React.PropTypes.bool.isRequired,
};
