import React from 'react';
import _ from 'lodash';

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
      <GameMode /> : <PlayersList />;

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
