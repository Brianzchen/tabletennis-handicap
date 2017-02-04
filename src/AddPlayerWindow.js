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
          <FormRow name={`Initial Rank`} type={`number`} onChange={this.handleScoreChange} />
          <input type={`submit`} value={`Add`} />
        </form>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      name: ``,
      rank: 0,
    };
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  }

  handleScoreChange = event => {
    this.setState({
      rank: event.target.value,
    });
  }

  handleSubmit = event => {
    this.props.onSubmit();
    event.preventDefault();
    const database = this.props.database.ref(`players/`);
    database.once(`value`).then(snapshot => {
      const players = snapshot.val();
      let contains = false;
      const keys = Object.keys(players);
      for (let i = 0, len = keys.length; i < len; i++) {
        if (players[keys[i]].name.toLowerCase() === this.state.name.toLowerCase()) {
          contains = true;
          break;
        }
      }

      if (!contains) {
        this.props.database.ref(`players/`).push({
          name: this.state.name,
          rank: this.state.rank,
        });
      }
    });
  }
}

AddPlayerWindow.propTypes = {
  style: React.PropTypes.object.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  database: React.PropTypes.object.isRequired,
};
