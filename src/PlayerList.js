import React from 'react';

import AddPlayerWindow from './AddPlayerWindow';

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

    return (
      <div>
        <button onClick={this.openAddPlayer}>
          Add
        </button>
        <AddPlayerWindow
          style={this.state.add ? styles.addPlayerWindowVisible : styles.addPlayerWindowHidden}
          onSubmit={this.submitAddPlayer}
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
};
