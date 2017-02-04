import React from 'react';
import _ from 'lodash';
import * as Firebase from 'firebase';

import GameMode from './GameMode';
import PlayersList from './PlayerList';
import Tab from './Tab';
import Tabs from './Tabs';

export default class App extends React.Component {
  render() {
    const style = {

    };

    const tabs = _.map(this.tabs, o => <Tab name={o} onClick={this.onChangeTab} key={o} />);

    const body = this.state.tabName === `Game` ?
      <GameMode database={this.database} /> : <PlayersList database={this.database} />;

    return (
      <div style={style}>
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

    const config = {
      apiKey: `AIzaSyAXe3eYpZ0AaGg5UvZjj7l6_pk-Lclopq0`,
      authDomain: `table-tennis-handicap.firebaseapp.com`,
      databaseURL: `https://table-tennis-handicap.firebaseio.com/`,
    };
    this.database = Firebase.initializeApp(config).database();

    this.tabs = [`Game`, `Players`];

    this.state = {
      tabName: `Game`,
    };
  }

  onChangeTab = tabName => {
    this.setState({
      tabName,
    });
  }
}
