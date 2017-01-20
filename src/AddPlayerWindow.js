import React from 'react';

import FormRow from './FormRow';

export default class AddPlayerWindow extends React.Component {
  render() {
    const styles = {
      background: {

      },
      window: {

      },
    };

    return (
      <div style={this.props.style}>
        <div style={styles.background} />
        <form onSubmit={this.handleSubmit}>
          <FormRow name={`Name`} type={`string`} onChange={this.handleNameChange} />
          <FormRow name={`Initial Score`} type={`number`} onChange={this.handleScoreChange} />
          <input type={`submit`} value={`Add`} />
        </form>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      name: ``,
      score: 0,
    };
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  }

  handleScoreChange = event => {
    this.setState({
      score: event.target.value,
    });
  }

  handleSubmit = event => {
    console.log(`you added a player! time to add to databse and refresh`); // eslint-disable-line
    console.log(this.state.name); // eslint-disable-line
    console.log(this.state.score); // eslint-disable-line
    this.props.onSubmit();
    event.preventDefault();
  }
}

AddPlayerWindow.propTypes = {
  style: React.PropTypes.object.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
};
