import React from 'react';
import _ from 'lodash';


export default class GameModePlayer extends React.Component {
  render() {
    const playersOptions = _.map(this.props.players, p => <option key={p.name} >{p.name}</option>);
    const tableTennisValidScores = _.map(_.range(12), s => <option key={s}>{s}</option>);
    return (
      // <form onChangetarget={this.props.onSelect}>
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

  getEvents = event => {
    // console.log(thi  s.form);
  }

  setPlayer = event => {
    this.setState({ player: event.target.value }, () => { this.props.onSelect(this.state.player); });
  }

  setScore = event => {
    this.setState({ score: event.target.value });
  }


  constructor(props) {
    super(props);

    this.state = {
      player: ``,
      score: 0,
    };
  }
}

GameModePlayer.propTypes = {
  players: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onSelect: React.PropTypes.func.isRequired,
};
