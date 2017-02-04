import React from 'react';
import _ from 'lodash';


export default class GameModePlayer extends React.Component {
  render() {
    const playersOptions = _.map(this.props.players, o => <option key={o.name} >{o.name}</option>);

    const tableTennisValidScores = _.map(_.range(13), o => {
      if (o === 12) {
        return (<option key={o}>Deuce</option>);
      }

      return (
        <option key={o}>{o}</option>
      );
    });

    return (
      <form onChange={this.getEvents} >
        <select onChange={this.setPlayer}>
          {playersOptions}
        </select>
        <select onChange={this.setScore}>
          {tableTennisValidScores}
        </select>
      </form>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      player: ``,
      score: 0,
    };
  }

  setPlayer = event => {
    this.setState({ player: event.target.value }, () => { this.props.onSelect(this.state.player); });
  }

  setScore = event => {
    this.setState({ score: event.target.value });
  }
}

GameModePlayer.propTypes = {
  players: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onSelect: React.PropTypes.func.isRequired,
};
