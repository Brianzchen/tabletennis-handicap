import React from 'react';
import _ from 'lodash';


export default class GameModePlayer extends React.Component {
  render() {
    const playersOptions = _.map(this.props.players, p => <option key={p.name} >{p.name} Rank:{p.rank}</option>);
    const tableTennisValidScores = _.map(_.range(12), s => <option key={s}>{s}</option>);
    return (
      <div>
        <select>
          {playersOptions}
        </select>
        <select>
          {tableTennisValidScores}
        </select>
      </div>
    );
  }

  // constructor(props) {
  //   super(props);
  // }
}

GameModePlayer.propTypes = {
  players: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
