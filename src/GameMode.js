import React from 'react';

import GameModePlayer from './GameModePlayer';

export default class GameMode extends React.Component {
  render() {
    const disableSumbit = (!this.state.playerOne || !this.state.playerTwo) ||
      (this.state.playerOne === this.state.playerTwo);

    return (
      <div>
        <GameModePlayer players={this.props.players} onSelect={this.getPlayerOneDetails} />
        vs
        <GameModePlayer players={this.props.players} onSelect={this.getPlayerTwoDetails} />
        <button onClick={this.submit} disabled={disableSumbit}>
          Submit
        </button>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      playerOne: undefined,
      playerTwo: undefined,
    };
  }

  componentWillUnmount() {
    this.props.database.ref(`players`).off(`child_added`);
    this.props.database.ref(`players`).off(`child_changed`);
  }

  getPlayerOneDetails = playerOne => {
    this.setState({ playerOne }, () => {
      this.recalculate();
    });
  }

  getPlayerTwoDetails = playerTwo => {
    this.setState({ playerTwo }, () => {
      this.recalculate();
    });
  }

  recalculate = () => {
    if (this.state.playerOne && this.state.playerTwo) {
      console.log(this.state.playerOne); // eslint-disable-line
      console.log(this.state.playerTwo); // eslint-disable-line
    }
  }

  submit = () => {
    console.log(this.state.playerOne); // eslint-disable-line
    console.log(this.state.playerTwo); // eslint-disable-line
  }
}

GameMode.propTypes = {
  database: React.PropTypes.object.isRequired,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    rank: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })).isRequired,
};
