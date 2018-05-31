import React, { Component } from 'react';


const styles = ({
  content: {
    textAlign: 'center'
  },
});
export default class ComponentOne extends Component {
  render() {
    return (
      <h1 className={styles.content}>Here goes the home page</h1>
    );
  }
}
