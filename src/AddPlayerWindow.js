import React from 'react';
import Firebase from 'firebase';

import FormRow from './FormRow';

export default class AddPlayerWindow extends React.Component {
  render() {
    const styles = {
      background: {

      },
      window: {

      },
    };

    return (
      <div style={this.props.style}>
        <div style={styles.background} />
        <div>
          <FormRow name={`Name`} type={`string`} />
          <FormRow name={`Initial Score`} type={`number`} />
          <button onClick={this.addPlayer}>Add</button>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.database = Firebase.database();
  }

  addPlayer = () => {
    this.database.red(`players/${this.name}`).set({
      name: this.name,
      score: this.score,
    });
  }
}

AddPlayerWindow.propTypes = {
  style: React.PropTypes.object.isRequired,
};
