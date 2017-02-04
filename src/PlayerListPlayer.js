import React from 'react';

export default function PlayerListPlayer(props) {
  return (
    <div>
      <div>
        {props.name}
      </div>
      <div>
        {props.rank}
      </div>
    </div>
  );
}

PlayerListPlayer.propTypes = {
  name: React.PropTypes.string.isRequired,
  rank: React.PropTypes.string.isRequired,
};
