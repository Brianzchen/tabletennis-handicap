import React from 'react';

export default class Tab extends React.Component {
  render() {
    const styles = {
      container: {

      },
    };

    return (
      <div style={styles.container} onClick={this.select}>
        {this.props.name}
      </div>
    );
  }

  select = () => {
    this.props.onClick(this.props.name);
  }
}

Tab.propTypes = {
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};
