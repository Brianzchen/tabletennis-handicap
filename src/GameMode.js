import React from 'react';

import GameModePlayer from './GameModePlayer';

export default class GameMode extends React.Component {
  render() {
    return (
      <div>
        <GameModePlayer players={this.players}/>
        vs
        <GameModePlayer players={this.players} />
        <button >Submit</button> 
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.players = [];

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
}
GameMode.propTypes = {
  database: React.PropTypes.object.isRequired,
};
