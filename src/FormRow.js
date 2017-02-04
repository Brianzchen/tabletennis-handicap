import React from 'react';

export default class FormRow extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.name}>
        {this.props.name}
        <input
          ref={o => { this.input = o; }} id={this.props.name}
          type={this.props.type} onChange={this.props.onChange}
        />
      </label>
    );
  }

  componentDidUpdate() {
    this.props.focus && this.input.focus();
  }
}

FormRow.propTypes = {
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  focus: React.PropTypes.bool,
};

FormRow.defaultProps = {
  focus: false,
};
