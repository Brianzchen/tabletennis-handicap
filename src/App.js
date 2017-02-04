import React from 'react';
import _ from 'lodash';
import * as Firebase from 'firebase';

import GameMode from './GameMode';
import PlayersList from './PlayerList';
import Tab from './Tab';
import Tabs from './Tabs';
import Title from './Title';

export default class App extends React.Component {
  render() {
    const style = {
      fontFamily: `Roboto`,
    };

    const tabs = _.map(this.tabs, o =>
      <Tab name={o} onClick={this.onChangeTab} key={o} selected={o === this.state.tabName} />);

    const body = this.state.tabName === `Game` ?
      <GameMode database={this.database} players={this.players} /> :
      <PlayersList database={this.database} players={this.players} />;

    return (
      <div style={style}>
        <Title />
        <Tabs>
          {tabs}
        </Tabs>
        <div>
          {body}
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.tabs = [`Game`, `Players`];

    this.state = {
      tabName: `Game`,
    };

    const config = {
      apiKey: `AIzaSyAXe3eYpZ0AaGg5UvZjj7l6_pk-Lclopq0`,
      authDomain: `table-tennis-handicap.firebaseapp.com`,
      databaseURL: `https://table-tennis-handicap.firebaseio.com/`,
    };
    this.database = Firebase.initializeApp(config).database();

    this.players = [];

    this.database.ref(`players`).on(`child_added`, snapshot => {
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

    this.database.ref(`players`).on(`child_changed`, snapshot => {
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

  onChangeTab = tabName => {
    this.setState({
      tabName,
    });
  }
}
