import React from 'react';
import _ from 'lodash';

import AddPlayerWindow from './AddPlayerWindow';
import PlayerListPlayer from './PlayerListPlayer';

export default class PlayerList extends React.Component {
  render() {
    const styles = {
      addPlayerWindowHidden: {
        visibility: `hidden`,
      },
      addPlayerWindowVisible: {
        visibility: `visible`,
      },
    };

    const players = _.map(this.props.players, (o, index) =>
      <PlayerListPlayer key={index} player={o} database={this.props.database} />);

    return (
      <div>
        {players}
        <button onClick={this.openAddPlayer}>
          Add
        </button>
        <AddPlayerWindow
          style={this.state.add ? styles.addPlayerWindowVisible : styles.addPlayerWindowHidden}
          onSubmit={this.submitAddPlayer}
          database={this.props.database}
        />
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      add: false,
    };
  }

  componentWillUnmount() {
    this.props.database.ref(`players`).off(`child_added`);
    this.props.database.ref(`players`).off(`child_changed`);
  }

  openAddPlayer = () => {
    this.setState({
      add: true,
    });
  }

  submitAddPlayer = () => {
    this.setState({
      add: false,
    });
  }
}

PlayerList.propTypes = {
  database: React.PropTypes.object.isRequired,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    rank: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })).isRequired,
};
