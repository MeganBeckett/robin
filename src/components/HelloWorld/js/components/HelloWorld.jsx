import PropTypes from 'prop-types';
import React from 'react';
import Hello from './Hello';
import Beautiful from './Beautiful';
import World from './World';

class HelloWorld extends React.Component {
  static propTypes = {
    entities: PropTypes.object,
    env: PropTypes.object
  };

  static defaultProps = {
    entities: undefined,
    env: undefined
  };

  render() {
    return (
      <div className="hello-world">
        <Hello />
        <Hello />
        <Beautiful />
        <World />
        <div>
          <h2>How you doing?</h2>
        </div>
      </div>
    );
  }
}

export default HelloWorld;
