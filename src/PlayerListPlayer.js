import React from 'react';

export default class PlayerListPlayer extends React.Component {
  render() {
    const playerName = (
      this.state.edit ?
        (<form onSubmit={this.saveName}>
          <input ref={o => { this.input = o; }} type={`text`} placeholder={this.props.player.name} onChange={this.handleNameChange} />
        </form>) :
        <span onClick={this.editPlayerName}>{this.props.player.name}</span>
    );

    return (
      <div>
        <div>
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

  componentDidUpdate() {
    this.input && this.input.focus();
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  }

  saveName = event => {
    event.preventDefault();
    if (this.state.name.trim().length > 0) {
      const name = this.state.name.substring(0, 1).toUpperCase() + this.state.name.substring(1).toLowerCase();

      this.props.database.ref(`players/${this.props.player.id}/`).update({
        name,
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
