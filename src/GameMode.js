import React from 'react';

import GameModePlayer from './GameModePlayer';

export default class GameMode extends React.Component {
  render() {
    const disableSumbit = (!this.state.playerOne || !this.state.playerTwo) ||
      (this.state.playerOne === this.state.playerTwo);

    return (
      <div>
        <GameModePlayer players={this.players} onSelect={this.getPlayerOneDetails} />
        vs
        <GameModePlayer players={this.players} onSelect={this.getPlayerTwoDetails} />
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

    this.players = [{ name: `default`, rank: 0 }];

    this.props.database.ref(`players`).on(`child_added`, snapshot => {
      const value = snapshot.val();
      this.players.push({
        name: value.name,
        rank: value.rank,
      });
      this.forceUpdate();
    });
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
      console.log(this.state.playerOne);
      console.log(this.state.playerTwo);
    }
  }

  submit = () => {
    console.log(this.state.playerOne);
    console.log(this.state.playerTwo);
  }
}

GameMode.propTypes = {
  database: React.PropTypes.object.isRequired,
};
