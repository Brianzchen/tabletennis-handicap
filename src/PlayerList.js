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
        <button onClick={this.addPlayer}>
          Add
        </button>
        <AddPlayerWindow style={this.state.add ? styles.addPlayerWindowVisible : styles.addPlayerWindowHidden} />
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      add: false,
    };
  }

  addPlayer = () => {
    this.setState({
      add: true,
    });
  }
}

PlayerList.propTypes = {

};
