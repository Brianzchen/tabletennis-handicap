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

    const players = _.map(this.players, (o, index) => <PlayerListPlayer key={index} player={o} database={this.props.database} />);

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

    this.players = [];

    this.props.database.ref(`players`).on(`child_added`, snapshot => {
      const value = snapshot.val();
      const baseUrl = `https://table-tennis-handicap.firebaseio.com/players/`;
      const url = snapshot.ref.toString();
      const id = url.substring(baseUrl.length);
      this.players.push({
        name: value.name,
        rank: value.rank,
        id,
      });
      this.forceUpdate();
    });

    this.props.database.ref(`players`).on(`child_changed`, snapshot => {
      const baseUrl = `https://table-tennis-handicap.firebaseio.com/players/`;
      const url = snapshot.ref.toString();
      const id = url.substring(baseUrl.length);
      for (let i = 0, len = this.players.length; i < len; i++) {
        if (this.players[i].id === id) {
          this.players[i].name = snapshot.val().name;
          this.forceUpdate();
          break;
        }
      }
    });
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
};
