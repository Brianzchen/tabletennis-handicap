import React from 'react';

export default class PlayerListPlayer extends React.Component {
  render() {
    const playerName = (
      this.state.edit ?
        (<form onSubmit={this.saveName}>
          <input type={`text`} placeholder={this.props.player.name} onChange={this.handleNameChange} />
        </form>) :
        <span>{this.props.player.name}</span>
    );

    return (
      <div>
        <div onClick={this.editPlayerName}>
          {playerName}
        </div>
        <div>
          {this.props.player.rank}
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      name: ``,
    };
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  }

  saveName = event => {
    event.preventDefault();
    if (this.state.name.trim().length > 0) {
      this.props.database.ref(`players/${this.props.player.id}/`).update({
        name: this.state.name,
      }, () => {
        this.setState({
          edit: false,
        });
      });
    }
  }

  editPlayerName = () => {
    this.setState({
      edit: true,
    });
  }
}

PlayerListPlayer.propTypes = {
  player: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    rank: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  }).isRequired,
  database: React.PropTypes.object.isRequired,
};
